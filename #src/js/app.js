
import { authSlider } from './modules/authSlider.js';
import { commentLike } from './modules/commentLike.js';
import { createMenu } from './modules/createMenu.js';
import * as flsFuncs from './modules/functions.js';
import { modalScript } from './modules/modalScript.js';
import { preloader } from './modules/preloader.js';
import { profileMenu } from './modules/profileMenu.js';
import { stmSlider } from './modules/stmSlider.js';
import { validation } from './modules/validation.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    preloader();
    authSlider();
    stmSlider();
    modalScript();
    commentLike();
    profileMenu();
    createMenu();
    validation();  
});