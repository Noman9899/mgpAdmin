
import { signInObj } from "../support/pageObjects/signIn"

describe('Tenant Configuration Testcases', () => {



    it(' Tenant Config 001 - Login and go to Tenant Configurations  ', () =>{

        signInObj.gotoTenantConfiguration()

    })

    it(' Tenant Config 002 - Save Config while skipping "Tenant Domain"  ', () =>{

        signInObj.gotoTenantConfiguration()
        cy.wait(1000)
        cy.get('#create_TenantDomain').clear()
        signInObj.clicktheCheckBox('#create_CollectIdEnabled')
        signInObj.clicktheCheckBox('#create_QRLocationCheckEnabled')
        signInObj.validateDistance('#create_QRLocationCheckDistanceInMeters',200)
        cy.get('#SaveConfig').click()

})

it(' Tenant Config 003 - Save Config while skipping "Id Collection"  ', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.skipCheckbox('#create_CollectIdEnabled')
    signInObj.clicktheCheckBox('#create_QRLocationCheckEnabled')
    signInObj.validateDistance('#create_QRLocationCheckDistanceInMeters',500)
    cy.get('#SaveConfig').click()

})


it(' Tenant Config 004 - Save Config while skipping "QR Location check"  ', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.clicktheCheckBox('#create_CollectIdEnabled')
    signInObj.skipCheckbox('#create_QRLocationCheckEnabled')
    signInObj.validateDistance('#create_QRLocationCheckDistanceInMeters',500)
    cy.get('#SaveConfig').click()

})


it(' Tenant Config 005 - Save Config while skipping "both checkboxes"  ', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.skipCheckbox('#create_CollectIdEnabled')
    signInObj.skipCheckbox('#create_QRLocationCheckEnabled')
    signInObj.validateDistance('#create_QRLocationCheckDistanceInMeters',500)
    cy.get('#SaveConfig').click()

})

it(' Tenant Config 006 - Save Config while skipping Acceptance distance  ', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.clicktheCheckBox('#create_CollectIdEnabled')
    signInObj.clicktheCheckBox('#create_QRLocationCheckEnabled')
    cy.get('#create_QRLocationCheckDistanceInMeters').clear()
    cy.get('#SaveConfig').click()

})

it(' Tenant Config 007 - Save Config whith negative distance value', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.clicktheCheckBox('#create_CollectIdEnabled')
    signInObj.clicktheCheckBox('#create_QRLocationCheckEnabled')
    signInObj.validateDistance('#create_QRLocationCheckDistanceInMeters',-10)
    cy.get('#SaveConfig').click()

})

it(' Tenant Config 008 - Save Config whith skipping first Approver', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    cy.get('#ui-id-2').click()

    cy.wait(500)
    signInObj.clicktheCheckBox('#create_InvitationApprovalEnabled')
    signInObj.SelectRandomDropdownValue('[name="SecondApprover"]')
    signInObj.SelectRandomDropdownAll('[name="ApprovalType"]')
     cy.get('#SaveConfig').click()

})


it(' Tenant Config 009 - Save Config whith skipping second Approver', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    cy.get('#ui-id-2').click()

    cy.wait(500)
    signInObj.clicktheCheckBox('#create_InvitationApprovalEnabled')
    signInObj.SelectRandomDropdownValue('[name="FirstApprover"]')
    signInObj.SelectRandomDropdownAll('[name="ApprovalType"]')
     cy.get('#SaveConfig').click()

})


it(' Tenant Config 010 - Save Config whith skipping Enable Invitation Approval', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    cy.get('#ui-id-2').click()

    cy.wait(500)
    signInObj.skipCheckbox('#create_InvitationApprovalEnabled')
    signInObj.SelectRandomDropdownValue('[name="FirstApprover"]')
    signInObj.SelectRandomDropdownValue('[name="SecondApprover"]')
    signInObj.SelectRandomDropdownAll('[name="ApprovalType"]')
     cy.get('#SaveConfig').click()

})


