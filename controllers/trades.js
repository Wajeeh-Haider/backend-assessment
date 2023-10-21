const Trade = require("../models/trades");

const createTrade = async (req, res) => {
  // Get the required Data from the body
  const { id, type, user_id, symbol, shares, price } = req.body;

  try {
    // Create a new Trade
    const craeteTrade = await Trade.create({
      id: id + 1,
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp: Date.now(),
    });

    // Save the Trade
    const trade = await craeteTrade.save();

    res.status(201).json({ trade });
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTrades = async (req, res) => {
  try {
    const { type, user_id } = req.query;

    // Find The trades
    if (type || user_id) {
      const trades = await Trade.findAll({
        where: {
          type,
          user_id,
        },
      });
      return res.status(200).json({ trades });
    }

    const trades = await Trade.findAll();

    // Return the trades
    res.status(200).json({ trades });

    // Return error
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTradeWithId = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ message: "id not found" });
  try {
    const trade = await Trade.findAll({
      where: {
        id,
      },
    });

    if (!trade) return res.status(404).json({ message: "no trade found" });

    res.status(200).json({ trade });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTrade = async (req, res) => {
  res.status(405).json({ message: "method not allowed" });
};

const deleteTrade = async (req, res) => {
  res.status(405).json({ message: "method not allowed" });
};

const editTrade = async (req, res) => {
  res.status(405).json({ message: "method not allowed" });
};

module.exports = {
  createTrade,
  getAllTrades,
  getTradeWithId,
  updateTrade,
  deleteTrade,
  editTrade,
};
