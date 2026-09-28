import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("Project02");
const users = db.collection("users");

async function connectDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB");
        console.error(error);
    }
}

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});

app.post("/signup", async (req, res) => {
    const { username, name, email, password } = req.body;
    const usernameToUse = username || name;

    if (!usernameToUse || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required." });
    }

    try {
        const existingUser = await users.findOne({
            $or: [{ username: usernameToUse }, { email }]
        });

        if (existingUser) {
            return res.status(409).json({ message: "Username or email already exists." });
        }

        const result = await users.insertOne({
            username: usernameToUse,
            email,
            password
        });

        return res.status(201).json({
            message: "Signup successful!",
            user: {
                id: result.insertedId,
                username: usernameToUse,
                email
            }
        });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ message: "Unable to create user." });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const user = await users.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        return res.status(200).json({
            message: "Login successful!",
            user: { email }
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Unable to process login." });
    }
});

connectDatabase();

app.listen(9000, () => {
    console.log("Server running on port 9000");
});
