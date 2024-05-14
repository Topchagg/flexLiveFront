const validOnlyLetters = (value:string,isValid:Boolean,min:number,max:number) => { // valid func that set`s only letters
    /** 
    * @param {boolean} isValid - A boolean element that show correct data that user entered or no. 
    * @param {string} value - Value that entering from handle function, by default this is e.target.value
    * @param {number} min - Min must to be < Max, this is a value that validation string by amount of elements
    * @param {number} max - Max must to be > Min, this is a value that validation string by amount of elements
    * */

    if(value.length <= max){
        let validValues = /[^a-zA-Zа-яА-Я\s]/;
        isValid = true;
        if(value.length < min){
            isValid = false;
        }
        return !validValues.test(value)
    }
}

export default validOnlyLetters