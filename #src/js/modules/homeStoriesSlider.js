import Swiper from 'swiper';

export const homeStoriesSlider = () => {
    const el = document.querySelector('.home__main_stories_slider');
    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 7,
            spaceBetween: 23,
        });
    }
}