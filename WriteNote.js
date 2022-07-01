const mTitle = document.getElementById("mtitle");
const mMemo = document.getElementById("mmemo");
let memoList = [];

const submitBtn = document.getElementById("btn_a");
submitBtn.addEventListener('click', saveMemo);

function saveMemo() {
    // 기존 로컬스토리지에 값이 있는 경우
    if(localStorage.getItem('memo') != null) {
        // 기존 로컬스토리지에 있는 값을 다 가져온 후
        let memos = JSON.parse(localStorage.getItem('memo'));
        memos.forEach(memo => {
            const prevMemoObj = {
                title: memo.title,
                memo: memo.memo
            }
            // memoList에 다시 저장해준다
            memoList.push(prevMemoObj);
        });
    }
    // 새롭게 입력받은 값 처리
    const memoObj = {
        title : mTitle.value,
        memo : mMemo.value
    }
    memoList.push(memoObj);
    alert("값이 등록되었습니다.");
    localStorage.setItem('memo', JSON.stringify(memoList));
    memoList = [];
}