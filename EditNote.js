const mtitle = document.getElementById('mtitle');
const mmemo = document.getElementById('mmemo');
const mCategory = document.getElementById('mCategory');
const title = localStorage.getItem('key');
const memos = JSON.parse(localStorage.getItem('memo'));
const categorys = document.querySelector('.categorys');
const categoryList = JSON.parse(localStorage.getItem('category'));

let beforeCategory = mCategory.getAttribute('value');

let memoJ = JSON.parse(localStorage.getItem('memo'));
let categoryL = [];
let memoList = [];

memos.forEach(memo => {
    if(memo.title == title) {
        mtitle.setAttribute('value', memo.title);
        mmemo.innerText = memo.memo;
        mCategory.setAttribute('value', memo.category);
    }
});

function loadCategory(){
    const lis = document.querySelectorAll('.lis');
    lis.forEach(li => {
        li.addEventListener('click', function () {
            location.href = 'DetailNote.html';
        })
    });
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
    memos.forEach(memo => {
        if(memo.title !== title) {
            const list = {
                title: memo.title,
                memo: memo.memo,
                category: memo.category
            }
            memoList.push(list);
        } else {
            const list = {
                title : mtitle.value,
                memo : mmemo.value,
                category: mCategory.value
            }

            memoList.push(list);
        }
    });

    alert('수정되었습니다');
    localStorage.setItem('memo', JSON.stringify(memoList));
    location.href = "SimpleNote.html";
})


if (categoryList !== null){
    categoryList.forEach(category =>{
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const ul = document.createElement("ul");
        
        if (memoJ !== null) {
            memoJ.forEach(memo => {
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