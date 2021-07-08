import { Document } from 'mongoose';

export interface Annoucement extends Document {
  readonly title: String;
  readonly content: String;
  readonly price: String;
  readonly images: [];
  readonly categories: String;
  readonly payment_method_id: String;
  readonly payment_detail: String;
  readonly order_id: String;
  readonly active: Boolean;
  readonly date_created: Date;
  readonly date_updated: Date;
  readonly user_id: String
}