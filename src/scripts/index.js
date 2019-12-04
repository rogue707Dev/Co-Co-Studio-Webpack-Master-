
import '../styles/styles.scss';

document.getElementById('scroll-down').onclick = function() {
	document.getElementById('about').scrollIntoView();
};

document.getElementById('navbar-trigger').onclick = function() {
	document.getElementById('menu').style.display = document.getElementById('menu').style.display === 'block' ? '' : 'block';
};

console.log('webpack starterkit');
