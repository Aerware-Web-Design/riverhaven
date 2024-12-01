import { $$ } from './common.js'

console.log('here')
$$('.faq li').forEach(e =>
	e.onclick = ({ target }) => target.closest('li').classList.toggle('expand')
)
