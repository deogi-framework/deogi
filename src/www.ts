import "reflect-metadata";
import bootloader from "./http/bootloader";

(async () => {

    bootloader.bootstrap();

    const port = process.env.SERVICE_PORT || 3000;
    const server = bootloader.app.listen(port);

    console.info(`Server is UP on ${port}`);
    console.info(`open : http://0.0.0.0:${port}`);

    process.on('SIGINT', () => {
        console.info('SIGINT signal received.');
        console.log('Closing http server.');
        bootloader.down();
        console.log('Disconnect db.');
        server.close(() => {
            process.exit();
        });
    });
})();
