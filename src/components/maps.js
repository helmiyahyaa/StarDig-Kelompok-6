class AppMap extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
		<section class="our-map" id="map">
			<div class="container our-map__container">
				<h2 class="our-map__title title">Lokasi Kami</h2>
					<div>
			  		<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7977.798163168082!2d116.86356!3d-1.229939!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1684292747383!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
			</div>
		</section>
	  `;
	}
  }
  
  customElements.define('app-map', AppMap);
  