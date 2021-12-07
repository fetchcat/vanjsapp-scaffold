import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';

import './style.scss';
import placeholder from './img/placeholder.png';

library.add(faCheck);
dom.watch();

const app = document.getElementById('app');
app.innerHTML = `
  <div class='container'>
    <button>
      Click Me! <i class="fas fa-check"></i>
    </button> 
    <img class='image' src=${placeholder}/>
  </div>
  `;
