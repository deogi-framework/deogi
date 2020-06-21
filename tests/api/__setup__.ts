import bootloader from '../../src/http/bootloader';

beforeAll(async () => {
    await bootloader.bootstrap();
});

afterAll(async () => {
    await bootloader.down();
});