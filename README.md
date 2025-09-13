Initialize Project 
``
npm init playwright@latest
``

To download browsers if not already downloaded
```
npx playwright install
sudo env "PATH=$PATH" npx playwright install-deps
```

Run a test
```
npx playwright test ./tests/m2-setup/browser_support.test.ts
```