var btnCheck = document.querySelector("#btn");
var dob = document.querySelector("#user-dob");
var userName = document.querySelector("#user-name");
var output = document.querySelector("#output");

function clickHandler(){
    var dobSplit = dob.value.split('/');

    var userDOB = dobSplit[0];
    
    if(isNaN(userDOB))
    {
        alert("Invalid Input!⚠️ Please retype your birthdate");
    }

    if (dob === 1) {
        return "That's rare! 👀 Your birthdate is neither a prime nor a composite number";
    }

    for(var i=2;i<=userDOB;i++)
    {
        if(userDOB%i==0)
        {
            if(userDOB==i)
            {
                return "Yayyyy!🎈 " + userName.value + ", your birthdate is a prime number!"; 
            }
            else
            {
                return "Uh oh!☹️ " + userName.value + ", your birthdate is not a prime number! ";
            }
        }
    }
}

function getText(){
    output.innerText = clickHandler();
}

btnCheck.addEventListener("click", getText);