
//import {} from './Login.cy'

import { signInObj } from "../support/pageObjects/signIn"



function clickRandomCheckbox()
{


    //cy.get('.checkbox-group__label__text__title').contains('G4 Johar').click()  // Specific checkbox clicking

    cy.get('.checkbox-group__label__text__title') // Select all checkboxes
    .then(($checkboxes) => {
       //const checkboxesArray = Cypress._.shuffle($checkboxes); // Shuffle the checkboxes randomly
       const numberToClick = Cypress._.random(0, $checkboxes.length-1); // Pick a random number of checkboxes to click
   cy.wrap($checkboxes[numberToClick]).click(); // Click each selected checkbox
     });

}

const randomNumSecurtiy = Cypress._.random(1000, 9999);
const randomNumAdmin  = Cypress._.random(1,555);
const randomNumEditor = Cypress._.random(1,555); 
const randomNumAPI = Cypress._.random(1,555); 

const emailSecurity = `Nomansecurity_${randomNumSecurtiy}@yopmail.com`;
const emailAdmin = `NomanAdmin+_${randomNumAdmin}@yopmail.com`
const emailEditor = `NomanEditor+_${randomNumEditor}@yopmail.com`
const emailAPI = `NomanAPI+_${randomNumAPI}@yopmail.com`



////////////////////////////////////////// SECURITY USER TEST CASES //////////////////////////////////////

describe('UserManagement - Cases for adding user as Security', () => {
    beforeEach(() => {
    })
  
    it('UserManagement_001 - Login and Click Add User', () => {
    
     signInObj.GotoUserManagement()
     cy.get('#addUserButton').click()

    })

    it('UserManagement_002 - Click on "x" to close the popup' , () =>
    {
        signInObj.GotoUserManagement()
        cy.get('#addUserButton').click()
        cy.wait(1000)
        cy.get('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]').click( { multiple: true, force:true })


    })

    it('UserManagement_003 - Click on "cancel" to close the popup' , () =>
        {
            signInObj.GotoUserManagement()
            cy.get('#addUserButton').click()
            cy.wait(1000)
            cy.get('[class = "btn btn--outline close-modal-button"]').click( { multiple: true, force:true })
        })


        it('UserManagement_004 - Adding User while skipping First Name' , () =>
            {
                signInObj.GotoUserManagement()
                cy.get('#addUserButton').click()
                cy.wait(1000)
                //userCount++
                cy.get('#registerUserRequest_LastName').type("Security"+randomNumSecurtiy)
                cy.get('#registerUserRequest_Email').type(emailSecurity)
                cy.get('#registerUserRequest_PhoneNumber').type(123123)
                cy.get('#roleSelect').select(2)
               clickRandomCheckbox()         //Select the building chekcboxes randomly   
               cy.get('#registerUserSubmit').click()

              

            })


            it('UserManagement_005 - Adding User while skipping Last Name' , () =>
                {
                    signInObj.GotoUserManagement()
                    cy.get('#addUserButton').click()
                    cy.wait(1000)
                    //userCount++
                    cy.get('#registerUserRequest_FirstName').type("Security"+randomNumSecurtiy)
                    cy.get('#registerUserRequest_Email').type(emailSecurity)
                    cy.get('#registerUserRequest_PhoneNumber').type(123123)
                    cy.get('#roleSelect').select(2)
                   clickRandomCheckbox()         //Select the building chekcboxes randomly   
                   cy.get('#registerUserSubmit').click()
    
                  
    
                })
                
                it('UserManagement_006 - Adding User while skipping Email' , () =>
                    {
                        signInObj.GotoUserManagement()
                        cy.get('#addUserButton').click()
                        cy.wait(1000)
                        //userCount++
                        cy.get('#registerUserRequest_FirstName').type("Noman")
                        cy.get('#registerUserRequest_LastName').type("Security"+randomNumSecurtiy)
                        
                        
                        cy.get('#registerUserRequest_PhoneNumber').type(123123)
                        cy.get('#roleSelect').select(2)
                       clickRandomCheckbox()         //Select the building chekcboxes randomly   
                       cy.get('#registerUserSubmit').click()
        
                      
        
                    })
                    
                    
                    it('UserManagement_007 - Adding User while skipping Password' , () =>
                        {
                            signInObj.GotoUserManagement()
                            cy.get('#addUserButton').click()
                            cy.wait(1000)
                            //userCount++
                            cy.get('#registerUserRequest_FirstName').type("Noman")
                            cy.get('#registerUserRequest_LastName').type("Security"+randomNumSecurtiy)
                            
                            cy.get('#registerUserRequest_Email').type(emailSecurity)
                            cy.get('#registerUserRequest_PhoneNumber').type(123123)
                            cy.get('#registerUserRequest_Password').clear()
                            cy.get('#roleSelect').select(2)
                           clickRandomCheckbox()         //Select the building chekcboxes randomly   
                           cy.get('#registerUserSubmit').click()
            
                          
            
                        }) 


            it('UserManagement_008 - Adding New User with Security guard Role' , () =>
            {

                signInObj.GotoUserManagement()
            cy.get('#addUserButton').click()
            cy.wait(1000)
            //userCount++
            cy.get('#registerUserRequest_FirstName').type("Noman")
            cy.get('#registerUserRequest_LastName').type("Security"+randomNumSecurtiy)
            
            cy.get('#registerUserRequest_Email').type(emailSecurity)
            cy.get('#registerUserRequest_PhoneNumber').type(123123)
            cy.get('#roleSelect').select(2)
            clickRandomCheckbox()         //Select the building chekcboxes randomly   
            cy.get('#registerUserSubmit').click()
            cy.wait(1000) 
            cy.get('#searchInput').type("Security"+randomNumSecurtiy)
            cy.get('#searchInputButton').click()
            cy.wait(1000)
            cy.get('.btn-secondary').contains('Edit').click({multiple:true})
            cy.wait(1000)
            cy.get('#deleteUserSubmit').contains('Delete').click({multiple:true})    
                    
        
            }) 



})


