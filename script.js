//Кнопка отправки
const submit = document.getElementById("submit");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    checkInputs();
   });
function checkInputs() {
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    //Убираем пустоту
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //Добавляем условия для логина
    if (emailValue === "") {
        setErrorFor(email, "Обязательно для запонения");
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Некорректный email");
    } else {
        setErrorFor(email, "");
    }

    //Добавляем условия для пароля
    if (passwordValue === ""){
        setErrorFor(password, "Обязательно для заполнения");
        return;
    } else if (!isPasswordNumbers(passwordValue)){
        setErrorFor(password, "Пароль должен содержать числа");
        return;
    } else if (!isPasswordLowerCase(passwordValue)){
        setErrorFor(password, "Пароль должен содержать символы нижнего регистра");
        return;
    } else if (!isPasswordUpperCase(passwordValue)){
        setErrorFor(password, "Пароль должен содержать символы верхнего регистра");
        return;
    } else if (!isPasswordSymbol(passwordValue)){
        setErrorFor(password, "Пароль должен содежать специальные символы");
        return;
    } else if (!isPasswordSum(passwordValue)){
        setErrorFor(password, "Пароль должен содержать более 6 символов");
        return;
    } else {
 }       setErrorFor(password, "");
}

//Значения в емайл
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//Значения в пароле
//Содержит хотя бы одно число
function isPasswordNumbers(password) {
    return /(?=.*[0-9])/.test(password);
}
//Нижний регистр
function isPasswordLowerCase(password) {
    return /(?=.*[a-z])/.test(password);
}
//Верхний регистр
function isPasswordUpperCase(password) {
    return /(?=.*[A-Z])/.test(password);
}
//Специальные символы
function isPasswordSymbol(password) {
    return /(?=.*[!@#$%^&*])/.test(password);
}
//Не менее 6 символов
function isPasswordSum(password) {
    return password.length >= 6;
}


//Сообщение об ошибке
function setErrorFor(input, message) {
    const groupControl = input.parentElement;
    const small = groupControl.querySelector("small");
    small.innerText = message;

    groupControl.className = "group error";
}