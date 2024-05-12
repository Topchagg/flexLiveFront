import { FC } from "react"

interface propsInterFace{
    placeholder:string; // Taking placeholder like a props
    height:number; // height of textarea field
    handleOnChange: Function; // HandleOnChange this is a function that wrote in any of forms.
    name:string // name of state that u wanna set
}

const TextAreaField:FC<propsInterFace> = (props) => {

    return (
        <textarea 
            name={props.name} 
            onChange={(e) => props.handleOnChange(e)} 
            style={{height:props.height}}  
            placeholder={props.placeholder} 
            className="input-valid">
        </textarea>
    )
}

export default TextAreaField