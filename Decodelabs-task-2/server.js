// IMPORTS
const express = require("express");

// APP CONFIGURATION
const app = express();
const PORT = 3000;

app.use(express.json());

// SAMPLE DATA
const interns = [
    {
        id: 1,
        name: "Nikshika",
        role: "Full Stack Developer Intern"
    },
    {
        id: 2,
        name: "Niththiyananthan",
        role: "Frontend Developer Intern"
    }
];

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Backend API is Running 🚀");
});

// GET ALL INTERNS
app.get("/interns", (req, res) => {
    res.status(200).json(interns);
});

// GET INTERN BY ID
app.get("/interns/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const intern = interns.find(intern => intern.id === id);

    if (!intern) {
        return res.status(404).json({
            message: "Intern not found"
        });
    }

    res.status(200).json(intern);
});

// ADD NEW INTERN
app.post("/interns", (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            message: "Name and role are required"
        });
    }

    const newId =
        interns.length > 0
            ? Math.max(...interns.map(intern => intern.id)) + 1
            : 1;

    const newIntern = {
        id: newId,
        name,
        role
    };

    interns.push(newIntern);

    res.status(201).json({
        message: "Intern added successfully",
        intern: newIntern
    });
});

// UPDATE INTERN
app.put("/interns/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, role } = req.body;

    const intern = interns.find(intern => intern.id === id);

    if (!intern) {
        return res.status(404).json({
            message: "Intern not found"
        });
    }

    if (!name && !role) {
        return res.status(400).json({
            message: "Provide name or role to update"
        });
    }

    if (name) intern.name = name;
    if (role) intern.role = role;

    res.status(200).json({
        message: "Intern updated successfully",
        intern
    });
});

// DELETE INTERN
app.delete("/interns/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = interns.findIndex(intern => intern.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Intern not found"
        });
    }

    const deletedIntern = interns.splice(index, 1);

    res.status(200).json({
        message: "Intern deleted successfully",
        intern: deletedIntern[0]
    });
});

// START SERVER
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
