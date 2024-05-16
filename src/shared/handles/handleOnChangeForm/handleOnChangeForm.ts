import { SetStateFunction,formValue,handleOnChangeFunction,validFuncType } from "../../sharedApi"; // type for set Function to identify prev value


const handleOnChange:handleOnChangeFunction = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                        min:number,
                        max:number,
                        setFunc: SetStateFunction<formValue>,
                        validFunc?: validFuncType) => { 

// setFunc: SetStateFunction<{ [key: string]: string }> - this type of function to update the state,
// where the previous state is an object with keys of type string and values ​​of type string

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