Feature('Search Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Search restaurant with an empty keyword', ({ I }) => {
  I.seeElement('#input-search');
  I.fillField('#input-search', '');

  I.seeElement('#button-search');
  I.click('#button-search');

  I.seeElement('#notifications');
});

Scenario('Search restaurant with the "rumah senja" keyword', ({ I }) => {
  I.seeElement('#input-search');
  I.fillField('#input-search', 'rumah senja');

  I.seeElement('#button-search');
  I.click('#button-search');

  I.seeElement('.cards-box');
  I.see('Rumah Senja', 'h3.card-title');
});

Scenario(
  'Search for a restaurant and receive a "not found" result',
  ({ I }) => {
    I.seeElement('#input-search');
    I.fillField('#input-search', 'asjhdaskhfAS');

    I.seeElement('#button-search');
    I.click('#button-search');

    I.seeElement('#search-not-found');
    I.see(
      'Restaurant not found.',
      '#text-search-not-found'
    );
  }
);
