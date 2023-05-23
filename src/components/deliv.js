class AppDelivering extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <section class="delivering" id="delivering">
          <div class="container">
            <div class="delivering__inner">
              <div class="delivering__items">
                <h2 class="delivering__title">Chimi Chimi By Uti</h2>
                <p class="delivering__subtitle text">Chimi Chimi by Uti adalah usaha kecil yang telah berdiri selama 10 Tahun. Awalnya, usaha ini hanya menawarkan tiga rasa utama: keju, original, dan pedas.</p>
                <a href="#" class="delivering__link btn">More Info</a>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('app-delivering', AppDelivering);
  