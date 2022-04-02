import { authSlider } from './modules/authSlider.js';
import * as flsFuncs from './modules/functions.js';
import { preloader } from './modules/preloader.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

        preloader();
        authSlider();
    
    
})