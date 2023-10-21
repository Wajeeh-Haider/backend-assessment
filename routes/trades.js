const express = require("express");
const router = express.Router();
const {
  createTrade,
  getAllTrades,
  getTradeWithId,
  updateTrade,
  deleteTrade,
  editTrade,
} = require("../controllers/trades");

router.get("/", getAllTrades);
router.get("/:id", getTradeWithId);
router.post("/", createTrade);
router.put("/:id", updateTrade);
router.delete("/:id", deleteTrade);
router.patch("/:id", editTrade);

module.exports = router;
