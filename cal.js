let display = document.getElementById('screen') 

let button = Array.from(document.getElementsByClassName('button'));

button.map(button => {
    button.addEventListener('click', (e) =>{
        switch (e.target.innerText) {
            case 'C':
                display.value = '' ;
                break;
            case '=':
                try{
                    display.value = eval(display.value);
                }catch{
                    display.value = 'error'
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    })
})

display.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13){
        try{
            display.value = eval(display.value);
        }catch{
            display.value = 'error'
        }
    }
})
