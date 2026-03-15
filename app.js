const uiContent = {
    es: {
        navHome: "Contexto",
        navBands: "Las Bandas",
        navInfluential: "Artistas",
        navChronicles: "Crónicas",
        
        // Bands Page
        titleBands: "Las Bandas",
        subBands: "Los arquitectos sonoros que devoraron la inocencia del pop.",
        labelBio: "Biografía",
        labelImpact: "Impacto e Influencia",
        labelCuriosities: "Curiosidades",

        // Influential Page
        titleInfl: "Artistas",
        subInfl: "Las mentes maestras, productores y musas que orquestaron la vanguardia.",

        // Chronicles Page
        titleChronicles: "Crónicas Subterráneas",
        subChronicles: "Historias, crímenes y locura del nacimiento del rock experimental.",

        // Home Page (Context)
        titleHome: "The Factory",
        subHome: "El epicentro de la disrupción cultural de los 60 y 70.",
        h1home: "Una era de estática y color",
        p1home: "Bienvenido a The Factory. Más que una época musical, los años 60 y 70 representaron el absoluto punto de ruptura de la cultura moderna occidental. En un lapso de apenas quince años, el pop de chicle inocente fue incinerado y reemplazado por psicodelia y sonidos que exploraban los rincones más profundos de la psique.",
        h2home: "De California al underground atlántico",
        p2home: "Mientras la costa oeste de Estados Unidos soñaba con el 'Verano del Amor' impulsado por la contracultura hippie; al otro lado del país, en los abismos de ladrillo rojo de Nueva York, figuras irreverentes como Andy Warhol patrocinaban un arte crudo y urbano. Simultáneamente, en la fría Inglaterra surgía la vanguardia psicodélica y el rock progresivo liderado por visionarios como Syd Barrett.",
        h3home: "El Propósito de este Archivo",
        p3home: "Esta plataforma es un archivo inmersivo dedicado no a la cultura pop convencional, sino a los auténticos arquitectos de la vanguardia. Aquellos cuyas composiciones no buscaron escalar en las listas de éxitos, sino derribar las reglas del juego. Navega por las bandas históricas, las mentes influyentes detrás del sonido, y lee las crónicas y anécdotas que forjaron la leyenda."
    },
    en: {
        navHome: "Context",
        navBands: "The Bands",
        navInfluential: "Artists",
        navChronicles: "Chronicles",
        
        titleBands: "The Bands",
        subBands: "The sonic architects who devoured the innocence of pop.",
        labelBio: "Biography",
        labelImpact: "Impact & Influence",
        labelCuriosities: "Curiosities",

        titleInfl: "Artists",
        subInfl: "The masterminds, producers, and muses who orchestrated the vanguard.",

        titleChronicles: "Underground Chronicles",
        subChronicles: "Tales, crimes, and madness from the birth of experimental rock.",

        titleHome: "The Factory",
        subHome: "The epicenter of the 60s & 70s cultural disruption.",
        h1home: "An Era of Static and Color",
        p1home: "Welcome to The Factory. More than just a musical era, the 1960s and 70s represented the absolute breaking point of modern Western culture. In just fifteen years, innocent bubblegum pop was incinerated and replaced by psychedelia and sounds exploring the deepest corners of the human psyche.",
        h2home: "From California to the Atlantic underground",
        p2home: "While the American West Coast dreamed of a hippie-fueled 'Summer of Love'; across the country in the red-brick abysses of New York, irreverent figures like Andy Warhol sponsored a raw, urban art. Simultaneously, in cold England, progressive rock and the psychedelic vanguard surged, led by visionaries like Syd Barrett.",
        h3home: "The Purpose of this Archive",
        p3home: "This platform is an immersive archive dedicated not to mainstream pop, but to the genuine architects of the vanguard. Those whose compositions didn't seek to climb the charts, but to tear down the rules of the game. Browse the historic bands, the influential minds behind the sound, and read the chronicles that forged the legend."
    },
    fr: {
        navHome: "Contexte",
        navBands: "Les Groupes",
        navInfluential: "Artistes",
        navChronicles: "Chroniques",
        
        titleBands: "Les Groupes",
        subBands: "Les architectes sonores qui ont dévoré l'innocence de la pop.",
        labelBio: "Biographie",
        labelImpact: "Impact et Influence",
        labelCuriosities: "Curiosités",

        titleInfl: "Artistes",
        subInfl: "Producteurs, visionnaires et muses qui ont orchestré l'avant-garde.",

        titleChronicles: "Chroniques Souterraines",
        subChronicles: "Histoires, crimes et folie de la naissance du rock expérimental.",

        titleHome: "The Factory",
        subHome: "L'épicentre de la perturbation culturelle des années 60 et 70.",
        h1home: "Une ère de couleurs",
        p1home: "Bienvenue à The Factory. Plus qu'une époque musicale, les années 60 et 70 représentent le point de rupture absolu de la culture occidentale moderne. En quinze ans, la pop innocente a été incinérée et remplacée par la psychédélisme et des sons explorant les recoins les plus sombres de la conscience.",
        h2home: "De la Californie à l'underground atlantique",
        p2home: "Tandis que la côte ouest américaine rêvait d'un 'Summer of Love'; de l'autre côté du pays, dans les abysses de briques rouges de New York, des figures irrévérencieuses comme Andy Warhol parrainaient un art urbain brut. Simultanément, dans la froide Angleterre, l'avant-garde psychédélique émergeait avec des visionnaires comme Syd Barrett.",
        h3home: "Le But de ces Archives",
        p3home: "Cette plateforme est dédiée non pas à la pop conventionnelle, mais aux véritables architectes de l'avant-garde. Naviguez parmi les groupes historiques, les esprits influents, et lisez les chroniques qui ont forgé la légende."
    }
};

