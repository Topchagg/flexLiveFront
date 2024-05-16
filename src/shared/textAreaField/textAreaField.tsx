import { FC } from "react"
import {SetStateFunction,formField, handleOnChange,validFuncType } from "../sharedApi";


interface propsInterFace{
    placeholder:string; // Taking placeholder like a props
    height:number; // height of textarea field
    setFunc: SetStateFunction<any> // useState set function for example setName or setFormInfo
    setObject: formField
    name:string // name of state that u wanna set
    min:number //  value that show min of elements that user have to input into a field
    max:number //  value that show max of elements that user can to input into a field
    validFunc?: validFuncType // validFunc, a func that validating info, they`re all in shared/validations/...
}

const TextAreaField:FC<propsInterFace> = (props) => {

    let inputIsValidStyles = props.setObject.isValid ? "input-valid": "input-invalid"

    return (
        <textarea 
            name={props.name} 
            onChange={(e) => handleOnChange(e,props.min,props.max,props.setFunc,props.validFunc)}
            style={{height:props.height}}  
            value={props.setObject.value}
            placeholder={props.placeholder} 
            className={inputIsValidStyles}>
        </textarea>
    )
}

export default TextAreaField