const listsElement = document.querySelectorAll('select')
// console.log(listsElement);

function selectOption() {
    const listElement = this
    // console.log(listElement);
    const selectedIndex = this.selectedIndex
    // console.log(selectedIndex);
    const selectedOption = this.options[selectedIndex]
    // console.log(selectedOption);
    // console.dir(selectedOption)  
    const optionUrl = selectedOption.value
    // console.log(optionUrl);
    const textOption = selectedOption.textContent

    window.open(
        optionUrl,
        textOption,
        'width=800,height=600,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=no,status=yes,left=' + 
        (window.screen.width - 800) / 2 + ',top=' + 
        (window.screen.height - 600) / 2
    );
}







listsElement.forEach( listElement => {
    listElement.addEventListener('change', selectOption)
});