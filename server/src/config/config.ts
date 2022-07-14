require("dotenv").config();

interface IConfig {
  server_port: string;
}

export const getConfig = (): IConfig => {
  const config: IConfig = {
    server_port: process.env.SERVER_PORT || "3001",
  };

  return config;
};
