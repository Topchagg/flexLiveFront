import { FC } from "react";

interface PropsInterFace {
    placeholder: string; // Taking placeholder like a props
    handleOnChange: Function; // HandleOnChange this is a function that wrote in any of forms.
    name: string; // name of state that u wanna set
    validFunc:Function // validFunc, a func that validating info, they`re all in shared/validations/...
    setFunc:Function // useState set function for example setName or setFormInfo
    value:string // value of state that u setting 
    min:number //  value that show min of elements that user have to input into a field
    max:number //  value that show max of elements that user can to input into a field
}

const InputField: FC<PropsInterFace> = (props) => {

    let inputIsValid:boolean = true // Boolean value that let us change styles of input to show user about incorrect data
    let inputIsValidStyles = inputIsValid ? "input-invalid": "input-valid"


    return (
        <input 
        onChange={(e) => props.handleOnChange(
            e,
            props.min,
            props.max,
            props.setFunc,
            inputIsValid,
            props.validFunc
        )}
        name={props.name} 
        type="text" // Default type, If it`s need u can add your type by props
        value={props.value}
        placeholder={props.placeholder} 
        className={inputIsValidStyles} 
        />
    );
};

export default InputField;