////////////////////////////////////////// ADMIN USER TEST CASES //////////////////////////////////////

describe('UserManagement - Cases for adding user as Admin', () => {
    beforeEach(() => {
    })
  
   it('UserManagement_009 - Adding Admin while skipping First Name' , () =>
            {
                signInObj.GotoUserManagement()
                cy.get('#addUserButton').click()
                cy.wait(1000)
                //userCount++
                cy.get('#registerUserRequest_LastName').type("Admin"+randomNumAdmin)
                cy.get('#registerUserRequest_Email').type(emailAdmin)
                cy.get('#registerUserRequest_PhoneNumber').type(123123)
                cy.get('#roleSelect').select(1)
                cy.get('#registerUserSubmit').click()

              

            })


            it('UserManagement_010 - Adding Admin while skipping Last Name' , () =>
                {
                    signInObj.GotoUserManagement()
                    cy.get('#addUserButton').click()
                    cy.wait(1000)
                    //userCount++
                    cy.get('#registerUserRequest_FirstName').type("Noman")
                    cy.get('#registerUserRequest_Email').type(emailAdmin)
                    cy.get('#registerUserRequest_PhoneNumber').type(123123)
                    cy.get('#roleSelect').select(0)
                    cy.get('#registerUserSubmit').click()
    
                  
    
                })
                
                it('UserManagement_011 - Adding Admin while skipping Email' , () =>
                    {
                        signInObj.GotoUserManagement()
                        cy.get('#addUserButton').click()
                        cy.wait(1000)
                        //userCount++
                        cy.get('#registerUserRequest_FirstName').type("Noman")
                        cy.get('#registerUserRequest_LastName').type("Admin"+randomNumAdmin)
                        
                        
                        cy.get('#registerUserRequest_PhoneNumber').type(123123)
                        cy.get('#roleSelect').select(0)
                        cy.get('#registerUserSubmit').click()
        
                      
        
                    })
                    
                    
                    it('UserManagement_012 - Adding Admin while skipping Password' , () =>
                        {
                            signInObj.GotoUserManagement()
                            cy.get('#addUserButton').click()
                            cy.wait(1000)
                            //userCount++
                            cy.get('#registerUserRequest_FirstName').type("Noman")
                            cy.get('#registerUserRequest_LastName').type("Admin"+randomNumAdmin)
                            
                            cy.get('#registerUserRequest_Email').type(emailAdmin)
                            cy.get('#registerUserRequest_PhoneNumber').type(123123)
                            cy.get('#registerUserRequest_Password').clear()
                            cy.get('#roleSelect').select(0)
                            cy.get('#registerUserSubmit').click()
            
                          
            
                        }) 


            it('UserManagement_013 - Adding New User Admin Role' , () =>
            {

                signInObj.GotoUserManagement()
            cy.get('#addUserButton').click()
            cy.wait(1000)
            //userCount++
            cy.get('#registerUserRequest_FirstName').type("Noman")
            cy.get('#registerUserRequest_LastName').type("Admin"+randomNumAdmin)
            
            cy.get('#registerUserRequest_Email').type(emailAdmin)
            cy.get('#registerUserRequest_PhoneNumber').type(123123)
            cy.get('#roleSelect').select(0)
            
            cy.get('#registerUserSubmit').click()
            cy.wait(1000) 
            cy.get('#searchInput').type("Admin"+randomNumAdmin)
            cy.get('#searchInputButton').click()
            cy.wait(1000)
            cy.get('.btn-secondary').contains('Edit').click({multiple:true})
            cy.wait(1000)
            cy.get('#deleteUserSubmit').contains('Delete').click({multiple:true})    
                    
        
            }) 



})


