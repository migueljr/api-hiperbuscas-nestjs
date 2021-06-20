import { Document } from 'mongoose';

export interface PaymentMethod extends Document {
  readonly name: string;
  readonly active: boolean;
}