Feature('Input Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('test', ({ I }) => {
  I.seeElement('.cards-box .card');
  I.click(locate('.cards-box .card').first());

  I.seeElement('#button-review-trigger');
  I.click(locate('#button-review-trigger'));

  I.seeElement('#name-input');
  I.fillField('#name-input', 'Izzah');

  I.seeElement('#review-input');
  I.fillField('#review-input', 'Harga Mahal');

  I.seeElement('#button-review');
  I.click('#button-review');

  I.see('Izzah', '.review-name h4');
  I.see('Harga Mahal', '.review-customer-body p');
});