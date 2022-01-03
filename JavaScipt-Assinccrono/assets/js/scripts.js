//Armazenar o endereço da API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById('change-cat');
const CAT_IMG = document.getElementById('cat');

const getCats = async () => {
    try {
        // Recebe a promise
        const DATA = await fetch(BASE_URL); 
        // Converte a String para JSON
        const JSON = await DATA.json();

        return JSON.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    CAT_IMG.src = await getCats();
};

CAT_BTN.addEventListener('click', loadImg);

loadImg();