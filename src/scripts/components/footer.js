class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="footer-header">
          <picture>
            <source type="image/webp" media="(max-width: 600px)" srcset="./images/eatogo-small.webp">
            <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/eatogo-small.png">
            <source type="image/webp" srcset="./images/eatogo-large.webp">
            <img src="./images/eatogo-large.png" alt="logo eatogo" tabindex="0">
          </picture>
          <p class="footer-text" tabindex="0">
            Eatogo adalah aplikasi pencarian restoran yang memudahkan pengguna
            dalam menemukan restoran terbaik berdasarkan lokasi, ulasan, dan
            rating.
          </p>
        </div>
        <div class="footer-body">
          <h4 class="card-title" tabindex="0">Chortcut</h4>
          <a href="#/main">Home</a>
          <a href="#/favorite">Favorite</a>
          <a href="https://github.com/alyaiz" target="_blank">About Us</a>
        </div>
        <div class="footer-body">
          <h4 class="card-title" tabindex="0">Contact</h4>
          <a href="#">Email</a>
          <a href="#">Instagram</a>
        </div>
        <div class="footer-body">
          <h4 class="card-title" tabindex="0">Address</h4>
          <p class="card-text" tabindex="0">Tuban</p>
          <p class="card-text" tabindex="0">Indonesia</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('end-bar', Footer);
