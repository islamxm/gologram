import { authSlider } from './modules/authSlider.js';
import * as flsFuncs from './modules/functions.js';
import { modalScript } from './modules/modalScript.js';
import { preloader } from './modules/preloader.js';
import { stmSlider } from './modules/stmSlider.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

        preloader();
        authSlider();
        stmSlider();
        modalScript();
    
    
})