const mtitle = document.getElementById('mtitle');
const mmemo = document.getElementById('mmemo');
const mCategory = document.getElementById('mCategory');
const click = localStorage.getItem('event');
const title = localStorage.getItem('key');
const title2 = localStorage.getItem('key2');
const memos = JSON.parse(localStorage.getItem('memo'));

const categorys = document.querySelector('.categorys');
const categoryJ = JSON.parse(localStorage.getItem('category'));
let categoryList = [];
let memoList = [];


function loadCategory(){
    const lis = document.querySelectorAll('.lis');
    lis.forEach(li => {
        li.addEventListener('click', function () {
            location.href = 'DetailNote.html';
        })
    });
}


memos.forEach(memo => {
    if(click == 'item') {
        if(memo.title == title) {
            mtitle.setAttribute('value', memo.title);
            mmemo.innerText = memo.memo;
            mCategory.setAttribute('value', memo.category);
        }
    }else if(click == "category") {
        if(memo.title == title2) {
            mtitle.setAttribute('value', memo.title);
            mmemo.innerText = memo.memo;
            mCategory.setAttribute('value', memo.category);
        }
    }
});



const removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', function() {
    memos.forEach(memo => {
        if(click == 'item') {
            if (memo.title == title) {
                console.log("값이 같습니다.", memo.title, memo.memo, memo.category);
            }else {
                memoList.push({
                    title : memo.title,
                    memo : memo.memo,
                    category : memo.category
                });
            }
        }else if(click == 'category'){
            if (memo.title == title2) {
                console.log("값이 같습니다.", memo.title, memo.memo, memo.category);
            }else {
                memoList.push({
                    title : memo.title,
                    memo : memo.memo,
                    category : memo.category
                });
            }
        }
    });

    categoryJ.forEach(category=>{
        memoList.forEach(memo=>{
            if (memo.title != title){
                if (category.title == memo.category){
                    categoryList.push({
                        title: category.title
                    })
                    return false;
                }
            }
        })
    })

    if (memoList != null) {
        localStorage.setItem('memo', JSON.stringify(memoList));
    } else {
        localStorage.clear();
    }
    if (categoryList != null) {
        localStorage.setItem('category', JSON.stringify(categoryList));
    } else {
        localStorage.clear();
    }
    alert('삭제되었습니다');
    location.href = 'SimpleNote.html';
})

const editBtn = document.getElementById('editBtn');
editBtn.addEventListener('click', function() {
    location.href = 'EditNote.html';
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