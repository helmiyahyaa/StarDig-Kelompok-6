class AppFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <div class="footer__copyright">
            <div class="footer__cooper text">Copyright © 
              <a class="footer__link-bio" target="_blank">Mila</a>, 2023. All rights reserved.
            </div>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('app-footer', AppFooter);
  