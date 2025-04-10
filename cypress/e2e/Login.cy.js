/// <reference types="cypress"/>

import { signInObj } from "../support/pageObjects/signIn"


describe('Login', () => {
  beforeEach(() => {

  })

  it('Admin_LOGIN_001 - Login with skipping Tenant field', () => {
    cy.visit('https://admin-test.mygatepass.com/')
    cy.get('#cookieRequest_Email').type('admin@email.com')
    cy.get('#cookieRequest_Password').type('Password123!')
    cy.get('#loginSubmitButton').click()
    cy.get('#cookieRequest_Tenant-error').should('be.visible').and('contain.text','The Tenant field is required.')
  })

  it('Admin_LOGIN_002 - Login with skipping Password field', () => {
    cy.visit('https://admin-test.mygatepass.com/')

    cy.get('#cookieRequest_Tenant').type('root')

    cy.get('#cookieRequest_Email').type('admin@email.com')
    cy.get('#loginSubmitButton').click()



  }),

    it('Admin_LOGIN_003 - Login with skipping Email field', () => {
      cy.visit('https://admin-test.mygatepass.com/')

      cy.get('#cookieRequest_Tenant').type('root')
      cy.get('#cookieRequest_Password').type('Password123!')
      cy.get('#loginSubmitButton').click()
    }),

    it('Admin_LOGIN_004 - Login with wrong Tenant field', () => {
      cy.visit('https://admin-test.mygatepass.com/')

      cy.get('#cookieRequest_Tenant').type('dummy')

      cy.get('#cookieRequest_Email').type('admin@email.com')
      cy.get('#cookieRequest_Password').type('Password123!')
      cy.get('#loginSubmitButton').click()

    }),

    it('Admin_LOGIN_005 - Login with wrong Email field', () => {
      cy.visit('https://admin-test.mygatepass.com/')

      cy.get('#cookieRequest_Tenant').type('dummy')

      cy.get('#cookieRequest_Email').type('dummyEmail')
      cy.get('#cookieRequest_Password').type('Password123!')
      cy.get('#loginSubmitButton').click()

    }),

    it('Admin_LOGIN_006 - Login with wrong Password field', () => {
      cy.visit('https://admin-test.mygatepass.com/')

      cy.get('#cookieRequest_Tenant').type('root')

      cy.get('#cookieRequest_Email').type('admin@email.com')
      cy.get('#cookieRequest_Password').type('asdasdasd')
      cy.get('#loginSubmitButton').click()

    }),

    it('Admin_LOGIN_007 - Login with Right Credentials', () => {
      
      signInObj.signIn()


    })



    






})