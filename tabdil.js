let inp = document.getElementById('inp');
let select1 = document.querySelector('#sel1');
let select2 = document.querySelector('#sel2');
let btn = document.querySelector('button');
let result = document.getElementById('result');
btn.addEventListener('click',function(){
   let inpval = +inp.value;
   let select2val = +select2.value;
   let select1val = +select1.value;
   if(inp.value === ''){
      alert('Please fill in the number field')
   }
   if(isNaN(inpval)){
      alert('Please enter number value');
   }else{
      
      let tabdilvalue = inpval.toString(select2val);
      result.innerHTML = tabdilvalue;
   }
})
