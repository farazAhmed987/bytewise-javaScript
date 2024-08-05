const clock = document.querySelector('.clock')
document.querySelector('body').style.backgroundColor='azure'

setInterval(() => {

    const date= new Date();
    clock.innerText=`${date.toLocaleTimeString()} `;
 
}, 1000);