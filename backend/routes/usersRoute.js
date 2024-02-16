const express = require('express');
const router = express.Router();
const userModel = require('../config/backend/models/userModel');

router.get('/', async (req, res) => {
  try {
    const data = await userModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data1 = await userModel.findById(id);
    if (!data1) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(data1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create
router.post('/', async (req, res) => {
  try {
    const newData = new userModel(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update (PUT)
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update (PATCH)
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ msg: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
