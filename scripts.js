window.addEventListener('load', function(){

    const API_KEY = 'e3e33fdacc9eabf1804c6d69bcd194a1'; // Заносим наш API_key в константу

    let form = document.querySelector('.email__form'); //получаем нужные элементы 
    let result = document.querySelector('.result');

    form.addEventListener('submit', function(e){  //в этом блоке при отправке формы прерываем стандартное событие и отправляем щапрос на API
        e.preventDefault();
        let email = document.querySelector('.email').value.toString();
        console.log(email);
        fetch(`http://apilayer.net/api/check?access_key=${API_KEY}&email=${email}&format=1&smtp=1`,{
            method: 'POST'
        }).then((Response)=>{
                return Response.json();
        }).then((status)=>{
               status.format_valid ? result.innerHTML = 'Email прошел проверку' : result.innerHTML ='Email не прошел проверку'; //выводим результат проверки
        })


    })



});