import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    reporter: 'html',
    // fullyParallel: true,

    use: {
        baseURL: 'http://localhost:3000',
        screenshot: 'only-on-failure',
        headless: false,
        launchOptions: { slowMo: 1000 }
    },

    // webServer: {
    //     command: 'npm run start',
    //     url: 'http://localhost:3000',
    // }
});