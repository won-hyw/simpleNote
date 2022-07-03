const container = document.querySelector('.container');

const categorys = document.querySelector('.categorys');
const categoryList = JSON.parse(localStorage.getItem('category'));

function loadMemo() {
    const items = document.querySelectorAll('.note');
    /* 모든 item 목록을 불러와서 버튼을 클릭하면 해당 게시판으로 들어가도록 설정 */
    items.forEach(item => {
        item.addEventListener('click', function () {
            localStorage.setItem('key', item.firstElementChild.lastChild.innerText);
            localStorage.setItem('event', 'item');
            location.href = 'DetailNote.html';
        })
    });
}

function loadCategory(){
    const lis = document.querySelectorAll('.lis');
    lis.forEach(li => {
        li.addEventListener('click', function () {
            console.log(li.innerText);
            localStorage.setItem('key2', li.innerText);
            localStorage.setItem('event', 'category');
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

if (categoryList !== null){
    categoryList.forEach(category =>{
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const ul = document.createElement("ul");
        
        if (memoList !== null) {
            memoList.forEach(memo => {
                if(category.title == memo.category){
                    const li = document.createElement("li");
            
                    li.innerText = memo.title;
                    li.classList.add('lis');
                
                    ul.appendChild(li);
                    
                }
            });
        }

        summary.innerText = category.title;

        details.appendChild(summary);
        details.appendChild(ul);

        console.log(details);

        categorys.appendChild(details);

    })
}
loadCategory();
loadMemo();


