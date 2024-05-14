import SetStateFunction from "../../types/setStateFunction" // type for set Function to identify prev value

interface Event { // interface for event onChange
    target: {
        name: string,
        value: string
    }
}

const handleOnChange = (e: Event, min:number,  max:number, setFunc: SetStateFunction<{ [key: string]: string }>, isValid:boolean, validFunc?: Function) => { 
// setFunc: SetStateFunction<{ [key: string]: string }> - this type of function to update the state,
// where the previous state is an object with keys of type string and values ​​of type string

    if (validFunc) { // if validFunc was provided we validating data 
        if (validFunc(e.target.value,isValid,min,max)) {
            setFunc(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    } else { // if validFunc wasn't provided we don't validate data
        setFunc(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
}

export default handleOnChange;