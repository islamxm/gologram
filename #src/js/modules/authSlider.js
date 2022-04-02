import Swiper, {EffectFade, Autoplay} from 'swiper';

export const authSlider = () => {
    const slider = new Swiper('.auth__slider', {
        slidesPerView: 1,
        modules: [EffectFade, Autoplay],
        effect: 'fade',
        autoplay: {
            delay: 3000
        },
        speed: 1000,
        allowTouchMove: false
    })
}