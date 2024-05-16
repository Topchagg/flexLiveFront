const validOnlyNumb = (value:string) => { // valid func that sets only numbsWS
    /** 
    * @param {string} value - Value that entering from handle function, by default this is e.target.value
    * */

    let validValues = /[^0-9]/;
    return !validValues.test(value);
}

export default validOnlyNumb