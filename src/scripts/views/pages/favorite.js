import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-restaurant';
import { showLoadingIndicator, hideLoadingIndicator } from '../../utils/loading-initiator';

const Favorite = {
  async render() {
    return `
      <main>
        <section class="restaurant-list" id="content">
          <h2 tabindex="0">Favorite Restaurants</h2>
          <div class="cards-box"></div>
          <div id="favorite-not-found" class="cards-box-null"></div>
        </section>
      </main>
      <end-bar></end-bar>
    `;
  },

  async afterRender() {
    showLoadingIndicator();
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    hideLoadingIndicator();
    const restaurantContainer = document.querySelector('.cards-box');
    const restaurantContainerNull = document.querySelector('.cards-box-null');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    } else {
      restaurantContainerNull.innerHTML = '<p id="text-favorite-not-found">There are no restaurants added to favorites yet.</p>';
    }
  },
};

export default Favorite;
