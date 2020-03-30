const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	document.body.classList.toggle('noscroll');
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
});