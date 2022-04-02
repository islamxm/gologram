export const preloader = () => {
    const el = document.querySelector('.preloader');

    window.addEventListener('load', () => {
        el.classList.add('hide');
    })
}