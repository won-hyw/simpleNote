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

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
    memos.forEach(memo => {
        if(memo.title !== title) {
            const list = {
                title: memo.title,
                memo: memo.memo
            }
            memoList.push(list);
        } else {
            const list = {
                title : mtitle.value,
                memo : mmemo.value
            }
            memoList.push(list);
        }
    });
    alert('수정되었습니다');
    localStorage.setItem('memo', JSON.stringify(memoList));
    location.href = "SimpleNote.html";
})