////////////////////////////////////////// EDITOR USER TEST CASES //////////////////////////////////////

describe('UserManagement - Cases for adding user as Editor', () => {
    beforeEach(() => {
    })
  
    it('UserManagement_014 - Adding Editor while skipping First Name' , () =>
            {
                signInObj.GotoUserManagement()
                cy.get('#addUserButton').click()
                cy.wait(1000)
                //userCount++
                cy.get('#registerUserRequest_LastName').type("Editor"+randomNumEditor)
                cy.get('#registerUserRequest_Email').type(emailEditor)
                cy.get('#registerUserRequest_PhoneNumber').type(123123)
                cy.get('#roleSelect').select(1)
               clickRandomCheckbox()         //Select the building chekcboxes randomly   
               cy.get('#registerUserSubmit').click()

              

            })


            it('UserManagement_015 - Adding Editor while skipping Last Name' , () =>
                {
                    signInObj.GotoUserManagement()
                    cy.get('#addUserButton').click()
                    cy.wait(1000)
                    //userCount++
                    cy.get('#registerUserRequest_FirstName').type("Noman")
                    cy.get('#registerUserRequest_Email').type(emailEditor)
                    cy.get('#registerUserRequest_PhoneNumber').type(123123)
                    cy.get('#roleSelect').select(1)
                   clickRandomCheckbox()         //Select the building chekcboxes randomly   
                   cy.get('#registerUserSubmit').click()
    
                  
    
                })
                
                it('UserManagement_016 - Adding Editor while skipping Email' , () =>
                    {
                        signInObj.GotoUserManagement()
                        cy.get('#addUserButton').click()
                        cy.wait(1000)
                        //userCount++
                        cy.get('#registerUserRequest_FirstName').type("Noman")
                        cy.get('#registerUserRequest_LastName').type("Editor"+randomNumEditor)
                        
                        
                        cy.get('#registerUserRequest_PhoneNumber').type(123123)
                        cy.get('#roleSelect').select(1)
                       clickRandomCheckbox()         //Select the building chekcboxes randomly   
                       cy.get('#registerUserSubmit').click()
        
                      
        
                    })
                    
                    
                    it('UserManagement_017 - Adding Editor while skipping Password' , () =>
                        {
                            signInObj.GotoUserManagement()
                            cy.get('#addUserButton').click()
                            cy.wait(1000)
                            //userCount++
                            cy.get('#registerUserRequest_FirstName').type("Noman")
                            cy.get('#registerUserRequest_LastName').type("Editor"+randomNumEditor)
                            
                            cy.get('#registerUserRequest_Email').type(emailEditor)
                            cy.get('#registerUserRequest_PhoneNumber').type(123123)
                            cy.get('#registerUserRequest_Password').clear()
                            cy.get('#roleSelect').select(1)
                           clickRandomCheckbox()         //Select the building chekcboxes randomly   
                           cy.get('#registerUserSubmit').click()
            
                          
            
                        }) 


            it('UserManagement_018 - Adding New User with Editor Role' , () =>
            {

                signInObj.GotoUserManagement()
            cy.get('#addUserButton').click()
            cy.wait(1000)
            //userCount++
            cy.get('#registerUserRequest_FirstName').type("Noman")
            cy.get('#registerUserRequest_LastName').type("Editor"+randomNumEditor)
            
            cy.get('#registerUserRequest_Email').type(emailEditor)
            cy.get('#registerUserRequest_PhoneNumber').type(123123)
            cy.get('#roleSelect').select(1)
            clickRandomCheckbox()         //Select the building chekcboxes randomly   
            cy.get('#registerUserSubmit').click()
            cy.wait(1000) 
            cy.get('#searchInput').type("Editor"+randomNumEditor)
            cy.get('#searchInputButton').click()
            cy.wait(1000)
            cy.get('.btn-secondary').contains('Edit').click({multiple:true})
            cy.wait(1000)
            cy.get('#deleteUserSubmit').contains('Delete').click({multiple:true})    
                    
        
            }) 



})


