class AppOurMenu extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <section class="our-menu" id="menu">
          <div class="container our-menu__container">
            <h2 class="our-menu__title title">Menu Yang Tersedia</h2>
            <div class="our-menu__slider">
              <div class="our-menu__item">
                <div class="our-menu__list">
                  <div class="our-menu__image">
                  <img src="src/img/2.jpg" alt="" class="our-menu__img img">
                  </div>
                  <div class="our-menu__name">Cimi-Cimi Original</div>
                  <div class="our-menu__price">Rp 10.000</div>
                </div>
              </div>
              <div class="our-menu__item">
                <div class="our-menu__list">
                  <div class="our-menu__image">
                  <img src="src/img/2.jpg" alt="" class="our-menu__img img">
                  </div>
                  <div class="our-menu__name">Cimi-Cimi Original</div>
                  <div class="our-menu__price">Rp 10.000</div>
                </div>
              </div>
              <div class="our-menu__item">
                <div class="our-menu__list">
                  <div class="our-menu__image">
                  <img src="src/img/2.jpg" alt="" class="our-menu__img img">
                  </div>
                  <div class="our-menu__name">Cimi-Cimi Original</div>
                  <div class="our-menu__price">Rp 10.000</div>
                </div>
              </div>
            </div>
            <div class="our-menu__order">
              <a href="https://wa.me/6282110059178" class="our-menu__orderbutton">Order Now</a>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('app-our-menu', AppOurMenu);
  