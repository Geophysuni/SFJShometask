const consoleLog = document.querySelector('#consoleLog');
const alertLog = document.querySelector('#alert');
const promptLog = document.querySelector('#prompt');

consoleLog.addEventListener('click', ()=>{
    alert('Служит для вывода информации в консоль. Глянь в консоль.');
    console.log('Это текст в консоли');
})

alertLog.addEventListener('click', ()=>{
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK. Да, ты смотришь именно в него');
})

promptLog.addEventListener('click', ()=>{
    prompt('Отображает диалоговое окно с запросом на ввод текста. Напиши в меня "привет" и пока ничего не случится.');
})