////////////////////////////////////////// API USER TEST CASES //////////////////////////////////////

describe('UserManagement - Cases for adding user as API', () => {
    beforeEach(() => {
    })


        it('UserManagement_019 - Adding API while skipping First Name' , () =>
            {
                signInObj.GotoUserManagement()
                cy.get('#addUserButton').click()
                cy.wait(1000)
                //userCount++
                cy.get('#registerUserRequest_LastName').type("API"+randomNumAPI)
                cy.get('#registerUserRequest_Email').type(emailAPI)
                cy.get('#registerUserRequest_PhoneNumber').type(123123)
                cy.get('#roleSelect').select(3)
               clickRandomCheckbox()         //Select the building chekcboxes randomly   
               cy.get('#registerUserSubmit').click()

              

            })


            it('UserManagement_020 - Adding API while skipping Last Name' , () =>
                {
                    signInObj.GotoUserManagement()
                    cy.get('#addUserButton').click()
                    cy.wait(1000)
                    //userCount++
                    cy.get('#registerUserRequest_FirstName').type("Noman")
                    cy.get('#registerUserRequest_Email').type(emailAPI)
                    cy.get('#registerUserRequest_PhoneNumber').type(123123)
                    cy.get('#roleSelect').select(3)
                   clickRandomCheckbox()         //Select the building chekcboxes randomly   
                   cy.get('#registerUserSubmit').click()
    
                  
    
                })
                
                it('UserManagement_021 - Adding API while skipping Email' , () =>
                    {
                        signInObj.GotoUserManagement()
                        cy.get('#addUserButton').click()
                        cy.wait(1000)
                        //userCount++
                        cy.get('#registerUserRequest_FirstName').type("Noman")
                        cy.get('#registerUserRequest_LastName').type("API"+randomNumAPI)
                        
                        
                        cy.get('#registerUserRequest_PhoneNumber').type(123123)
                        cy.get('#roleSelect').select(3)
                       clickRandomCheckbox()         //Select the building chekcboxes randomly   
                       cy.get('#registerUserSubmit').click()
        
                      
        
                    })
                    
                    
                    it('UserManagement_022 - Adding API while skipping Password' , () =>
                        {
                            signInObj.GotoUserManagement()
                            cy.get('#addUserButton').click()
                            cy.wait(1000)
                            
                            cy.get('#registerUserRequest_FirstName').type("Noman")
                            cy.get('#registerUserRequest_LastName').type("API"+randomNumAPI)
                            
                            cy.get('#registerUserRequest_Email').type(emailAPI)
                            cy.get('#registerUserRequest_PhoneNumber').type(123123)
                            cy.get('#registerUserRequest_Password').clear()
                            cy.get('#roleSelect').select(3)
                           clickRandomCheckbox()         //Select the building chekcboxes randomly   
                           cy.get('#registerUserSubmit').click()
            
                          
            
                        }) 


            it('UserManagement_023 - Adding New User with API Role' , () =>
            {

                signInObj.GotoUserManagement()
            cy.get('#addUserButton').click()
            cy.wait(1000)
            //userCount++
            cy.get('#registerUserRequest_FirstName').type("Noman")
            cy.get('#registerUserRequest_LastName').type("API"+randomNumAPI)
            
            cy.get('#registerUserRequest_Email').type(emailAPI)
            cy.get('#registerUserRequest_PhoneNumber').type(123123)
            cy.get('#roleSelect').select(3)
            clickRandomCheckbox()         //Select the building chekcboxes randomly   
            cy.get('#registerUserSubmit').click()
            cy.wait(1000) 
            cy.get('#searchInput').type("API"+randomNumAPI)
            cy.get('#searchInputButton').click()
            cy.wait(1000)
            cy.get('.btn-secondary').contains('Edit').click({multiple:true})
            cy.wait(1000)
           cy.get('#deleteUserSubmit').contains('Delete').click({multiple:true})    
                    
        
            }) 



})