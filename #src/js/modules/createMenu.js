export const createMenu = () => {
    const btn = document.querySelector('.profile-self-header__action_add');
    const menu = document.querySelector('.create-menu');
    const drag = document.querySelector('.create-menu__drag_el');
    if(btn) {
        btn.addEventListener('click', (e) => {
            menu.classList.add('active');
        });
    }
    
    if(menu) {
        menu.addEventListener('click', (e) => {
            if(e.target.classList.contains('create-menu__layer')) {
                menu.classList.remove('active');
            }
        });
    }

    if(drag) {
        drag.addEventListener('click', (e) => {
            menu.classList.remove('active');
        });
    }
};