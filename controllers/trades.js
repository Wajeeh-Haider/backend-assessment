const Trade = require("../models/trades");

const createTrade = async (req, res) => {
  // Get the required data from the body
  const { id, type, user_id, symbol, shares, price } = req.body;

  try {
    // Create a new Trade
    const newTrade = await Trade.create({
      id: id + 1,
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp: Date.now(),
    });

    res.status(201).json({ trade: newTrade });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTrades = async (req, res) => {
  try {
    const { type, user_id } = req.query;

    // Build the query options
    const queryOptions = {};
    if (type) {
      queryOptions.type = type;
    }
    if (user_id) {
      queryOptions.user_id = user_id;
    }

    const trades = await Trade.findAll({
      where: queryOptions,
    });

    res.status(200).json({ trades });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTradeWithId = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ message: "ID not found" });

  try {
    const trade = await Trade.findByPk(id);

    if (!trade) return res.status(404).json({ message: "No trade found" });

    res.status(200).json({ trade });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTrade = async (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
};

const deleteTrade = async (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
};

const editTrade = async (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
};

module.exports = {
  createTrade,
  getAllTrades,
  getTradeWithId,
  updateTrade,
  deleteTrade,
  editTrade,
};
