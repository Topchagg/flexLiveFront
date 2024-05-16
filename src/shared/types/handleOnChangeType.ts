import {SetStateFunction,formValue,validFuncType} from "../sharedApi"

type handleOnChangeFunction = (
    event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    min:number,
    max:number,
    setFunc:SetStateFunction<formValue>,
    validFunc?: validFuncType
) => void;

export type {handleOnChangeFunction}