let currentLang = localStorage.getItem('vanguardLang');
if (!currentLang) {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('es')) currentLang = 'es';
    else if (userLang.startsWith('fr')) currentLang = 'fr';
    else currentLang = 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    // Basic Lang Setup
    updateLanguageButtons();
    updateUITexts();
    renderContentBoxes();

    // Event listeners for Lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentLang = e.target.getAttribute('data-lang');
            localStorage.setItem('vanguardLang', currentLang);
            updateLanguageButtons();
            // Add a subtle fade out/in effect for content
            const main = document.querySelector('.main-content');
            main.style.opacity = 0;
            setTimeout(() => {
                updateUITexts();
                renderContentBoxes();
                main.style.opacity = 1;
            }, 300);
        });
    });

    // Modal Close Logic (if modals exist on page)
    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const bandsMod = document.getElementById('band-modal');
            const inflMod = document.getElementById('infl-modal');
            if(bandsMod) bandsMod.classList.add('hidden');
            if(inflMod) inflMod.classList.add('hidden');
        });
    }
});

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
    });
}

function updateUITexts() {
    const d = uiContent[currentLang];
    
    // Globals (Nav)
    if(document.getElementById('nav-home')) document.getElementById('nav-home').textContent = d.navHome;
    if(document.getElementById('nav-bands')) document.getElementById('nav-bands').textContent = d.navBands;
    if(document.getElementById('nav-influential')) document.getElementById('nav-influential').textContent = d.navInfluential;
    if(document.getElementById('nav-chronicles')) document.getElementById('nav-chronicles').textContent = d.navChronicles;

    // Detect Page and set Titles/Text
    const isBands = document.getElementById('bands-grid');
    const isInfl = document.getElementById('influential-grid');
    const isChronicles = document.getElementById('chronicles-container');
    const isHome = document.querySelector('.intro-text-box');

    const mTitle = document.getElementById('main-title');
    const mSub = document.getElementById('main-subtitle');

    if (isHome) {
        mTitle.textContent = d.titleHome;
        mSub.textContent = d.subHome;
        document.getElementById('home-h2-1').textContent = d.h1home;
        document.getElementById('home-p-1').textContent = d.p1home;
        document.getElementById('home-h2-2').textContent = d.h2home;
        document.getElementById('home-p-2').textContent = d.p2home;
        document.getElementById('home-h2-3').textContent = d.h3home;
        document.getElementById('home-p-3').textContent = d.p3home;
    } 
    else if (isBands) {
        mTitle.textContent = d.titleBands;
        mSub.textContent = d.subBands;
        document.getElementById('label-bio').textContent = d.labelBio;
        document.getElementById('label-impact').textContent = d.labelImpact;
        document.getElementById('label-curiosities').textContent = d.labelCuriosities;
    }
    else if (isInfl) {
        mTitle.textContent = d.titleInfl;
        mSub.textContent = d.subInfl;
    }
    else if (isChronicles) {
        mTitle.textContent = d.titleChronicles;
        mSub.textContent = d.subChronicles;
    }
}

