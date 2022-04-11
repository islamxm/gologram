import { authSlider } from './modules/authSlider.js';
import { commentLike } from './modules/commentLike.js';
import * as flsFuncs from './modules/functions.js';
import { modalScript } from './modules/modalScript.js';
import { preloader } from './modules/preloader.js';
import { profileMenu } from './modules/profileMenu.js';
import { stmSlider } from './modules/stmSlider.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    preloader();
    authSlider();
    stmSlider();
    modalScript();
    commentLike();
    profileMenu();  
});