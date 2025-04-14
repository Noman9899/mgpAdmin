

import { signInObj } from "../support/pageObjects/signIn"


describe('Region TestCases', () => {

    it('Region 001 - Go to Region', () => {
        
    signInObj.goToRegion()
})

it('Region 002 - Click on Region button', () => {
        
    signInObj.goToRegion()
    cy.get('#addTenantButton').click()

})

it('Region 003 - Click x to close popup', () => {
        
    signInObj.goToRegion()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]').click({ multiple: true, force: true })

})

it('Region 004 - Click Cancel to close popup', () => {
        

    signInObj.goToRegion()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('[class = "btn btn--outline close-modal-button"]').click({ multiple: true, force: true })
    

})


it('Region 005- Add Region without a name' , () => 
    {
        signInObj.goToRegion()
        cy.get('#addTenantButton').click()
        cy.wait(500)
        const regionNumber = Math.floor(Math.random() * 50) + 1;
        cy.get('#createRegionRequest_Name').type(' ')
        cy.get('#addRegionSubmit').click()
    
    
    })

it('Region 006- Add Region' , () => 
{
    signInObj.goToRegion()
    cy.get('#addTenantButton').click()
    cy.wait(500)
    const regionNumber = Math.floor(Math.random() * 50) + 1;
    cy.get('#createRegionRequest_Name').type('Test Region'+regionNumber)
    cy.get('#addRegionSubmit').click()


})

it.skip('Region 007- Edit the Region', () => {
    signInObj.goToRegion()
    signInObj.clickButtonRandomly('.jsgrid-row','Edit')
    cy.get('#updateRegionRequest_Name').clear()
    cy.wait(500)
    const regionNumber = Math.floor(Math.random() * 50) + 1;
    cy.get('#updateRegionRequest_Name').type('Test Region'+regionNumber)
    cy.get('#editRegionSubmit').click()
    

})

it.skip('Region 008- Delete the Region', () => {

    signInObj.goToRegion()
    signInObj.clickButtonRandomly('.jsgrid-row','Delete')

})

})