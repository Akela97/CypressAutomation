let testData;
before(function () {
    // root-level hook runs once before all tests
    cy.fixture('example').then(function (data) {
        // this.data=data
        testData = data;
    })

});