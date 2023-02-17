require("../db/db");
const { Schema, model } = require("mongoose");

const MeliSchema = new Schema(
  {
    id: { type: String },
    pais: { type: String },
    item: { type: String },
    start_time: { type: Date },
    price: { type: Number },
    namecategory: { type: String },
    currency: { type: String },
    seller: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Meli", MeliSchema);
