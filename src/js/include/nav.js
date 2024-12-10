import { $ } from '../common.js'

$('#menu-button').onclick = ({ target }) =>
	target.closest('.content').classList.toggle('expand');
