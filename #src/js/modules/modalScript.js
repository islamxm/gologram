// import iziModal from 'izimodal';
// import  {$} from 'jquery';

export const modalScript = () => {

    $(".modal-post").iziModal({

        group: 'posts',
        loop: false
    });

    // $(".post-settings").iziModal({

    //     // group: 'posts',
    //     loop: false
    // });
    

    const setMenu = document.querySelector('.post-settings');
    const closeBtn = document.querySelector('.postSettingsClose');
    const triggers = document.querySelectorAll('.postSettingsOpen');
    if(triggers.length > 0) {
        triggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                setMenu.classList.add('active');
            });
        });
    }
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            setMenu.classList.remove('active');
        });
    }
    if(setMenu) {
        setMenu.addEventListener('click', (e) => {
            if(e.target.classList.contains('post-settings')) {
                setMenu.classList.remove('active');
            }
        });
    }
}