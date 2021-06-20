import * as mongoose from 'mongoose';

export const PaymentMethodSchema = new mongoose.Schema({
  name: {
    type: String,
    required :true,
  },
  active: Boolean,
});