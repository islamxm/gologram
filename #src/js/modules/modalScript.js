import iziModal from 'izimodal';
// import  {$} from 'jquery';

export const modalScript = () => {

    const els = document.querySelectorAll('.modal-post');

    if(els.length > 0) {
        function postModal() {
            if(window.innerWidth > 1000) {
                $(".modal-post").iziModal({
        
                    group: 'posts',
                    loop: false
                });
            } else {
                return;
            }
    
            window.addEventListener('resize', () => {
                if(window.innerWidth > 1000) {
                    $(".modal-post").iziModal({
            
                        group: 'posts',
                        loop: false
                    });
                } else {
                    return;
                }
            }); 
        }
    
        postModal();
        
    
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

    
}