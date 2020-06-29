import bootloader from './console/bootloader'

bootloader.bootstrap().then(() => {
    
    bootloader.down();    
});

