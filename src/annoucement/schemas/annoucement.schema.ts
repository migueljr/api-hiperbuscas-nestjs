import * as mongoose from 'mongoose';

export const AnnoucementSchema = new mongoose.Schema({
  hash: {
    type: String,
    required :true,
  },
  adminId: String,
  price: String,
  days: Number,
  dateCreate: String,
  dateActive: String,
  dateModify: String,
  dateUpdate: String,
  userId: String,
  annoucementId: String,
  active: Boolean,
  name: String,
  orderId: String,
});