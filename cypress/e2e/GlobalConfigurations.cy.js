import { signInObj } from "../support/pageObjects/signIn"


describe('Global Configurations TestCases', () => {

    it('Global Configurations 001 - Go to Global Configurations', () => {
        
    signInObj.goToGlobalConfigurations()
})

it('Global Configurations 002 - Click on Global Configuraton button', () => {
        
    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()

})

it('Global Configurations 002 - Click x to close popup', () => {
        
    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]').click({ multiple: true, force: true })

})

it('Global Configurations 002 - Click Cancel to close popup', () => {
        

    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('[class = "btn btn--outline close-modal-button"]').click({ multiple: true, force: true })


})


it('Global Configurations 003 - Adding while skipping Message1', () => {


    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('#createRequest_OnBoardingMessage2').type('Test Onboaring Message2')
    cy.get('#createRequest_Notification').type('Test Notification text will be this')
    cy.get('#createRequest_JoinMgpSmsText').type('Test Join Msg Text')
    signInObj.SelectRandomDropdownAll('#regionDropdown')
    
    const version = signInObj.getRandomVersion()
    cy.get('#createRequest_VisitorAppMinVersion').type(version)
    cy.get('#createRequest_SecurityAppMinVersion').type(version)
    signInObj.clicktheCheckBox('#createRequest_OffersEnabled')
    cy.get('#addRegionSubmit').click()

})

it('Global Configurations 004 - Adding while skipping Message2', () => {


    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('#createRequest_OnBoardingMessage1').type('Test Onboaring Message1')
    cy.get('#createRequest_Notification').type('Test Notification text will be this')
    cy.get('#createRequest_JoinMgpSmsText').type('Test Join Msg Text')
    signInObj.SelectRandomDropdownAll('#regionDropdown')
    
    const version = signInObj.getRandomVersion()
    cy.get('#createRequest_VisitorAppMinVersion').type(version)
    cy.get('#createRequest_SecurityAppMinVersion').type(version)
    signInObj.clicktheCheckBox('#createRequest_OffersEnabled')
    cy.get('#addRegionSubmit').click()
    
})


it('Global Configurations 005 - Adding while skipping Notification text', () => {


    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('#createRequest_OnBoardingMessage1').type('Test Onboaring Message1')
    cy.get('#createRequest_OnBoardingMessage2').type('Test Onboaring Message2')
    cy.get('#createRequest_JoinMgpSmsText').type('Test Join Msg Text')
    signInObj.SelectRandomDropdownAll('#regionDropdown')
    
    const version = signInObj.getRandomVersion()
    cy.get('#createRequest_VisitorAppMinVersion').type(version)
    cy.get('#createRequest_SecurityAppMinVersion').type(version)
    signInObj.clicktheCheckBox('#createRequest_OffersEnabled')
    cy.get('#addRegionSubmit').click()
    
})

it('Global Configurations 006 - Adding while skipping Join Msg', () => {


    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('#createRequest_OnBoardingMessage1').type('Test Onboaring Message1')
    cy.get('#createRequest_OnBoardingMessage2').type('Test Onboaring Message2')
    cy.get('#createRequest_Notification').type('Test Notification text will be this')
    signInObj.SelectRandomDropdownAll('#regionDropdown')
    
    const version = signInObj.getRandomVersion()
    cy.get('#createRequest_VisitorAppMinVersion').type(version)
    cy.get('#createRequest_SecurityAppMinVersion').type(version)
    signInObj.clicktheCheckBox('#createRequest_OffersEnabled')
    cy.get('#addRegionSubmit').click()
    
})


it('Global Configurations 007 - Adding while skipping Region', () => {


    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('#createRequest_OnBoardingMessage1').type('Test Onboaring Message1')
    cy.get('#createRequest_OnBoardingMessage2').type('Test Onboaring Message2')
    cy.get('#createRequest_Notification').type('Test Notification text will be this')
    cy.get('#createRequest_JoinMgpSmsText').type('Test Join Msg Text')
    
    const version = signInObj.getRandomVersion()
    cy.get('#createRequest_VisitorAppMinVersion').type(version)
    cy.get('#createRequest_SecurityAppMinVersion').type(version)
    signInObj.clicktheCheckBox('#createRequest_OffersEnabled')
    cy.get('#addRegionSubmit').click()
    
})

it('Global Configurations 008 - Adding while skipping Visitor app Version', () => {


    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('#createRequest_OnBoardingMessage1').type('Test Onboaring Message1')
    cy.get('#createRequest_OnBoardingMessage2').type('Test Onboaring Message2')
    cy.get('#createRequest_Notification').type('Test Notification text will be this')
    cy.get('#createRequest_JoinMgpSmsText').type('Test Join Msg Text')
    signInObj.SelectRandomDropdownAll('#regionDropdown')
    

    const version = signInObj.getRandomVersion()
    cy.get('#createRequest_SecurityAppMinVersion').type(version)
    signInObj.clicktheCheckBox('#createRequest_OffersEnabled')
    cy.get('#addRegionSubmit').click()
    
})


it('Global Configurations 008 - Adding while skipping Security app Version', () => {

    
    signInObj.goToGlobalConfigurations()
    cy.get('#addTenantButton').click()
    cy.wait(1000)
    cy.get('#createRequest_OnBoardingMessage1').type('Test Onboaring Message1')
    cy.get('#createRequest_OnBoardingMessage2').type('Test Onboaring Message2')
    cy.get('#createRequest_Notification').type('Test Notification text will be this')
    cy.get('#createRequest_JoinMgpSmsText').type('Test Join Msg Text')
    signInObj.SelectRandomDropdownAll('#regionDropdown')
    

    const version = signInObj.getRandomVersion()
    cy.get('#createRequest_VisitorAppMinVersion').type(version)
    signInObj.clicktheCheckBox('#createRequest_OffersEnabled')
    cy.get('#addRegionSubmit').click()
      
})





})