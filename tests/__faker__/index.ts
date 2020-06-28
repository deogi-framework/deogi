import { FactoryContainer } from 'typeorm-entity-factory'
import { Connection } from 'typeorm';
import { BasicPostFactory } from './post-factory';

export const getFactoryContainer = async (connection:Connection) => {
    return FactoryContainer.init({
        connection, // Your TypeORM database connection
        factories: [
            BasicPostFactory
        ],
      });
}