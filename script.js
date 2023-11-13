let String =""
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            String=eval(String);
            document.querySelector('input').value=String;
        }else{
        String +=e.target.innerHTML;
        document.querySelector('input').value=String;
        }
        
    })
})
// let buttons=document.querySelectorAll('.button')
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         String+=e.target.innerHTML;
//         document.querySelector('input').value=String;
//     })
// })