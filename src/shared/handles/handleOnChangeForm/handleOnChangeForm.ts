import { SetStateFunction,handleOnChangeFunction,validFuncType,formValue} from "../../sharedApi"; // type for set Function to identify prev value

// please try do not use this function, if u need create new form just use inputField/textAreField and needed props
// how correctly create new form I`ve wrote here src/shared/types/handleOnChangeType.ts
// this function was created for correctly sets and validates data of form.

const handleOnChange:handleOnChangeFunction = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                        min:number,
                        max:number,
                        setFunc: SetStateFunction<formValue>,  // more about setStateFunction here src/shared/types/setStateFunctionType.ts
                        validFunc?: validFuncType) => {  // more about validFunc here src/shared/types/validFuncType.ts

    const targetLength:number = e.target.value.length
    if(validFunc){ // if validFunc was provided we validating data 
       if(validFunc(e.target.value)){ // here we validating data, correct this data or not correct
            if(targetLength < min){ // if data correct we are cheking length of target if < than min we are setting isValid -> false and setting new value
                setFunc(prev => ({
                    ...prev,
                    [e.target.name]: {
                        ...prev[e.target.name],
                        value:e.target.value,
                        isValid:false
                    }
                }))
            }
            else if(targetLength >= min && targetLength <= max) { // if data in correct diapasone we are set isValid in true 
                setFunc(prev => ({
                    ...prev,
                    [e.target.name]: {
                        ...prev[e.target.name],
                        value:e.target.value,
                        isValid:true
                    }
                }))
            }
       }
    }
    else { // if validFunc wasn`t provided we just setting data in correct diapasone again two if probably it`s possibly do with less code
        if(targetLength < min){ // if data correct we are cheking length of target if < than min we are setting isValid -> false and setting new value
            setFunc(prev => ({
                ...prev,
                [e.target.name]: {
                    ...prev[e.target.name],
                    value:e.target.value,
                    isValid:false
                }
            }))
        }
        else if(targetLength >= min && targetLength <= max) { // if data in correct diapasone we are set isValid in true 
            setFunc(prev => ({
                ...prev,
                [e.target.name]: {
                    ...prev[e.target.name],
                    value:e.target.value,
                    isValid:true
                }
            }))
        }
    }
}

export default handleOnChange;