import { signInObj } from "../support/pageObjects/signIn"
import {faker} from '@faker-js/faker'


function gotoVisitorCategoryPopup()
{
    signInObj.gotoVisitorCategory()
    cy.get('#addGateButton').click()

}

const NameTyped = `Test Category ${faker.string.numeric()}`

describe('Visitory Categpry Cases', () => {



    it('Visitor Type Category 001- Login and go to Add category Popup   ', () => {

      gotoVisitorCategoryPopup()

    
    })


    it('Visitor Type Category 002- Click on x to close   ', () => {
        
        gotoVisitorCategoryPopup()
        signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')

    })

    it('Visitor Type Category 003- Click on Cancel to close   ', () => {
        
        gotoVisitorCategoryPopup()
        signInObj.closePopup('[class = "btn btn--outline close-modal-button"]')

    })

    it('Visitor Type Category 004- Adding category skipping Name   ', () => {

        gotoVisitorCategoryPopup()
        cy.get('#createVisitorCategoryRequest_Name').type(' {backspace}')
        cy.get('#addVisitorCategorySubmit').click()



    
    })


    it('Visitor Type Category 004- Adding category skipping Name   ', () => {

        gotoVisitorCategoryPopup()
        signInObj.typeNameRandomly('#createVisitorCategoryRequest_Name', NameTyped)
        cy.get('#addVisitorCategorySubmit').click()
        cy.wait(1000)
       // signInObj.deleteAddedVisitorCategory()

    })


    it('Visitor Type Category 004- Deleting Added category skipping Name   ', () => {

        signInObj.gotoVisitorCategory()
        signInObj.deleteAddedVisitorCategory(NameTyped)

        //signInObj.deleteAddedVisitorCategory()

    })


})