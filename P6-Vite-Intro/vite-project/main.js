/* 
Code written in JS,
but we can simply rename the file to be main.ts (for typescript) 
and start coding using TypeScript syntax :-) 

NOTES:
Vite will not do any type checking for "TS"
However, you can install the extension for TS code checking or based on your IDE. 

Vite can handel importing and executing dependencies from npm
to be working and running in any browser
*/
import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite Tool!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
