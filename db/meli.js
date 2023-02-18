require("../db/db");
const { Schema, model } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const ProductsSchema = new Schema(
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
ProductsSchema.plugin(mongoosePaginate);
module.exports = model("Products", ProductsSchema);
