export const profileMenu = () => {
    const btn = document.querySelector('.profile-self-header__action_burger');
    const menu = document.querySelector('.profile-menu');


    if(btn && menu) {
        btn.addEventListener('click', (e) => {
            menu.classList.toggle('active');
        });

        menu.addEventListener('click', (e) => {
            if(e.target.classList.contains('profile-menu__layer')) {
                menu.classList.remove('active');
            }
        });
    }

};