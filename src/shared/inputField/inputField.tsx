import { FC } from "react";

interface PropsInterFace {
    placeholder: string; // Taking placeholder like a props
    handleOnChange: Function; // HandleOnChange this is a function that wrote in any of forms.
    name: string; // name of state that u wanna set
    validFunc:Function // validFunc, a func that validating info, they`re all in shared/validations/...
    value:string // value of state that u setting 
}

const InputField: FC<PropsInterFace> = (props) => {
    return (
        <input 
        onChange={(e) => props.handleOnChange(e,props.validFunc)} 
        name={props.name} 
        type="text" // Default type, If it`s need u can add your type by props
        value={props.value}
        placeholder={props.placeholder} 
        className="input-valid" 
        />
    );
};

export default InputField;