const upperSet = "AQWERTYUIOPLKJHGFDSZXCVBNM"
const lowerSet = "qwertyuioplkjhgfdsazxcvbnm"
const number = "1234567890"
const symbols = "!@#$%^&*()/+-_"

const generateRandom = (data) =>{
    return data[Math.floor(Math.random() * data.length)]
}

//items
const passBox = document.getElementById("pass-box")
const total = document.getElementById("size")
const capital = document.getElementById("capital")
const lower = document.getElementById("small")
const numbers = document.getElementById("numbers")
const symbol = document.getElementById("symbols")



const getPassword = (password = "") => {
    if(capital.checked){
        password += generateRandom(upperSet);
    }
    if(numbers.checked){
        password += generateRandom(number);
    }
    if(symbol.checked){
        password += generateRandom(symbols);
    }
    if(lower.checked){
        password += generateRandom(lowerSet);
    }

    if(total.value > password.length){
        return getPassword(password);
    }

    passBox.innerText = cut(password , total.value)

}

const h = document.getElementById("btn");
    h.addEventListener("click" , function(){
        if(total.value === ""){
            alert("Give password length")
        }
        else{
            getPassword();
        }
        
        // console.log("helllo");
    })

// const text = document.getElementById("pass-box");

// if(text.value.length > 40){
//     text.querySelector("pass-box").classList.toggle("overflow");
// }

function cut(str , num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str
    }
}

function copyTextFromElement(elementID) {
    let element = document.getElementById(elementID); //select the element
    let elementText = element.textContent; //get the text content from the element
    copyText(elementText); //use the copyText function below
}
function copyText(text) {
    navigator.clipboard.writeText(text);
}