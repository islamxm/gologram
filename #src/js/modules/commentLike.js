export const commentLike = () => {
    const btns = document.querySelectorAll('.btn-like');

    if(btns.length > 0) {
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                btn.classList.toggle('active');
            });
        });
    }
}