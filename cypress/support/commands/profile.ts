export const updateProfile = (
    firstname: string,
    lastname: string,
    age: number,
    city: string,
) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('ProfileCard.age').clear().type(age.toString());
    cy.getByTestId('ProfileCard.city').clear().type(city);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'test' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 465,
            currency: 'EUR',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://s1.1zoom.ru/big3/992/367659-alexfas01.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                firstname: string,
                lastname: string,
                age: number,
                city: string,
            ): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
