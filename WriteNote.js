const mTitle = document.getElementById("mtitle");
const mMemo = document.getElementById("mmemo");
const mCategory = document.getElementById("mCategory");
let categoryList = [];
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
                memo: memo.memo,
                category: memo.category
            }
            // memoList에 다시 저장해준다
            memoList.push(prevMemoObj);
        });
    }
    if(localStorage.getItem('category') != null) {
        let categorys = JSON.parse(localStorage.getItem('category'));
        categorys.forEach(category => {
            const prevCategoryObj = {
                title: category.title
            }
            categoryList.push(prevCategoryObj);
        });
    }
    if (mCategory.value != ''){
        if (categoryList !== null){
            let check = true;
            categoryList.forEach(category =>{
                if(category.title == mCategory.value){
                    check = false;
                    return false;
                }
            })
            if(check){
                const CategoryObj = {
                    title : mCategory.value
                }
                
                categoryList.push(CategoryObj);
                localStorage.setItem('category', JSON.stringify(categoryList));
            }
        }

    }
    // 새롭게 입력받은 값 처리
    const memoObj = {
        title : mTitle.value,
        memo : mMemo.value,
        category:mCategory.value
    }
    memoList.push(memoObj);
    alert("값이 등록되었습니다.");
    localStorage.setItem('memo', JSON.stringify(memoList));
    memoList = [];
    
    location.href = 'SimpleNote.html';
}