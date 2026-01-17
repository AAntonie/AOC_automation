//test
import { test } from '@playwright/test';
import { Povestidesucces } from '../pages/Povestidesucces.js';

test('Pagina Povesti de succes se deschide corect', async ({ page }) => {
  const povestidesucces = new Povestidesucces(page);

  await povestidesucces.goto();
  await povestidesucces.navigateFromMenu(); 
  await povestidesucces.isLoaded();
  await povestidesucces.checkTitle();

});

