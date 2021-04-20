const e = require("express");
const express = require("express");
const router = express.Router();

const roomsJson = require("../Rooms.json");
let rooms = roomsJson.rooms;

router.get("/", (req, res) => {
    return res.status(200).json({ rooms: rooms });
});

router.post("/", (req, res) => {
    const isActive = 'false';
    const { roomNumber, amount } = req.body;
    let result = rooms.find((room) => {
        return room.roomNumber === roomNumber
    })
    if (!roomNumber || !amount) {
        return res.status(200).json({ error: 'enter amount and roomNumber' })
    }
    else if (result) {
        return res.status(200).json({ error: 'exist' })
    }
    rooms.push({ roomNumber, amount, isActive });
    console.log(rooms);
    return res.status(200).send("success");
});


module.exports = router;
