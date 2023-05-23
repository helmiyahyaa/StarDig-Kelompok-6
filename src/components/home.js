class AppHome extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <section class="home" id="home">
          <div class="container">
          <h2 class="home__title title">Detail Toko</h2>
            <div class="home__inner">
              <div class="home__video">
                <div class="home__video-container">
                  <video width="1200" height="525" controls>
                    <source src="Gallery aset video.mp4" type="video/mp4">
                  </video>								  
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('app-home', AppHome);
  