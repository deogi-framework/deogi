import { createConnection, getConnectionOptions, getConnection } from "typeorm";

export const connect = async () => {
  
  let name = "default";
  
  if (process.env.NODE_ENV === "test") {
    name = process.env.NODE_ENV;
  }

  const connectionOptions = await getConnectionOptions(name);
  await createConnection({ ...connectionOptions, name: "default" });
};

export const close = async () => {
  await getConnection().close(); 
};