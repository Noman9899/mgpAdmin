


const addresses = [
  '767 Block G4 Road, Block G4 Block G 4 Phase 2 Johar Town, Lahore, Pakistan',
  'Palm Jumeirah Boardwalk - Crescent Road - Dubai - United Arab Emirates',
  'Daska Laser eye Clinc & Optical Center, Sambrial Road, near Al-Nwab marriage hall, Daska, Pakistan',
  'Indego Tourism, Dragon Mart 2 - Warsan 1 St - International City - Dubai - United Arab Emirates',
  'Sultan Town,Block S1 Phas 2, Lahore, Pakistan',
  'Bar Dubai - 11c St - Dubai - United Arab Emirates'
];

const fillInAddress = [
  '767-Block-G4-Road Block-G4-Block-Phase2-JoharTown Lahore Pakistan',
  'Palm-Jumeirah-Boardwalk Crescent-Road Dubai United-Arab-Emirates',
  'Daska-Laser-eye-Clinc Sambrial-Road-Al-Nawab-marriage-hall Daska Pakistan',
  'Indego-Tourism-Dragon-Mart2 Warsan1-St-International-City Dubai United-Arab-Emirates',
  'Sultan-Town Block-S1-Phase2 Lahore Pakistan',
  'BarDubai 11c-St Dubai United Arab Emirates'
];

const countries = [
  'Pakistan',
  'India',
  'United Arab Emirates',
  'Canada',
  'USA',
  'China',
  'Saudia',
  'Qatar',



];

const cities = [
  'Lahore',
  'Dehli',
  'Dubai',
  'Toronto',
  'Washington DC',
  'Beijing',
  'Riyadh',
  'Doha',

];

const states = [
  'Punjab',
  'Uter Pardesh',
  'Fujairah',
  'Alberta',
  'Alaska',
  'Guangdong',
  'Jizan',
  'DohAl Shamal',

];





const randomAddress = Cypress._.sample(addresses);

const randomFillAddress = Cypress._.sample(fillInAddress)
const randomCountry = Cypress._.sample(countries);
const randomCity = Cypress._.sample(cities);
const splitAddress = randomFillAddress.trim().split(/\s+/)
const randomName = Cypress._.random(1, 100)



export class signInClass {

  Address1 = splitAddress[0]
  Address2 = splitAddress[1]
  City = splitAddress[2]
  Country = splitAddress[3]
  selectedVal = ''



  signIn() {
    cy.visit('/')

    cy.get('#cookieRequest_Tenant').type('root')

    cy.get('#cookieRequest_Email').type('admin@email.com')
    cy.get('#cookieRequest_Password').type('Password123!')
    cy.get('#loginSubmitButton').click()
  }

  GotoUserManagement() {

    this.signIn()

    if (cy.get('#selectLanguage').should('be.visible')) {
      cy.get('[class="tooltiptext"]').should('exist').contains('User Management').click({ force: true })
    }


  }

  GotoBuildings() {

    this.signIn()


    if (cy.get('#selectLanguage').should('be.visible')) {
      cy.get('[class="tooltiptext"]').should('exist').contains('Buildings').click({ force: true })
    }




  }

  gotoTenantConfiguration() {

    this.signIn()


    if (cy.get('#selectLanguage').should('be.visible')) {
      cy.get('[class="tooltiptext"]').should('exist').contains('Tenant configuration').click({ force: true })
    }

  }

  typeRandomAddress() {


    const randomAddress = Cypress._.sample(addresses);
    cy.get('#create-pac-input')
      .clear().type(`${randomAddress} {enter}`);



    cy.wait(2000)



  }

  typeRandomCityStateandCountry()
  {
    const randomIndex = Math.floor(Math.random() * cities.length);

    const selectedCity = cities[randomIndex];
    const selectedState = states[randomIndex];
    const selectedCountry = countries[randomIndex];

    cy.get('#createRequest_Address_City').type(selectedCity);
    cy.get('#createRequest_Address_State').type(selectedState);
    cy.get('#createRequest_Address_Country').type(selectedCountry);


  }





