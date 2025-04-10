
import { signInObj } from "../support/pageObjects/signIn"


describe('Buildings Testcases', () => {

    it('Buildings_001 - Login and Click Add Buildings', () => {

        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()

    })

    it('Buildings_002 - Click on "x" to close the popup', () => {
        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)
        cy.get('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]').click({ multiple: true, force: true })


    })

    it('Buildings_003 - Click on "cancel" to close the popup', () => {
        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)
        cy.get('[class = "btn btn--outline close-modal-button"]').click({ multiple: true, force: true })
    })

    it('Buildings 004- Adding Building with searching', () => {

        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)
        signInObj.typeRandomAddress()


        //cy.get('#create-pac-input').clear().type(`${'Sultan Town, Lahore, Pakistan'} {enter}`);


        //cy.get('#inputBuildingInfo input-validation-error').contains('Building name').type("Noman Building"+randomName)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName); // Type into the field
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.uploadImage()

        cy.wait(1000)
        cy.get('.toastify').should('be.visible').and('contain', 'Successfully changed building image');
        cy.get('.toastify').should('not.exist')
        cy.wait(1000)
        cy.get('#addBuildingSubmit').click()



        // const address1 = cy.get('#createBuildingRequest_Address1').invoke('text')

        // if(address1 == '')
        // {
        //     cy.get('#createBuildingRequest_Address1').type('Address1 '+randomName);
        // }

        //Checking if field is blank type some text
        // cy.get('#createBuildingRequest_Address1')
        //     .invoke('text')
        //     .then((text) => {
        //         if (text.trim() === '') {
        //             cy.get('#createBuildingRequest_Address1').type('Address1 ' + randomName);
        //         }





        // });



    })

    it('Buildings 005- Adding Building while skipping Name', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address1').type(`${signInObj.Address1}`)
        cy.get('#createBuildingRequest_Address2').type(`${signInObj.Address2}`)
        cy.get('#createBuildingRequest_City').type(`${signInObj.City}`)
        cy.get('#createBuildingRequest_Country').type(`${signInObj.Country}`)

        signInObj.uploadImage()

        cy.wait(1000)
        cy.get('.toastify').should('be.visible').and('contain', 'Successfully changed building image');
        cy.get('.toastify').should('not.exist')
        cy.wait(1000)
        cy.get('#addBuildingSubmit').click()

    })


    it('Buildings 006- Adding Building while skipping WelcomeMessage', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName);

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address1').type(`${signInObj.Address1}`)
        cy.get('#createBuildingRequest_Address2').type(`${signInObj.Address2}`)
        cy.get('#createBuildingRequest_City').type(`${signInObj.City}`)
        cy.get('#createBuildingRequest_Country').type(`${signInObj.Country}`)

        signInObj.uploadImage()

        cy.wait(2000)
        cy.get('.toastify').should('be.visible').and('contain', 'Successfully changed building image');
        cy.get('.toastify').should('not.exist')
        cy.wait(1000)
        cy.get('#addBuildingSubmit').click()




    })


    it('Buildings 007- Adding Building while skipping Address1', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName);
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address2').type(`${signInObj.Address2}`)
        cy.get('#createBuildingRequest_City').type(`${signInObj.City}`)
        cy.get('#createBuildingRequest_Country').type(`${signInObj.Country}`)

        signInObj.uploadImage()

        cy.wait(2000)
        cy.get('.toastify').should('be.visible').and('contain', 'Successfully changed building image');
        cy.get('.toastify').should('not.exist')
        cy.wait(1000)
        cy.get('#addBuildingSubmit').click()




    })


    it('Buildings 008- Adding Building while skipping Address2', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName);
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address1').type(`${signInObj.Address1}`)
        cy.get('#createBuildingRequest_City').type(`${signInObj.City}`)
        cy.get('#createBuildingRequest_Country').type(`${signInObj.Country}`)

        signInObj.uploadImage()

        cy.wait(2000)
        cy.get('.toastify').should('be.visible').and('contain', 'Successfully changed building image');
        cy.get('.toastify').should('not.exist')
        cy.wait(1000)
        cy.get('#addBuildingSubmit').click()




    })

    it('Buildings 009- Adding Building while skipping City', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName);
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address1').type(`${signInObj.Address1}`)
        cy.get('#createBuildingRequest_Address2').type(`${signInObj.Address2}`)
        cy.get('#createBuildingRequest_Country').type(`${signInObj.Country}`)

        signInObj.uploadImage()

        cy.wait(2000)
        cy.get('.toastify').should('be.visible').and('contain', 'Successfully changed building image');
        cy.get('.toastify').should('not.exist')
        cy.wait(1000)
        cy.get('#addBuildingSubmit').click()




    })

    it('Buildings 010- Adding Building while skipping Country', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName);
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address1').type(`${signInObj.Address1}`)
        cy.get('#createBuildingRequest_Address2').type(`${signInObj.Address2}`)
        cy.get('#createBuildingRequest_City').type(`${signInObj.City}`)

        signInObj.uploadImage()

        cy.wait(2000)
        cy.get('.toastify').should('be.visible').and('contain', 'Successfully changed building image');
        cy.get('.toastify').should('not.exist')
        cy.wait(1000)
        cy.get('#addBuildingSubmit').click()




    })



    it('Buildings 011- Adding Building while skipping Image Upload', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName);
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address1').type(`${signInObj.Address1}`)
        cy.get('#createBuildingRequest_Address2').type(`${signInObj.Address2}`)
        cy.get('#createBuildingRequest_City').type(`${signInObj.City}`)
        cy.get('#createBuildingRequest_Country').type(`${signInObj.Country}`)
        cy.get('#addBuildingSubmit').click()




    })


    it('Buildings 012- Adding Building while filing up all the fields', () => {



        signInObj.GotoBuildings()
        cy.get('#addBuildingButton').click()
        cy.wait(1000)

        const randomName = Cypress._.random(1, 500)
        cy.get('#createBuildingRequest_Name').type('Noman Building ' + randomName);
        cy.get('#createBuildingRequest_WelcomeMessage').type("Welcome to Noman Building " + randomName)

        signInObj.fillInRandomBuildings()

        cy.get('#createBuildingRequest_Address1').type(`${signInObj.Address1}`)
        cy.get('#createBuildingRequest_Address2').type(`${signInObj.Address2}`)
        cy.get('#createBuildingRequest_City').type(`${signInObj.City}`)
        cy.get('#createBuildingRequest_Country').type(`${signInObj.Country}`)

        signInObj.uploadImage()

        cy.wait(2000)
        cy.get('#addBuildingSubmit').click()



    })


})
