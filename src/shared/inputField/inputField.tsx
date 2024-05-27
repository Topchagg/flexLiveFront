import { FC } from "react";
import {validFuncType,SetStateFunction,formField,handleOnChange} from "../sharedApi";

type SetFuncType<T> = SetStateFunction<T>;

interface PropsInterFace {
    placeholder: string; // Taking placeholder like a props
    name: string; // name of state that u wanna set
    validFunc:validFuncType // validFunc, a func that validating info, they`re all in shared/validations/...
    setFunc:SetFuncType<any> // useState set function for example setName or setFormInfo
    setObject:formField // object that include value and isValid
    min:number //  value that show min of elements that user have to input into a field
    max:number //  value that show max of elements that user can to input into a field
}

const InputField: FC<PropsInterFace> = (props) => {


    let inputIsValidStyles = props.setObject.isValid ? "input-valid": "input-invalid"


    return (
        <input 
        onChange={(e) => handleOnChange(
            e,
            props.min,
            props.max,
            props.setFunc,
            props.validFunc
        )}
        name={props.name} 
        type="text" // Default type, If it`s need u can add your type by props
        value={props.setObject.value}
        placeholder={props.placeholder} 
        className={inputIsValidStyles} 
        />
    );
};

export default InputField;