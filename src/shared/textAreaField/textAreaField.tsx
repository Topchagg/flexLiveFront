import { FC } from "react"

interface propsInterFace{
    placeholder:string; // Taking placeholder like a props
    height:number; // height of textarea field
    handleOnChange: Function; // HandleOnChange this is a function that wrote in any of forms.
    setFunc: Function // useState set function for example setName or setFormInfo
    name:string // name of state that u wanna set
    max?:number // additional value that show max of elements that user can to input into a field
}

const TextAreaField:FC<propsInterFace> = (props) => {

    return (
        <textarea 
            name={props.name} 
            onChange={(e) => props.handleOnChange(e,props.setFunc)} 
            style={{height:props.height}}  
            placeholder={props.placeholder} 
            className="input-valid">
        </textarea>
    )
}

export default TextAreaField