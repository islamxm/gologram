import Swiper from 'swiper';

export const homeStoriesSlider = () => {
    const el = document.querySelector('.home__main_stories_slider');
    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 4,
            spaceBetween: 8,
            breakpoints: {
                760: {
                    slidesPerView: 7,
                    spaceBetween: 23,
                },
                520: {
                    slidesPerView: 5,
                    spaceBetween: 23,
                }
            }
        });
    }
}