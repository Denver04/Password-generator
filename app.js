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

function cut(str , num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str
    }
}
