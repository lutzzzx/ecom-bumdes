const express = require('express');
const {
    createCategory,
    getaCategory,
    getallCategory,
    updateCategory,
    deleteCategory,
} = require ('../controllers/prodCategoryController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createCategory);
router.get('/:id', authMiddleware, isAdmin, getaCategory);
router.get('/', getallCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);

module.exports = router;