function renderContentBoxes() {
    const isBands = document.getElementById('bands-grid');
    const isInfl = document.getElementById('influential-grid');
    const isChronicles = document.getElementById('chronicles-container');

    if (isBands && typeof bandsData !== 'undefined') {
        isBands.innerHTML = '';
        bandsData.forEach(band => {
            const card = document.createElement('div');
            card.className = 'band-card';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${band.image}" alt="${band.name}" class="card-img" />
                </div>
                <div class="card-content">
                    <h3 class="card-title">${band.name}</h3>
                    <span class="card-years">${band.years}</span>
                </div>
            `;
            card.addEventListener('click', () => openBandModal(band));
            isBands.appendChild(card);
        });
    }
    
    if (isInfl && typeof influentialData !== 'undefined') {
        isInfl.innerHTML = '';
        influentialData.forEach(person => {
            const card = document.createElement('div');
            card.className = 'band-card';
            card.innerHTML = `
                <div class="card-img-wrapper" style="height:320px;">
                    <img src="${person.image}" class="card-img">
                </div>
                <div class="card-content">
                    <h3 class="card-title" style="font-size: 1.3rem;">${person.name}</h3>
                    <span class="card-years" style="color: #cbd5e1; font-size:0.85rem;">${person.role[currentLang]}</span>
                </div>
            `;
            card.addEventListener('click', () => {
                document.getElementById('modal-img').src = person.image;
                document.getElementById('modal-name').textContent = person.name;
                document.getElementById('modal-role').textContent = person.role[currentLang];
                document.getElementById('modal-bio').textContent = person.content[currentLang];
                document.getElementById('infl-modal').classList.remove('hidden');
            });
            isInfl.appendChild(card);
        });
    }

    if (isChronicles && typeof chroniclesData !== 'undefined') {
        isChronicles.innerHTML = '';
        chroniclesData.forEach(post => {
            const article = document.createElement('article');
            article.className = 'vlog-post';
            
            const initialBtnText = currentLang === 'en' ? 'Read More' : (currentLang === 'fr' ? 'Lire la Suite' : 'Leer Más');

            article.innerHTML = `
                <div class="vlog-hero">
                    <img src="${post.image}" alt="Vlog Cover">
                </div>
                <div class="vlog-content">
                    <span class="vlog-date">${post.date}</span>
                    <h2 class="vlog-title">${post.title[currentLang]}</h2>
                    <div class="vlog-body collapsed">${post.content[currentLang]}</div>
                    <button class="read-more-btn">${initialBtnText}</button>
                </div>
            `;

            const btn = article.querySelector('.read-more-btn');
            const body = article.querySelector('.vlog-body');
            btn.addEventListener('click', () => {
                body.classList.toggle('collapsed');
                if (body.classList.contains('collapsed')) {
                    btn.textContent = currentLang === 'en' ? 'Read More' : (currentLang === 'fr' ? 'Lire la Suite' : 'Leer Más');
                } else {
                    btn.textContent = currentLang === 'en' ? 'Read Less' : (currentLang === 'fr' ? 'Lire Moins' : 'Atrás');
                }
            });

            isChronicles.appendChild(article);
        });
    }
}

function openBandModal(band) {
    document.getElementById('modal-img').src = band.image;
    document.getElementById('modal-name').textContent = band.name;
    document.getElementById('modal-years').textContent = band.years;
    
    document.getElementById('modal-bio').textContent = band.content[currentLang].bio;
    document.getElementById('modal-impact').textContent = band.content[currentLang].impact;
    
    const curUl = document.getElementById('modal-curiosities');
    curUl.innerHTML = '';
    band.curiosities[currentLang].forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        curUl.appendChild(li);
    });

    document.getElementById('band-modal').classList.remove('hidden');

    const modalHero = document.querySelector('#band-modal .modal-hero');
    if (band.id === 'the-doors') {
        modalHero.classList.add('doors-mode');
    } else {
        modalHero.classList.remove('doors-mode');
    }
}
