import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-restaurant';

const Search = {
  async render() {
    return `
      <main>
        <section class="restaurant-list" id="content">
          <div class="search-title">
              <button class="search-button-back" onclick="window.history.go(-1)" aria-label="Kembali ke halaman sebelumnya">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <h2 class="title" tabindex="0">Result Search</h2>
          </div>
          <div class="cards-box"></div>
          <div id="search-not-found" class="cards-box-null"></div>
        </section>
      </main>
      <end-bar></end-bar>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.searchRestaurant(url.id);

    const restaurantContainer = document.querySelector('.cards-box');
    const restaurantContainerNull = document.querySelector('.cards-box-null');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    } else {
      restaurantContainerNull.innerHTML = '<p id="text-search-not-found">Restaurant not found.</p>';
    }
  },
};

export default Search;
