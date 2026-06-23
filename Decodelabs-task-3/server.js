const express = require("express");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(express.json());

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Database API Running 🚀");
});

// GET ALL INTERNS
app.get("/interns", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM Interns");
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// GET INTERN BY ID
app.get("/interns/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const result = await db.query(
            `SELECT * FROM Interns WHERE Id = ${id}`
        );

        if (result.recordset.length === 0) {
            return res.status(404).json({
                message: "Intern not found"
            });
        }

        res.status(200).json(result.recordset[0]);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// ADD NEW INTERN
app.post("/interns", async (req, res) => {
    try {
        const { name, role } = req.body;

        if (!name || !role) {
            return res.status(400).json({
                message: "Name and Role are required"
            });
        }

        await db.query(`
            INSERT INTO Interns (Name, Role)
            VALUES ('${name}', '${role}')
        `);

        res.status(201).json({
            message: "Intern added successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// UPDATE INTERN
app.put("/interns/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { name, role } = req.body;

        await db.query(`
            UPDATE Interns
            SET Name='${name}', Role='${role}'
            WHERE Id=${id}
        `);

        res.status(200).json({
            message: "Intern updated successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// DELETE INTERN
app.delete("/interns/:id", async (req, res) => {
    try {
        const id = req.params.id;

        await db.query(`
            DELETE FROM Interns
            WHERE Id=${id}
        `);

        res.status(200).json({
            message: "Intern deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// START SERVER
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});