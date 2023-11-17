let display = '';
let calculate = 0 ;
let test =  document.querySelector('.calculation-display');

function AddString(value1 , value2=value1){
  
  display += value2;
  test.value = display;

  calculate += value1;

}

function AddBracket(){
  ;
}

function Calculate(){
  display = '';
  test.value = eval(calculate);
  calculate = '';
}

function RemoveLast(){

  display = display.slice(0,-1);
  test.value = display;

  calculate = calculate.slice(0,-1);
}

function ClearDisplay(){
  display = '';
  test.value = display;

  calculate = '';
}