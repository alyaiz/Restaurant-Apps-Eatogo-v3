class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="jumbotron" class="jumbotron" tabindex="0" aria-label="jumbotron">
      <picture>
        <source type="image/webp" media="(max-width: 600px)" srcset="./images/hero-small.webp">
        <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/hero-small.jpg">
        <source type="image/webp" srcset="./images/hero-large.webp">
        <img class="jumbotron-image"  src="./images/hero-large.jpg" alt="Gambar jumbotron.">
      </picture>
      <div class="jumbotron-overlay">
        <h1 class="jumbotron-title" tabindex="0">Eatogo</h1>
        <p class="jumbotron-subtitle" tabindex="0">Your Ultimate Guide to the Best Restaurants.</p>
      </div>
      </section>
    `;
  }
}

customElements.define('jumbotron-section', Jumbotron);
