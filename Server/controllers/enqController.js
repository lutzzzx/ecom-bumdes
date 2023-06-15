const Enquiry = require('../models/enqModel');
const asyncHandler = require('express-async-handler');

// Create enquiry
const createEnquiry = asyncHandler(async (req,res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Get enquiry
const getEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getaEnquiry = await Enquiry.findById(id);
        res.json(getaEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Get all enquiry
const getAllEnquiry = asyncHandler(async (req, res) => {
    try {
        const getAllEnquiries = await Enquiry.find();
        res.json(getAllEnquiries);
    } catch (error) {
        throw new Error(error);
    }
});

// Update enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedEnquiry)
    } catch (error) {
        throw new Error(error);
    }
});

// Delete enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
        res.json(deletedEnquiry)
    } catch (error) {
        throw new Error(error);
    }
});

module.exports= {
    createEnquiry,
    getEnquiry,
    getAllEnquiry,
    updateEnquiry,
    deleteEnquiry,
};