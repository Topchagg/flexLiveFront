const validOnlyNumb = (text:string) => { // valid func that sets only numbs
    let validValues = /[^0-9]/;
    return !validValues.test(text);
}

export default validOnlyNumb