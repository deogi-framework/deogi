import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions[] = [
  {
    name: "default",
    type: "mariadb",
    database: 'deogi',
    synchronize: false,
    logging: true,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1',
    entities: [__dirname + "/src/app/**/entities/**/*.ts"],
    subscribers: [__dirname + "/src/app/**/subscribers/**/*.ts"],
  },
  {
    name: "test",
    type: "mariadb",
    database: 'deogi_test',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1',
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [__dirname + "/src/app/**/entities/**/*.ts"],
    subscribers: [__dirname + "/src/app/**/subscribers/**/*.ts"]
  }
];

export = connectionOptions