const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sample Data
let subscribers = [
{
id: 1,
email: "[test@gmail.com](mailto:test@gmail.com)"
}
];

/* =========================
HOME ROUTE
========================= */
app.get("/", (req, res) => {
res.send("Subscriber API Running 🚀");
});

/* =========================
GET ALL SUBSCRIBERS
========================= */
app.get("/subscribers", (req, res) => {
res.json(subscribers);
});

/* =========================
GET SUBSCRIBER BY ID
========================= */
app.get("/subscribers/:id", (req, res) => {
const id = parseInt(req.params.id);


const subscriber = subscribers.find(
    s => s.id === id
);

if (!subscriber) {
    return res.status(404).json({
        message: "Subscriber not found"
    });
}

res.json(subscriber);


});

/* =========================
ADD SUBSCRIBER
========================= */
app.post("/subscribers", (req, res) => {


const { email } = req.body;

if (!email) {
    return res.status(400).json({
        message: "Email is required"
    });
}

const newSubscriber = {
    id: subscribers.length + 1,
    email
};

subscribers.push(newSubscriber);

res.status(201).json({
    message: "Subscriber Added Successfully",
    data: newSubscriber
});


});

/* =========================
UPDATE SUBSCRIBER
========================= */
app.put("/subscribers/:id", (req, res) => {


const id = parseInt(req.params.id);
const { email } = req.body;

const subscriber = subscribers.find(
    s => s.id === id
);

if (!subscriber) {
    return res.status(404).json({
        message: "Subscriber not found"
    });
}

subscriber.email = email;

res.json({
    message: "Subscriber Updated Successfully",
    data: subscriber
});


});

/* =========================
DELETE SUBSCRIBER
========================= */
app.delete("/subscribers/:id", (req, res) => {


const id = parseInt(req.params.id);

const index = subscribers.findIndex(
    s => s.id === id
);

if (index === -1) {
    return res.status(404).json({
        message: "Subscriber not found"
    });
}

subscribers.splice(index, 1);

res.json({
    message: "Subscriber Deleted Successfully"
});


});

/* =========================
START SERVER
========================= */
app.listen(PORT, () => {
console.log(`🚀 Server running on port ${PORT}`);
});
