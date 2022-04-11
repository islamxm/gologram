import Swiper from 'swiper';

export const stmSlider = () => {
    const slider = new Swiper('.stm', {
        slidesPerView: 4,

        breakpoints: {
            730: {
                slidesPerView: 7,
            },

            500: {
                slidesPerView: 5
            }

        }
    });
}