  typeRandomStateandCountry()
  {
    const randomIndex = Math.floor(Math.random() * cities.length);

    
    const selectedState = states[randomIndex];
    const selectedCountry = countries[randomIndex];

    cy.get('#createRequest_Address_State').type(selectedState);
    cy.get('#createRequest_Address_Country').type(selectedCountry);


  }

  typeRandomCityandCountry()
  {
    const randomIndex = Math.floor(Math.random() * cities.length);

    const selectedCity = cities[randomIndex];
    const selectedCountry = countries[randomIndex];

    cy.get('#createRequest_Address_City').type(selectedCity);
    cy.get('#createRequest_Address_Country').type(selectedCountry);


  }

  typeRandomCityandState()
  {
    const randomIndex = Math.floor(Math.random() * cities.length);

    const selectedCity = cities[randomIndex];
    const selectedState = states[randomIndex];
    

    cy.get('#createRequest_Address_City').type(selectedCity);
    cy.get('#createRequest_Address_State').type(selectedState);
    


  }

  typeRandomCountry() {


    const randomCountry = Cypress._.sample(countries);
    cy.get('#createRequest_Address_Country')
      .type(`${randomCountry}`);

  }

  typeRandomCities() {


    const randomCity = Cypress._.sample(cities);
    cy.get('#createRequest_Address_City')
      .type(`${randomCity}`);

  }

  uploadImage() {
    const randomImage = Cypress._.random(1, 27)
    cy.get('[id="profileImageInput"]').attachFile('images/' + randomImage + '.jpg');
  }

  fillInRandomBuildings() {



    const Address1 = splitAddress[0]
    const Address2 = splitAddress[1]
    const City = splitAddress[2]
    const Country = splitAddress[3]



  }

  clicktheCheckBox(id) {


    cy.get(id).then($checkbox => {
      if (!$checkbox.prop('checked')) {
        cy.wrap($checkbox).click();
      }
    });



  }

  skipCheckbox(id) {
    cy.get(id).then($checkbox => {
      if ($checkbox.prop('checked')) {
        cy.wrap($checkbox).click();
      }
    });


  }

  validateDistance(id, value) {
    cy.get(id).clear()
    cy.get(id).type(value)

  }


  selectandsaveSubcategoryValue(locator) {

    cy.get(locator) // Select all checkboxes
      .then(($select) => {
        const options = $select.find('option:not(:first)');
        const numberToClick = Math.floor(Math.random() * options.length);
        const randomValue = options.eq(numberToClick).val();
        cy.get(locator).select(randomValue).then(() => {
          // Get the selected option text
          cy.get(locator)
            .find('option:selected')
            .invoke('text')
            .then((selectedText) => {
              cy.wrap(selectedText).as('selectedVal'); // Store selected text as an alias
              cy.log(selectedText); // Log in Cypress Test Runner
            })
        })



      });


  }



  deleteSubCategrory() {

    cy.get('@selectedVal').then((selectedText) => {

      cy.get('.jsgrid-cell').contains(selectedText).parent() // Locate the row
        .within(() => {
          cy.get('.btn-secondary').contains('Subcategory').click({ multiple: true, force: true }); // Click delete button inside that row
        });


    });



  }

  deleteCategory() {


    cy.get('.jsgrid-cell').contains("Noman Category " + randomName).parent() // Locate the row
      .within(() => {
        cy.get('.btn-secondary').contains('Delete').click({ multiple: true, force: true }); // Click delete button inside that row
      });





  }


  SelectRandomDropdownValue(locator) {


    //cy.get('.checkbox-group__label__text__title').contains('G4 Johar').click()  // Specific checkbox clicking

    cy.get(locator) // Select all checkboxes
      .then(($select) => {
        const options = $select.find('option:not(:first)');
        const numberToClick = Math.floor(Math.random() * options.length);
        const randomValue = options.eq(numberToClick).val();
        cy.get(locator).select(randomValue)


      });

  }


  SelectRandomDropdownAll(locator) {


    const randomNum = Cypress._.random(0, 1)

    if (randomNum == 0) {

      cy.get(locator) // Select all checkboxes
        .then(($select) => {

          cy.get(locator).select(0)

        })

    }

    else {
      cy.get(locator).select(1)
    }


    // cy.get(locator) // Select all checkboxes
    // .then(($select) => {
    //    const numberToClick = Math.floor(Math.random() * $select.length);


    //    const randomValue = $select.eq(numberToClick).val();

    //    cy.get(locator).select(randomValue);
    //  });

  }

