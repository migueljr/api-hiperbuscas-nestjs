import * as mongoose from 'mongoose';

export const AnnoucementSchema = new mongoose.Schema({
  title: String,
  content: String,
  price: String,
  images: Array,
  categories: String,
  payment_method_id: String,
  payment_detail: String,
  order_id: String,
  active: Boolean,
  date_created: Date,
  date_updated: Date,
  user_id: String
});