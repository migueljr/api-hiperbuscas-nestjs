import { Connection } from 'mongoose';
import { PaymentMethodSchema } from 'src/payment-methods/schemas/payment-methods.schema';

export const paymentMethodsProviders = [
  {
    provide: 'PAYMENT_METHODS_MODEL',
    useFactory: (connection: Connection) => connection.model('payment-methods', PaymentMethodSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];