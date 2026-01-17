 
 import { expect } from '@playwright/test';
 
 export class Povestidesucces {
 constructor(page){
    this.page=page

    this.menuPovesti = page.getByRole('link', { name: 'Povești de succes' });

    
    this.pageTitle = page.getByRole('heading', { name: 'Povești de succes' });

    }

    async goto() {
    await this.page.goto('https://oportunitatisicariere.ro/');

    }

    async navigateFromMenu() {
    await this.menuPovesti.click();

    }

    async isLoaded(){
    await expect(this.page).toHaveURL('https://oportunitatisicariere.ro/');

    }

    async checkTitle() {
    await expect(this.pageTitle).toBeVisible();
    }
    }