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

/* =========================
GET ALL SUBSCRIBERS
========================= */
app.get("/api/subscribers", async (req, res) => {
try {
const result = await db.query("SELECT * FROM Subscribers");
res.json(result.recordset);
} catch (err) {
res.status(500).json({ error: err.message });
}
});

/* =========================
GET SUBSCRIBER BY ID
========================= */
app.get("/api/subscribers/:id", async (req, res) => {
try {
const id = req.params.id;


    const result = await db.query(`
        SELECT * FROM Subscribers
        WHERE Id = ${id}
    `);

    res.json(result.recordset);
} catch (err) {
    res.status(500).json({ error: err.message });
}


});

/* =========================
ADD SUBSCRIBER
========================= */
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

/* =========================
UPDATE SUBSCRIBER
========================= */
app.put("/api/subscribers/:id", async (req, res) => {
try {
const id = req.params.id;
const { email } = req.body;


    await db.query(`
        UPDATE Subscribers
        SET Email='${email}'
        WHERE Id=${id}
    `);

    res.json({
        message: "Subscriber Updated Successfully"
    });

} catch (err) {
    res.status(500).json({
        error: err.message
    });
}


});

/* =========================
DELETE SUBSCRIBER
========================= */
app.delete("/api/subscribers/:id", async (req, res) => {
try {
const id = req.params.id;


    await db.query(`
        DELETE FROM Subscribers
        WHERE Id=${id}
    `);

    res.json({
        message: "Subscriber Deleted Successfully"
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

