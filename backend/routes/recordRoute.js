const express = require('express');
const router = express.Router();
const { Record } = require('../models/userModel');

// GET all records
router.get('/', async (req, res) => { 
    try {
        const records = await Record.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET a record by ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Record.findById(id);
        if (!record) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE a record by ID
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedRecord = await Record.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE a record by ID
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let record = await Record.findById(id);
        if (!record) {
            return res.status(404).json({ error: "Record not found" });
        }
        record = Object.assign(record, req.body);
        await record.save();
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
