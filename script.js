const RAW_PLAYERS = ["trexhun", "Leviax", "BlasterLizard", "Krisz", "Andras9912", "KMJFIRE", "AlexayMarton", "kreno", 
    "TrickyBonkers", "IlIIlllIlIlI", "GgDashie", "arkwada", "Szilu", "mag", "ItzVmark", "Zsombi", "NotDarpy", "vcss", "gBen", "capaxl", "kri5z", 
    "DiceXD3", "Airaga", "64x", "AceandBlast", "SuBZeRO555", "Somniare", "Bendzsu89", "bodza", "Leves", "Gaaboor", "Lorserix", "DARTSY1", 
    "TheTrueRdam", "BLASTAHGD", "KZD78", "GrandpaTom", "AppleIdkPen", "LeverEnd", "TinyMapCreator", "neitie", "MechanicGD", "Keselowski2", 
    "Massck", "7riPlays", "Ephyaltes", "Valkai123", "KeCsan01", "tonkesz11", "Beatyoco", "Zodacx", "MZeno07", "aTsukiakari", "szebo210", "N1mr0d", 
    "nebulatic", "Gouldberg", "Solerix", "Avlaboba", "m3ndel", "Teddyx", "LenjoyGD", "Pongix", "PepsiBong", "punor", "zBiscuit", "JocX", "adniW", 
    "malvin166", "DrakeX5", "TRraim", "RazorGMD11", "oniel1117", "CringeLord GD", "PulseN1nja", "BenikeGamer", "PetiGyerek", "Migam8", "nytroW", 
    "Palinka", "Galaxygamer1m1", "kovigregi", "semi42", "AdamTheGreat02", "Interferent", "6almas5let", "averiee", "macoh", "Nevgelen", "Teyyo", 
    "lalimatyuss", "Goxikolid", "zZiizZy", "VRTGq", "9767", "Pigys", "whoiskeve", "garlicisbald", "Phan7xm", "krisztianw", "Frixnipe", "Firelia", 
    "apeti", "Csavesz", "Daewe", "DaeweDash", "MarkiXonGD", "matyi0", "Gerimatod", "O10one", "gergo123456", "chirpie", "kaministorm", "wMixy", 
    "Serpentical", "Shyze", "ShiveringStars0", "pPaarketta", "Morzsika", "Libakoptato", "Kisgrofo", "kacsloz", "GDWaterGMD", "BVviktor", "Bandi006", 
    "BaloghRicsi", "Balint1117", "AtiDaNub", "rolidemuth", "ErkBG", "Dgyerek", "Marci56", "SenetianVnares", "Petry", "Lemuno", "M4rciii", "BinshipGD", 
    "Skillfuldoge", "G3ri", "Karesz2000", "Aroner2006", "Cleeper1125", "reggae929", "zZokni", "skibidizeti69", "DrFert", "koloska80", "csabadash", "Asabii", 
    "NimrodHun", "therichest", "matek2448", "Furoka", "MoonsterAlex", "matee312", "bennygeometrix", "MIKROKASCIM", "TheBunnyKeyGD", "NoobendPro"];

const HUNGARIAN_PLAYERS = [...new Set(RAW_PLAYERS)]; 
const API_BASE = "https://gdbrowser.com/api/profile";
const MODERATORS = ["mag"]; 
const CACHE_KEY = 'gd_leaderboard_cache';
const CACHE_TIME = 10 * 60 * 1000; 

const categoryConfig = {
    stars: { apiType: 'stars', icon: 'src/star.png' },
    moons: { apiType: 'moons', icon: 'src/moon.png' },
    diamonds: { apiType: 'diamonds', icon: 'src/diamond.png' },
    usercoins: { apiType: 'userCoins', icon: 'src/silvercoin.png' },
    demons: { apiType: 'demons', icon: 'src/demon-hard.png' },
    creator: { apiType: 'cp', icon: 'src/creator_points.png' },
    rated: { apiType: 'cp', icon: 'src/creator_points.png' } // A CP alapján rendezünk, de a safe ikont használjuk
};

let GLOBAL_PLAYER_DATA = null; 
let IS_FETCHING = false;
let currentCategoryType = 'stars';


function getIconUrl(p, form = "icon", iconId = null) {
    const targetIcon = iconId || p.icon || 1;
    const col1 = p.color !== undefined ? p.color : 0;
    const col2 = p.color2 !== undefined ? p.color2 : 3;
    const glow = p.glow !== undefined ? (p.glow ? 1 : 0) : 0;
    
    return `https://gdbrowser.com/icon/${encodeURIComponent(p.username)}?form=${form}&icon=${targetIcon}&col1=${col1}&col2=${col2}&glow=${glow}`;
}

