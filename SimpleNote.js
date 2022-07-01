const container = document.querySelector('.container');

function loadMemo() {
    const items = document.querySelectorAll('.note');
    /* 모든 item 목록을 불러와서 버튼을 클릭하면 해당 게시판으로 들어가도록 설정 */
    items.forEach(item => {
        item.addEventListener('click', function () {
            localStorage.setItem('key', item.firstElementChild.lastChild.innerText);
            location.href = 'DetailNote.html';
        })
    });
}

let memoList = JSON.parse(localStorage.getItem('memo'));
if (memoList !== null) {
    memoList.forEach(memo => {
        const eldiv = document.createElement("div");
        const elfigure = document.createElement("figure");
        const elimg = document.createElement("img");
        const elfigcap = document.createElement("figcaption");

        elfigcap.innerText = memo.title;
        eldiv.classList.add('note');
        elimg.setAttribute('src', 'note.png');
    
        elfigure.appendChild(elimg);
        elfigure.appendChild(elfigcap);
        eldiv.appendChild(elfigure);
    
        container.appendChild(eldiv);
    });
}

loadMemo();


