describe('time tracking functionality ', () => {
    let numHolder;

    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
            cy.visit(url + '/board');
            cy.contains('This is an issue of type: Task.').click();
        });
        numHolder = cy.get('[placeholder="Number"]');
    });
    it('add new estimation value', () => {
        const newValue = '168';
        const newValueEd = '172';
    //add estimation
    numHolder.clear().type(newValue);
    numHolder.should('have.value', newValue);
    // assert, that estimation is added and visible
    numHolder.should('have.value', newValue).and('be.visible');
    //edit estimation
    numHolder.clear().type(newValueEd);
    numHolder.should('have.value', newValueEd);
    //assert that updated value is visible
    numHolder.should('have.value', newValueEd).should('be.visible');
    //remove estimation
    numHolder.clear();
    numHolder.type('{selectall}{del}');
    //assert that value is removed
    numHolder.should('have.value', '').should('be.visible');
});
it('add new estimation value time tracking modal', () => {
    cy.get('[data-testid="icon:stopwatch"]').click();
    cy.get('[data-testid="modal:tracking"] input[placeholder="Number"]').eq(0).clear().type('20');
    cy.get('[data-testid="modal:tracking"] button').click();
});
});
