const express = require("express");
const {
  getWishlist,
  createUser,
  loginUserController,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logOut,
  updatePassword,
  userCart,
  getUserCart,
  emptyCart,
  createOrder,
  getOrders,
  loginAdminController,
  getAllOrders,
  getOrderByUserId,
  removeProducFromCart,
  updateProductQuantityFromCart,
} = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/wishlist", authMiddleware, getWishlist);
router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserController);
router.post("/admin-login", loginAdminController);
router.post("/cart", authMiddleware, userCart);
router.get("/cart/", authMiddleware, getUserCart);
router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProducFromCart
);
router.delete(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantityFromCart
);
/*router.delete("/empty-cart", authMiddleware, emptyCart);*/
router.post("/cart/create-order", authMiddleware, createOrder);
/*router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);*/
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logOut);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