async function fetchAllPlayers(playerList) {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TIME) {
            console.log("✅ Cache-ből töltve");
            return parsed.data;
        }
    }

    const batchSize = 15;
    let results = [];
    for (let i = 0; i < playerList.length; i += batchSize) {
        const batch = playerList.slice(i, i + batchSize);
        updateLoadingText(`Frissítés... ${i}/${playerList.length}`);
        
        const promises = batch.map(user => 
            fetch(`${API_BASE}/${user}`)
                .then(r => r.ok ? r.json() : null)
                .catch(() => null)
        );
        
        const batchResults = await Promise.all(promises);

        if (i === 0 && batchResults[0]) {
            console.log("🔍 Első player API válasz:", {
                username: batchResults[0].username,
                col1: batchResults[0].col1,
                col2: batchResults[0].col2,
                glow: batchResults[0].glow,
                icon: batchResults[0].icon
            });
        }
        
        results = results.concat(batchResults);
        if (i + batchSize < playerList.length) await new Promise(r => setTimeout(r, 500));
    }
    
    const finalData = results.filter(p => p !== null);
    console.log(`✅ ${finalData.length} játékos betöltve`);
    localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: finalData }));
    return finalData;
}

function updateLoadingText(t) {
    const loader = document.querySelector('.category-section.active .loading-container');
    if(loader) loader.innerHTML = `<i class="fas fa-circle-notch"></i> ${t}`;
}

function generatePlayerCard(player, rank, value, iconPath, category) {
    const isTop3 = rank <= 3;
    let clickAction;
    
    // Ha a kategória "rated", akkor új ablakban nyitjuk meg a GDBrowsert
    if (category === 'rated') {
        clickAction = `window.open('https://gdbrowser.com/search/${player.username}?user', '_blank')`;
    } else {
        // Minden más esetben a modális ablakot nyitjuk meg
        clickAction = `openModal('${player.username.replace(/'/g, "\\'")}')`;
    }

    // MÓDOSÍTÁS: Csak akkor mutatjuk a CP badge-et a sarokban, ha NEM a 'rated' kategóriában vagyunk.
    // (A rated-nél lent van a safe ikon, fent pedig felesleges a kalapács).
    const showCpBadge = player.cp > 0 && category !== 'rated';

    return `
        <div class="player-card ${isTop3 ? 'top-three rank-' + rank : ''}" onclick="${clickAction}">
            <div class="card-badges">
                ${MODERATORS.includes(player.username) ? '<img src="src/mod.png" class="badge-icon">' : ''}
                ${showCpBadge ? '<img src="src/creator_points.png" class="badge-icon">' : ''}
            </div>
            <div class="player-rank">#${rank}</div>
            <div class="player-info">
                <img src="${getIconUrl(player)}" class="player-skin" loading="lazy" onerror="this.src='src/demon-hard.png'">
                <span class="player-name ${isTop3 ? 'top-three' : ''}">${player.username}</span>
            </div>
            <div class="player-value">
                <img src="${iconPath}" class="value-icon-img">
                <span>${new Intl.NumberFormat('en-US').format(value || 0)}</span>
            </div>
        </div>`;
}

function renderPlayers(players, category, search = "") {
    const grid = document.getElementById(`grid-${category}`);
    if (!grid) return;
    const config = categoryConfig[category];
    let sorted = [...players].sort((a, b) => (b[config.apiType] || 0) - (a[config.apiType] || 0));
    
    let display = sorted.map((p, i) => ({ ...p, _rank: i + 1 }));
    
    // Szűrés, ha keresünk
    if (search.trim()) {
        display = display.filter(p => p.username.toLowerCase().includes(search.toLowerCase()));
    }
    
    // SPECIÁLIS SZŰRÉS: Rated Levels
    // Csak azokat jelenítjük meg, akiknek van CP-jük (Creator Points > 0)
    if (category === 'rated') {
        display = display.filter(p => p.cp > 0);
    } else if (!search.trim()) {
        // Egyéb kategóriáknál, ha nincs keresés, csak az első 50-et mutatjuk
        display = display.slice(0, 50);
    }

    // A generáló függvénynek átadjuk a category-t is, hogy tudja kezelni a kattintást
    grid.innerHTML = display.map(p => generatePlayerCard(p, p._rank, p[config.apiType], config.icon, category)).join('');
}

