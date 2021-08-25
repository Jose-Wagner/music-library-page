import './src/style/settings/colors.css'
import './src/style/elements/base.css'

import './src/style/generic/reset.css'

import aside from './src/components/aside'

const $app = document.querySelector('#app')

$app.insertAdjacentHTML(
  'beforeend',
  `
    ${aside()}
  `,
)