it(' Tenant Config 010 - Save Config whith all the values selected', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    cy.get('#ui-id-2').click()

    cy.wait(500)
    signInObj.clicktheCheckBox('#create_InvitationApprovalEnabled')
    signInObj.SelectRandomDropdownValue('[name="FirstApprover"]')
    signInObj.SelectRandomDropdownValue('[name="SecondApprover"]')
    signInObj.SelectRandomDropdownAll('[name="ApprovalType"]')
     cy.get('#SaveConfig').click()

})


it(' Tenant Config 011 - Save Config whith skipping All entries notification', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    cy.get('#ui-id-3').click()

    cy.wait(500)
    signInObj.skipCheckbox('#create_NotifyAllEntriesEnabled')
    signInObj.SelectRandomDropdownValue('[name="NotificationRecipientUser"]')
     cy.get('#SaveConfig').click()

})


it(' Tenant Config 010 - Save Config whith skipping Notification recipient', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    cy.get('#ui-id-3').click()

    cy.wait(500)
    signInObj.clicktheCheckBox('#create_NotifyAllEntriesEnabled')
     cy.get('#SaveConfig').click()

})

it(' Tenant Config 011 - Save Config whith selecting all values', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    cy.get('#ui-id-3').click()

    cy.wait(500)
    signInObj.clicktheCheckBox('#create_NotifyAllEntriesEnabled')
    signInObj.SelectRandomDropdownValue('[name="NotificationRecipientUser"]')
     cy.get('#SaveConfig').click()

})

it(' Tenant Config 012 - Go to Manage Visitor Type', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.goToManageVisitorTypes()


})

it(' Tenant Config 013 - Click x to close Visitor type popup', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.goToManageVisitorTypes()
    signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')


})

it(' Tenant Config 014 - Click Cancel to close Visitor type popup', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.goToManageVisitorTypes()
    signInObj.closePopup('[class="btn btn--outline close-modal-button"]')


})


it(' Tenant Config 015 - Adding Visitor Type while skipping Name', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.goToManageVisitorTypes()
    signInObj.SelectRandomDropdownAll('#visitorTypeDropdown')
    signInObj.SelectRandomDropdownAll('#visitorTypeCategory')
    cy.get('#addVisitorTypeSubmit').click()



})

it(' Tenant Config 016 - Adding Visitor Type while skipping Visitory Type Category', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.goToManageVisitorTypes()
    signInObj.typeRandomCategory()
    signInObj.SelectRandomDropdownValue('#visitorTypeDropdown')
    
    cy.get('#addVisitorTypeSubmit').click()

})


it(' Tenant Config 017 - Adding Visitor Type while skipping Parent', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.goToManageVisitorTypes()
    signInObj.typeRandomCategory()
    signInObj.SelectRandomDropdownValue('#visitorTypeCategory')
    
    cy.get('#addVisitorTypeSubmit').click()
    signInObj.deleteCategory()

})




it(' Tenant Config 018 - Adding Visitor Type whith all fields', () =>{

    signInObj.gotoTenantConfiguration()
    cy.wait(1000)
    signInObj.goToManageVisitorTypes()
    signInObj.typeRandomCategory()
    signInObj.selectandsaveSubcategoryValue('#visitorTypeDropdown')
    signInObj.SelectRandomDropdownValue('#visitorTypeCategory')
    
   cy.get('#addVisitorTypeSubmit').click()
    cy.wait(1000)
    signInObj.deleteSubCategrory()
    cy.wait(500)
   signInObj.deleteCategory()


})

it(' Tenant Config 019 - Go to Provider Configuration', () =>{

    signInObj.gotoTenantConfiguration()
    cy.get('#notificationConfigurationProvider').click()

})

it(' Tenant Config 020 - Click x to Notification Provider popup', () =>{

    signInObj.gotoTenantConfiguration()
    cy.get('#notificationConfigurationProvider').click()
    cy.wait(1500)
    cy.get('#addNotificationButton').click()
    
    signInObj.closePopup('[class = "btn btn--small btn--outline btn--transparent close-modal-button"]')


})

it(' Tenant Config 021 - Click Cancel to Notification Provider popup', () =>{

    signInObj.gotoTenantConfiguration()
    cy.get('#notificationConfigurationProvider').click()
    cy.wait(1500)
    cy.get('#addNotificationButton').click()
    signInObj.closePopup('[class="btn btn--outline close-modal-button"]')
})

























})