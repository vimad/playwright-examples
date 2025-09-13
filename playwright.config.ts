import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    reporter: 'html',

    webServer: {
        command: 'npm run start',
        url: 'http://localhost:3000',
    }
});