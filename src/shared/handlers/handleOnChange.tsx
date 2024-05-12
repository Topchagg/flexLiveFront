// interface event { // interface for event onChange
//     target: {
//         name:string,
//         value:string
//     },
// }

// /**
//  * Handles input change events for input fields.
//  * Updates the form state based on the input value.
//  * If a validation function is provided, validates the input data.
//  * @param {Object} e - The event object containing information about the input change even.
//  * @param {Function} validFunc - Optional. A validation function to validate the input data
//  * @param {Function} setFunc - function that setting an object.
//  */

// const handleOnChange = (e:event,setFunc:Function,validFunc:Function) => { // handleOnChange for input(fields/areas)
//     // e - event Onchange, validFunc this is func that will validating info. For example like
//     // ValidOnlyLetters, ValidOnlyNumb, validEmail and others   
//     if(setFunc){// if setFunc was provided we are setting da
//         if(validFunc){ // if validFunc was provided we validating data 
//             if(validFunc(e.target.value)){
//                 setFunc({
//                     [e.target.name]: e.target.value // e.target.name it`s a name what a state we are change
//                 })
//             }
//         }
//         else { // if validFunc wasn`t provided we don`t validate data
//             setFunc({
//                 [e.target.name]: e.target.value
//             })
//         }
//     }
// }

// export default handleOnChange