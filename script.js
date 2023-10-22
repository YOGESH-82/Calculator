let input = document.getElementById('inputBox');
// console.log(input);

let buttons = document.querySelectorAll('button');
// console.log(buttons);


let string = "";
let arr = Array.from(buttons);
// console.log(arr);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            if(string===""){
                input.value='0';
            }else{
                string = eval(string);//updating value with answer
                console.log(string);
                input.value = string;
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            console.log(string);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            console.log(string);
            input.value = string;
           
        }
        
    })
})