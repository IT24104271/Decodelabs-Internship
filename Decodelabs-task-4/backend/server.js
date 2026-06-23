const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("RV Creations Backend Running 🚀");
});

// Get all subscribers
app.get("/api/subscribers", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM Subscribers");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add subscriber
app.post("/api/subscribers", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        await db.query(`
            INSERT INTO Subscribers (Email)
            VALUES ('${email}')
        `);

        res.status(201).json({
            message: "Subscribed Successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});