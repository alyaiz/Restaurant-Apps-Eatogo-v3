const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Display empty list of liked movies', ({ I }) => {
  I.seeElement('#favorite-not-found');
  I.see(
    'There are no restaurants added to favorites yet.',
    '#text-favorite-not-found'
  );
});

Scenario(
  'Liking one restaurant and verifying it appears in the favorites',
  async ({ I }) => {
    I.see(
      'There are no restaurants added to favorites yet.',
      '#text-favorite-not-found'
    );

    I.amOnPage('/');

    I.seeElement('.cards-box .card');
    const firstRestaurant = locate('h3.card-title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.cards-box');
    const likedRestaurantTitle = await I.grabTextFrom('h3.card-title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  }
);

Scenario(
  'Unliking one restaurant and verifying it is removed from the favorites',
  async ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.cards-box .card');
    I.click(locate('.cards-box .card').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.cards-box .card');
    I.click(locate('.cards-box .card').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see(
      'There are no restaurants added to favorites yet.',
      '#text-favorite-not-found'
    );
  }
);
