function changeMode() {
	changeClasses();
	changeText();
}

//O toggle funciona assim, se tiver ele retirar e se não tive ele coloca, no caso o darkModeClass.
function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

//Muda o texto quando o eventListener é acionado
function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode + ' ON';
		h1.innerHTML = darkMode + ' ON';
		return;
	}
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

// O EventListener está esperando uma ação do tipo Click para chamar a função changeMode.
button.addEventListener('click', changeMode);