  goToManageVisitorTypes() {
    cy.get('#manageVisitorTypes').contains('Manage Visitor Types').click()
    cy.wait(500)
    cy.get('#addVisitorTypeButton').click()

  }



  closePopup(locator) {
    cy.wait(1000)
    cy.get(locator).click({ multiple: true, force: true })


  }

  typeRandomCategory() {

    cy.get('#createVisitorRequest_Name').type('Noman Category ' + randomName)

  }

  clickButtonRandomly(locator, btnContains) {
    // cy.get('tbody tr') // Get all table rows
    //   .then(($rows) => {
    //     const rowCount = $rows.length;


    //     const randomRowIndex = Math.floor(Math.random() * rowCount); // Pick a random row
    //     const selectedRow = cy.wrap($rows.eq(randomRowIndex)); // Select that row


    //     selectedRow.find(locator).contains(btnContains).click() // Get all cells in the selected row  

    //   });


      cy.get(locator).then(($elements) => {
        const rowCount = $elements.length;
        const randomRowIndex = Math.floor(Math.random() * rowCount);
        cy.wrap($elements.eq(randomRowIndex)).contains(btnContains).click();
      })
 

  }




  clickButtonRandomlySkippingRoot(locator, btnContains) {

    /////////////////// Clicking the 'Gates' button randomly on a page

    cy.get(locator).then(($elements) => {
      const rowCount = $elements.length; // Get the count of elements
      if (rowCount > 0) {
        const randomRowIndex = Math.floor(Math.random() * rowCount); // Pick a random index
        cy.wrap($elements.eq(randomRowIndex)).contains(btnContains).click(); // Click the button
      } else {
        cy.log('No matching elements found');
      }
    });

  }


  typegateNameRandomly(locator, stringtoType) { cy.get(locator).type(stringtoType + randomName) }


  typeNameRandomly(locator, stringtoType) { cy.get(locator).type(stringtoType + randomName) }

  typeEmailRandomly(locator, stringtoType) { cy.get(locator).type(stringtoType + randomName + "@yopmail.com") }


  deleteAddedVisitorCategory(name)
  {

    cy.get('.jsgrid-table').contains(name).parent() // Locate the row
      .within(() => {
        cy.get('.btn-secondary').contains('Delete').click({ multiple: true, force: true });
      });

  }

 


  disableAddedGate() {

    cy.get('.jsgrid-table').contains("Test Gate " + randomName).parent() // Locate the row
      .within(() => {
        cy.get('.btn-secondary').contains('Edit').click({ multiple: true, force: true });
      });


    cy.get('.checkmark').click({ multiple: true, force: true })
    cy.get('#updateGateSubmit').click({ multiple: true, force: true })



  }

  EditGate() {


    cy.get('.jsgrid-table').contains("Test Gate " + randomName).parent() // Locate the row
      .within(() => {
        cy.get('.btn-secondary').contains('Edit').click({ multiple: true, force: true });
      });




    cy.get('#updateGateRequest_Name').clear()
    this.typegateNameRandomly('#updateGateRequest_Name', "Test Gate " + randomName)
    // cy.get('.checkmark').click({multiple:true, force:true})
    cy.get('#updateGateSubmit').click({ multiple: true, force: true })



  }

  gotoTenantManagment() {
    this.signIn()

    if (cy.get('#selectLanguage').should('be.visible')) {
      cy.get('[class="tooltiptext"]').should('exist').contains('Tenant Management').click({ force: true })
    }

  }


  gotoVisitorCategory()
  {
    this.signIn()

    if (cy.get('.right-half > .card > h3').should('be.visible')) {
      cy.get('[class="tooltiptext"]').should('exist').contains('Visitor Type Category').click({ force: true })
    }


  }

  gotoCustomerManagement()
  {
    this.signIn()

    if (cy.get('.right-half > .card > h3').should('be.visible')) {
      cy.get('[class="tooltiptext"]').should('exist').contains('Customer Management').click({ force: true })
    }


  }






}

export const signInObj = new signInClass()
//export default new fillInRandomBuildings()
