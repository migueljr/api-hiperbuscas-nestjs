import { Connection } from 'mongoose';
import { EvoucherSchema } from 'src/evoucher/schemas/evoucher.schema';

export const evoucherProviders = [
  {
    provide: 'EVOUCHER_MODEL',
    useFactory: (connection: Connection) => connection.model('evouchers', EvoucherSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];