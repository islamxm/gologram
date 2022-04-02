export const preloader = () => {
    const el = document.querySelector('.preloader');

    if(el) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                el.classList.add('hide');
            }, 3000);
        })
    }
}