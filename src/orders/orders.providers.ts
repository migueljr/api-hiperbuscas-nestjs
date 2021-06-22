import { Connection } from 'mongoose';
import { OrderSchema } from 'src/orders/schemas/orders.schema';

export const orderProviders = [
  {
    provide: 'ORDER_MODEL',
    useFactory: (connection: Connection) => connection.model('orders', OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];