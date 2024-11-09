let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('Пользователь редактирует профиль', () => {
        const newFirstname = 'Peter';
        const newLastname = 'Grifin';
        const newAge = 23;
        const newCity = 'New York';
        cy.updateProfile(newFirstname, newLastname, newAge, newCity);
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            newFirstname,
        );
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastname,
        );
        cy.getByTestId('ProfileCard.age').should('have.value', newAge);
        cy.getByTestId('ProfileCard.city').should('have.value', newCity);
    });
});
