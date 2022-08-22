const promptLog = document.querySelector('#changingLink');

// promptLog.addEventListener('click', (event) => {
//     this.preventDefault();
//     prompt('Введите новое название для ссылки:');
// })


promptLog.addEventListener('click', function(event) {
    event.preventDefault();
    let newTitle = prompt('Введите новое название для ссылки:')
    this.textContent = newTitle;
})