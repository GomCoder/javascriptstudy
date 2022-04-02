// 필요한 변수 선언
let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

//고차함수를 이용하여 (버튼)이벤트 리스너 부분 수정
const onClickNumber = (event) => {
    if(!operator){
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    //이 아래로는  operator가 존재하는 경우에만 실행됨
    if(!numTwo){
        $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
}

// 각 버튼에 이벤트 리스너 적용
document.querySelector('#num-0').addEventListener('click', onClickNumber); 
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

//고차 함수를 이용하여 (연산자)버튼 이벤트 리스너 적용
const onClickOperator = (op) => () =>{
    if(numOne){
        operator = op;
        $operator.value = op;
    } else {
        alert("숫자를 먼저 입력하세요");
    }
} 

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));

//calculator에 이벤트 리스너 적용하고 결과 출력
document.querySelector('#calculate').addEventListener('click', () => {
    if(numTwo){
        switch(operator){
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = numOne - numTwo;
                break;
            case '*':
                $result.value = numOne * numTwo;
                break;
            case '/':
                $result.value = numOne / numTwo;
                break;
            default:
                break;
        }
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
});

//clear 태그에 이벤트 리스너 적용하고 초기화하기
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $operator.value = '';
    $result.value = '';
});
