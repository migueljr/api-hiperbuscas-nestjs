import { Document } from 'mongoose';

export interface Evoucher extends Document {
  readonly hash: String;
  readonly adminId: String;
  readonly price: String;
  readonly days: Number;
  readonly dateCreate: String;
  readonly dateActive: String;
  readonly dateModify: String;
  readonly dateUpdate: String;
  readonly userId: String;
  readonly annoucementId: String;
  readonly active: Boolean;
  readonly name: String;
  readonly orderId: String;
}