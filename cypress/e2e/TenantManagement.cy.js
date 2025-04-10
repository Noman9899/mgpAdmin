import { signInObj } from "../support/pageObjects/signIn"



function clickonAddTenantPopup()
{
    signInObj.gotoTenantManagment()
    cy.get('#addTenantButton').click()

}



describe('Tenant Management Cases', () => {

   it('Tenant Management 001- Login and go to Tenant Popup   ', () => {

    clickonAddTenantPopup()

})


it('Tenant Management 002 - Close Tenant popup clicking on x', () => {
  
    clickonAddTenantPopup()
    signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')
    

})

it('Tenant Management 003 - Close Gates popup clicking on Cancel', () => {
  
    clickonAddTenantPopup()
    signInObj.closePopup('[class = "btn btn--outline close-modal-button"]')

    

})

it('Tenant Management 004- Adding Tenant skipping key   ', () => {

    clickonAddTenantPopup()
    signInObj.typeNameRandomly('#createTenantRequest_Name', "Testing Tenant ")
    signInObj.typeEmailRandomly('#createTenantRequest_AdminEmail',"tenantemail")
    signInObj.SelectRandomDropdownValue('#RegionSelect')
    signInObj.SelectRandomDropdownValue('#companyName')
    cy.get('#addTenantSubmit').click()


})

it('Tenant Management 005- Adding Tenant skipping Name   ', () => {

    clickonAddTenantPopup()
    signInObj.typeNameRandomly('#createTenantRequest_Id', "tenantKey")
    signInObj.typeEmailRandomly('#createTenantRequest_AdminEmail',"tenantemail")
    signInObj.SelectRandomDropdownValue('#RegionSelect')
    signInObj.SelectRandomDropdownValue('#companyName')
    cy.get('#addTenantSubmit').click()

})    


it('Tenant Management 006- Adding Tenant skipping Email   ', () => {

    clickonAddTenantPopup()
    
    signInObj.typeNameRandomly('#createTenantRequest_Id', "tenantKey")
    signInObj.typeNameRandomly('#createTenantRequest_Name', "Testing Tenant ")
    signInObj.SelectRandomDropdownValue('#RegionSelect')
    signInObj.SelectRandomDropdownValue('#companyName')
    cy.get('#addTenantSubmit').click()


}) 


it('Tenant Management 007- Adding Tenant skipping Region   ', () => {

    clickonAddTenantPopup()
    
    signInObj.typeNameRandomly('#createTenantRequest_Id', "tenantKey")
    signInObj.typeNameRandomly('#createTenantRequest_Name', "Testing Tenant ")
    signInObj.typeEmailRandomly('#createTenantRequest_AdminEmail',"tenantemail")
    signInObj.SelectRandomDropdownValue('#companyName')
    cy.get('#addTenantSubmit').click()


})

it('Tenant Management 008- Adding Tenant skipping Customer   ', () => {

    clickonAddTenantPopup() 
    signInObj.typeNameRandomly('#createTenantRequest_Id', "tenantKey")
    signInObj.typeNameRandomly('#createTenantRequest_Name', "Testing Tenant ")
    signInObj.typeEmailRandomly('#createTenantRequest_AdminEmail',"tenantemail")
    signInObj.SelectRandomDropdownValue('#RegionSelect')
    cy.get('#addTenantSubmit').click()

}) 


it('Tenant Management 009- Editing Tenant ', () => {
    signInObj.gotoTenantManagment()
    cy.wait(1000)
    signInObj.clickButtonRandomlySkippingRoot('.jsgrid-row','Edit')
    cy.wait(1000)
    cy.get('#updateTenantRequest_Name').invoke('removeAttr', 'readonly').clear()
    signInObj.typeNameRandomly('#updateTenantRequest_Name', "Test Tenant ")
    signInObj.SelectRandomDropdownValue('#UpdateRegionSelect')
    signInObj.SelectRandomDropdownValue('#UpdateCustomerSelect')
    signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')


})    




})