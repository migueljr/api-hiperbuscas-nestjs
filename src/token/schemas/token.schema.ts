import * as mongoose from 'mongoose';

export const TokenSchema = new mongoose.Schema({
  hash: {
    type: String,
    required :true,
  },
  email: {
    type: String,
    required:true,
    unique: true
  },
});