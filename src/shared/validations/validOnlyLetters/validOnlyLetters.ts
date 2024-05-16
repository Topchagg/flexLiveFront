// please use valid functions like a props only for components like InputField and textAreaField
const validOnlyLetters = (value:string) =>  { // valid func that set`s only letters
    /** 
    * @param {string} value - Value that entering from handle function, by default this is e.target.value
    */

    let validValues = /[^a-zA-Zа-яА-Я\s]/;        
    return !validValues.test(value)
}

export default validOnlyLetters