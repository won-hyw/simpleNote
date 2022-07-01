const mtitle = document.getElementById('mtitle');
const mmemo = document.getElementById('mmemo');
const title = localStorage.getItem('key');
const memos = JSON.parse(localStorage.getItem('memo'));

let memoList = [];

memos.forEach(memo => {
    if(memo.title == title) {
        mtitle.setAttribute('value', memo.title);
        mmemo.innerText = memo.memo;
    }
});

const removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', function() {
    memos.forEach(memo => {
        if (memo.title == title) {
            console.log("값이 같습니다.", memo.title, memo.memo);
        }else {
            memoList.push({
                title : memo.title,
                memo : memo.memo
            });
            console.log(memoList);
        }
    });
    if (memoList != null) {
        localStorage.setItem('memo', JSON.stringify(memoList));
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