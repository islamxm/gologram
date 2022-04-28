export const preloader = () => {
    const el = document.querySelector('.preloader');
    const wrapper = document.querySelector('.wrapper');

    if(el) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                el.classList.add('hide');
                wrapper.classList.add('loaded');
            }, 3000);
        })
    }
}