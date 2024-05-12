const validOnlyLetters = (text:string) => { // valid func that set`s only letters
    let validValues = /[^a-zA-Zа-яА-Я\s]/;
    return !validValues.test(text)
}

export default validOnlyLetters