// sem začni psát svůj program
let score = document.querySelector('#score');
let hra = document.querySelector('#hra');
let panacek = document.querySelector("#panacek");
let panacekX;
let panacekY;
let panacekSirka, panacekVyska;
let mince = document.querySelector("#mince");
let minceX;
let minceY;
let minceSirka, minceVyska;
let zvukMince = document.querySelector('#zvukmince');
let zvukFanfara = document.querySelector('#zvukfanfara');
let pocetMinci;
let vitezPanel = document.querySelector('.vitez');



//document.addEventListener()

function priNacteniStranky() {
	pocetMinci = 0;
	score.innerText = pocetMinci;
	// zjistíme šířku a výšku panáčka
	panacekSirka = panacek.width;
	panacekVyska = panacek.height;
	// a umístíme panáčka do středu okna
	panacekX = Math.floor(window.innerWidth / 2 - panacekSirka / 2);
	panacekY = Math.floor(window.innerHeight / 2 - panacekVyska / 2);

	minceSirka = mince.width;
	minceVyska = mince.height;

	vitezPanel.style.display = "none";

	mince.classList.remove("schovatMinci");


	// umístíme panáčka na startovní pozici
	umistiPanacka();
	// a vygenerujeme první minci na náhodné pozici
	umistiMinci();

}

function umistiPanacka() {
	panacek.style.top = panacekY + 'px';
	panacek.style.left = panacekX + 'px';
}

	// zjistíme šířku a výšku mince
function umistiMinci() {
	minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
	mince.style.top = minceY + 'px';
	mince.style.left = minceX + 'px';

	let random = Math.random();
	if (random <= 0.33 ) {
		mince.src = "obrazky/mince-bronzova.png";
	}

	else if (random > 0.33 && random <= 0.66 ) {
		mince.src = "obrazky/mince-stribrna.png";
	}
	else {
		mince.src = "obrazky/mince.png";
	}
}


function priStiskuKlavesy(udalost) {
	let hudba = document.querySelector('#hudba').play();
	
	if (udalost.key === 'ArrowRight') {
		panacekX += 20;
		panacek.src = 'obrazky/panacek-vpravo.png';
		if (panacekX > window.innerWidth - panacekSirka) {
			panacekX = window.innerWidth - panacekSirka;
		}
		}
	if (udalost.key === 'ArrowLeft') {
		panacekX -= 20;
		panacek.src = 'obrazky/panacek-vlevo.png';
		if (panacekX < 0) {
			panacekX = 0;
		}
	}
	if (udalost.key === 'ArrowUp') {
		panacekY -= 20;
		panacek.src = 'obrazky/panacek-nahoru.png';
		if (panacekY < 0) {
			panacekY = 0;
		}
	}
	if (udalost.key === 'ArrowDown') {
		panacekY += 20;
		panacek.src = 'obrazky/panacek.png';
		if (panacekY > window.innerHeight - panacekVyska) {
			panacekY = window.innerHeight - panacekVyska;
		}
	}
	umistiPanacka();
	otestujKolizi();

	console.log(panacekX, panacekY);
}

//priNacteniStranky();


function otestujKolizi() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		zvukMince.play();
		
		zvysSkore();
		umistiMinci();
 }
}

 function zvysSkore() {
	 pocetMinci++;

	 score.innerText = pocetMinci;

	 if(pocetMinci >= 5) {
		 zvukFanfara.play();
		 vitezPanel.style.display = "block";
		 mince.className = "schovatMinci";
	 }
{
    // They clicked Yes
}

}
function hratZnovu() {
	priNacteniStranky();		
}