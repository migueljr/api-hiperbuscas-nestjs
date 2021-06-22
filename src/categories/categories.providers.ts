import { Connection } from 'mongoose';
import { CategoriesSchema } from 'src/categories/schemas/categories.schema';

export const categoriesProviders = [
  {
    provide: 'CATEGORIES_MODEL',
    useFactory: (connection: Connection) => connection.model('categories', CategoriesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];