function openModal(username) {
    const p = GLOBAL_PLAYER_DATA.find(x => x.username === username);
    if (!p) return;

    const getRank = (key) => [...GLOBAL_PLAYER_DATA].sort((a,b) => (b[key]||0)-(a[key]||0)).findIndex(x => x.username === username) + 1;
    
    const forms = [
        {f: "icon", n: "Cube", id: p.icon || 1}, 
        {f: "ship", n: "Ship", id: p.ship || 1}, 
        {f: "ball", n: "Ball", id: p.ball || 1}, 
        {f: "ufo", n: "UFO", id: p.ufo || 1}, 
        {f: "wave", n: "Wave", id: p.wave || 1}, 
        {f: "robot", n: "Robot", id: p.robot || 1}, 
        {f: "spider", n: "Spider", id: p.spider || 1}, 
        {f: "swing", n: "Swing", id: p.swing || 1}, 
        {f: "jetpack", n: "Jetpack", id: p.jetpack || 1}
    ];

    let social = '';
    if (p.youtube) social += `<a href="https://youtube.com/${p.youtube.startsWith('UC')?'channel/':''}${p.youtube}" target="_blank" class="social-link"><img src="src/youtube.png" class="social-icon-img"></a>`;

    document.getElementById('modal-body').innerHTML = `
        <div class="modal-header-user">
            <img src="${getIconUrl(p)}" class="modal-main-icon" onerror="this.src='src/demon-hard.png'">
            <h2 class="modal-username">${p.username} 
                ${MODERATORS.includes(p.username)?'<img src="src/mod.png" class="modal-badge">':''} 
                ${p.cp > 0 ? '<img src="src/creator_points.png" class="modal-badge">' : ''}
            </h2>
        </div>
        <div class="modal-subtitle"><i class="fas fa-info-circle me-2"></i>Statistics</div>
        <div class="modal-stats-grid">
            <div class="modal-stat-item"><div class="stat-left"><img src="src/star.png" class="value-icon-img"> <span>${new Intl.NumberFormat().format(p.stars)} Stars</span></div> <span class="modal-stat-rank">#${getRank('stars')}</span></div>
            <div class="modal-stat-item"><div class="stat-left"><img src="src/moon.png" class="value-icon-img"> <span>${new Intl.NumberFormat().format(p.moons)} Moons</span></div> <span class="modal-stat-rank">#${getRank('moons')}</span></div>
            <div class="modal-stat-item"><div class="stat-left"><img src="src/diamond.png" class="value-icon-img"> <span>${new Intl.NumberFormat().format(p.diamonds)} Diamonds</span></div> <span class="modal-stat-rank">#${getRank('diamonds')}</span></div>
            <div class="modal-stat-item"><div class="stat-left"><img src="src/silvercoin.png" class="value-icon-img"> <span>${new Intl.NumberFormat().format(p.userCoins)} User Coins</span></div> <span class="modal-stat-rank">#${getRank('userCoins')}</span></div>
            <div class="modal-stat-item"><div class="stat-left"><img src="src/demon-hard.png" class="value-icon-img"> <span>${new Intl.NumberFormat().format(p.demons)} Demons</span></div> <span class="modal-stat-rank">#${getRank('demons')}</span></div>
            <div class="modal-stat-item"><div class="stat-left"><img src="src/creator_points.png" class="value-icon-img"> <span>${new Intl.NumberFormat().format(p.cp)} Creator Points</span></div> <span class="modal-stat-rank">#${getRank('cp')}</span></div>
        </div>
        <div class="modal-subtitle"><i class="fas fa-shapes me-2"></i>Icon Set</div>
        <div class="icon-set-row">${forms.map(v => `<div class="icon-set-item"><img src="${getIconUrl(p, v.f, v.id)}" loading="lazy" onerror="this.src='src/demon-hard.png'"><span class="icon-label">${v.n}</span></div>`).join('')}</div>
        <div class="modal-socials">${social}</div>
    `;

    document.getElementById('profile-modal').style.display = 'flex';
    document.body.classList.add('modal-open');
}

async function handleCategoryChange(cat) {
    currentCategoryType = cat;
    const loader = document.getElementById(`loading-${cat}`);
    if(loader) loader.style.display = 'block';
    if (!GLOBAL_PLAYER_DATA && !IS_FETCHING) {
        IS_FETCHING = true;
        GLOBAL_PLAYER_DATA = await fetchAllPlayers(HUNGARIAN_PLAYERS);
        IS_FETCHING = false;
    }
    renderPlayers(GLOBAL_PLAYER_DATA || [], cat, document.getElementById('player-search').value);
    if(loader) loader.style.display = 'none';
}

function executeRefresh() { localStorage.removeItem(CACHE_KEY); location.reload(); }
function closeModal() { document.getElementById('profile-modal').style.display = 'none'; document.body.classList.remove('modal-open'); }

// HAVAZÁS FUNKCIÓ
function startSnowfall() {
    const container = document.getElementById('bg-animation-container');
    
    // Hópehely készítése
    setInterval(() => {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        
        // Véletlenszerű tulajdonságok
        flake.style.left = Math.random() * 100 + 'vw'; // Hol jelenjen meg vízszintesen
        flake.style.opacity = Math.random() * 0.5 + 0.3; // Áttetszőség
        const size = Math.random() * 5 + 3 + 'px'; // Méret
        flake.style.width = size;
        flake.style.height = size;
        
        // Eltérő esési sebességek (3 és 8 másodperc között)
        flake.style.animationDuration = Math.random() * 5 + 3 + 's';
        
        container.appendChild(flake);

        // Törlés az animáció végén (hogy ne teljen meg a memória)
        setTimeout(() => {
            flake.remove();
        }, 8000); 
    }, 150); // Milyen gyakran jöjjön létre új hópehely (ms)
}

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.category-section').forEach(s => s.classList.remove('active'));
    const cat = this.dataset.category;
    document.getElementById(cat).classList.add('active');
    handleCategoryChange(cat);
}));

document.getElementById('player-search').addEventListener('input', (e) => {
    if(GLOBAL_PLAYER_DATA) renderPlayers(GLOBAL_PLAYER_DATA, currentCategoryType, e.target.value);
});

window.onload = () => {
    handleCategoryChange('stars');
    startSnowfall(); // Havazás indítása
};