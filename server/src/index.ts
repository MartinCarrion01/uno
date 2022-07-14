import { getConfig } from "./config/config"
import { createServer } from "./config/server";

const main = async () => {
    const config = getConfig();
    const app = await createServer();

    app.listen(config.server_port, () => console.log(`Listening on port: ${config.server_port}`));
}

main();