const express = require("express");
const router = express.Router();

// ✅ Fixed the relative path to middleware
const { isAdmin } = require("../middleware/authmiddleware");

// ✅ Correct relative path to the controller
const adminController = require("../controller/adminController");

// Routes for admin dashboard and food management
router.get("/dashboard", isAdmin, adminController.getDashboard);

router.get("/add-food", isAdmin, adminController.getAddFood);
router.post("/add-food", isAdmin, adminController.postAddFood);

router.get("/food", isAdmin, adminController.getAllFoods);

router.get("/edit-food/:id", isAdmin, adminController.getEditFood);
router.post("/edit-food/:id", isAdmin, adminController.postEditFood);
router.post("/delete-food/:id", isAdmin, adminController.deleteFood);

module.exports = router;
