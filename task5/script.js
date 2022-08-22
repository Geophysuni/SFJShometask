let but = document.querySelector('#but');
let inputText = document.querySelector('#inpText');

but.addEventListener('click', function(event) {
    event.preventDefault();
    let curText = inputText.value
    console.log(curText);

    inputText.value = "";
    document.querySelector('#duplicateField').textContent = "";

})


inpText.addEventListener('keypress', function(event) {
    let curText = inpText.value
    // console.log(curText)
    document.querySelector('#duplicateField').textContent = curText

})

