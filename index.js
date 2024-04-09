let submit=document.getElementById('submit');
let frm=document.getElementById('frm');
let cpass=document.getElementById('cpass');
let pass=document.getElementById('pass');
let passcheck=document.getElementById('passcheck');
let numcheck=document.getElementById('numcheck');
let mobile=document.getElementById('mobile');
submit.addEventListener('click',(e)=>{
    if(mobile.value.length!=10){
        numcheck.style.display='block';
        e.preventDefault();
    }
    else if(cpass.value!=pass.value){
        numcheck.style.display='none';
        passcheck.style.display='block';
        e.preventDefault();
    }
    else{
        passcheck.style.display='none';
        numcheck.style.display='none';
        frm.submit;
    }
});