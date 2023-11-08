import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-restaurant';

const Main = {
  async render() {
    return `
      <main>
        <jumbotron-section></jumbotron-section>
        <section class="restaurant-list" id="content">
          <h2 tabindex="0">Explore Restaurants</h2>
          <div class="cards-box"></div>
        </section>
      </main>
      <end-bar></end-bar>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.allRestaurant();
    const restaurantContainer = document.querySelector('.cards-box');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Main;
