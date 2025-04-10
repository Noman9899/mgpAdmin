
import { signInObj } from "../support/pageObjects/signIn"


function gotoCustomerManagementPopup() {
    signInObj.gotoCustomerManagement()
    cy.get('#addButton').click()


}

describe('Customer Management Cases', () => {


    it('Customer Management 001- Go to Customer and open popup', () => {


        gotoCustomerManagementPopup()
    })

    it('Customer Management 002- Close Popup on clicking x', () => {
        gotoCustomerManagementPopup()
        signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')


    })

    it('Customer Management 003 - Close popup clicking on x', () => {

        gotoCustomerManagementPopup()
        signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')


    })

    it('Customer Management 004 - Adding Custome skipping Company Name', () => {
        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeRandomCityStateandCountry()
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()

    })

    it('Customer Management 005 - Adding Custome skipping Street', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeRandomCityStateandCountry()
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 006 - Adding Custome skipping City', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeRandomStateandCountry()
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 007 - Adding Custome skipping State', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeRandomCityandCountry()
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 007 - Adding Custome skipping PostalCode', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeRandomCityStateandCountry()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })
    it('Customer Management 008 - Adding Custome skipping Country', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityandState()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 009 - Adding Custome skipping First Name', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityStateandCountry()
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })


    it('Customer Management 010 - Adding Custome skipping Last Name', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityStateandCountry()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 011 - Adding Custome skipping Role', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityStateandCountry()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 012 - Adding Custome skipping Phone Number', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityStateandCountry()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 013 - Adding Custome skipping Email', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityStateandCountry()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        cy.get('#addSubmit').click()



    })

    it('Customer Management 014 - Adding Custome with wrong email format', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityStateandCountry()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Email','invalidemail')
        cy.get('#addSubmit').click()



    })


    it.only('Customer Management 015 - Adding Custome', () => {

        gotoCustomerManagementPopup()
        signInObj.SelectRandomDropdownValue('#tenantDropdown')
        signInObj.SelectRandomDropdownAll('#createRequest_Type')
        signInObj.typeNameRandomly('#createRequest_Companyname', 'Test Company ')
        signInObj.typeNameRandomly('#createRequest_Address_Street', 'Street ')
        signInObj.typeNameRandomly('#createRequest_Address_PostalCode', 'Code ')
        signInObj.typeRandomCityStateandCountry()
        cy.get('#createRequest_PrimaryContact_FirstName').type('Noman')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_LastName', 'Customer ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_Role', 'Role ')
        signInObj.typeNameRandomly('#createRequest_PrimaryContact_PhoneNumber', '123123')
        signInObj.typeEmailRandomly('#createRequest_PrimaryContact_Email', 'customerEmail')
        cy.get('#addSubmit').click()



    })



})