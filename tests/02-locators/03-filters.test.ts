import {expect, test} from "@playwright/test";

test('Filters', async ({page}) => {
    await page.goto('/savings.html');

    const rows = page.getByRole("row");
    const competition = rows.filter({hasText: 'Competition'});
    console.log(await competition.textContent());

    const secondCell = rows.filter({hasText: 'Competition'})
        .getByRole("cell")
        .nth(1); // 2nd cell
    console.log(await secondCell.textContent());
})