import { Connection } from 'mongoose';
import { AnnoucementSchema } from 'src/annoucement/schemas/annoucement.schema';

export const annoucementProviders = [
  {
    provide: 'ANNOUCEMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('annoucement', AnnoucementSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];