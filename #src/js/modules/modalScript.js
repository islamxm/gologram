// import iziModal from 'izimodal';
// import  {$} from 'jquery';

export const modalScript = () => {

    $(".modal-post").iziModal({
        width: 700,
        group: 'posts',
        loop: false
    });
    
}