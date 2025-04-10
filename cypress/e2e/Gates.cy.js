import { signInObj } from "../support/pageObjects/signIn"



function clickingAddGatePopup()
{
    signInObj.GotoBuildings()
    cy.wait(3000)
    signInObj.clickButtonRandomly('.jsgrid-row','Gates')
    cy.get('#addGateButton').click()


}

describe('Gates TestCases', () => {

    it('Gates 001 - Login and Go to Gate Randomly', () => {
        
        
       clickingAddGatePopup()

       
        

})

it('Gates 002 - Close Gates popup clicking on x', () => {
  
    clickingAddGatePopup()
    signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')
    

})

it('Gates 003 - Close Gates popup clicking on Cancel', () => {
  
    clickingAddGatePopup()
    signInObj.closePopup('[class = "btn btn--outline close-modal-button"]')

    

})

it('Gates 004 - Adding Gate while skipping Name', () => {

    clickingAddGatePopup()
    cy.get('#createGateRequest_OpenLockEndPoint').type('1')
    cy.get('#createGateRequest_CloseLockEndPoint').type('2')
    cy.get('.checkmark').click({multiple:true, force:true})
    cy.get('#addGateSubmit').click({multiple:true, force:true})
})


it('Gates 005 - Adding Gate while With Name', () => 

{


    clickingAddGatePopup()
    signInObj.typegateNameRandomly('#createGateRequest_Name',"Test Gate ")
    cy.get('#createGateRequest_OpenLockEndPoint').type('1')
    cy.get('#createGateRequest_CloseLockEndPoint').type('2')
    cy.get('.checkmark').click({multiple:true, force:true})
    cy.get('#addGateSubmit').click({multiple:true, force:true})
    cy.wait(1000)
    signInObj.disableAddedGate()

})

it('Gates 006 - Edit the Gate', () => 

{
    
    clickingAddGatePopup()
    signInObj.typegateNameRandomly('#createGateRequest_Name',"Test Gate ")
    cy.get('#createGateRequest_OpenLockEndPoint').type('1')
    cy.get('#createGateRequest_CloseLockEndPoint').type('2')
    cy.get('.checkmark').click({multiple:true, force:true})
    cy.get('#addGateSubmit').click({multiple:true, force:true})
    cy.wait(1000)
    signInObj.EditGate()




})




})

