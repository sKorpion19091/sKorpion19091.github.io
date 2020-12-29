console.log("Hello There Console Goer!!"); 

let themedots = document.getElementsByClassName("theme-dot");
let contactFormButton = document.getElementById("submit-btn");
let isPreview = false;
let currTheme = localStorage.getItem("theme")===null ? "default" : localStorage.getItem("theme");
setTheme(currTheme);

let contactRequest = localStorage.getItem("contactFormInfo")===null ? { name: "", subject: "", email: "", message: "" } : localStorage.getItem("contactFormInfo");
console.log(contactRequest);

for(var i = 0; i < themedots.length; i++){
    themedots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
        currTheme = mode;
        isPreview = false;
        localStorage.setItem("theme",mode);
    });

    themedots[i].addEventListener('mouseenter', function(){
        let mode = this.dataset.mode;
        isPreview = true;
        setTheme(mode);
    });

    themedots[i].addEventListener('mouseout', function () {
        if(isPreview){
            document.getElementById('theme-style').href = currTheme + '.css';
            isPreview = false;
        }
    });

}

contactFormButton.addEventListener('click', function(){
    const queryString = window.location.search;
    let params = queryString.split("&");
    contactRequest.name = grabValueFromURLParam(params[0]);
    contactRequest.subject = grabValueFromURLParam(params[1]);
    contactRequest.email = grabValueFromURLParam(params[2]);
    contactRequest.message = grabValueFromURLParam(params[3]);
    localStorage.setItem("contactFormInfo", contactRequest);
});

function grabValueFromURLParam(param){
    return param.substr(param.indexOf("=")+1);
}

function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('theme-style').href = 'default.css';
    }
    
    if(mode === 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }

    if(mode === 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }

    if(mode === 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
    }
}

function storeContactForm(){
    
}
