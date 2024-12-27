import { $$ } from '../common.js'

$$('.faq li').forEach(e =>
	e.onclick = ({ target }) => target.closest('li').classList.toggle('expand')
)
