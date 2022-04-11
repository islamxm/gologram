export const profileMenu = () => {
    const btn = document.querySelector('.profile-self-header__action_burger');
    const menu = document.querySelector('.profile-menu');
    const draggable = document.querySelector('.profile-menu__drag');

    if(btn && menu) {
        btn.addEventListener('click', (e) => {
            menu.classList.toggle('active');
        });

        menu.addEventListener('click', (e) => {
            if(e.target.classList.contains('profile-menu__layer')) {
                menu.classList.remove('active');
            }
        });

        draggable.addEventListener('click', (e) => {
            menu.classList.remove('active');
        });
        
    }

};