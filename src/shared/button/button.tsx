import { FC } from 'react'

import './ui/button.css'

// Default reusable button with props.text
// Links adding by wrapper of button that helps changing width, adding links correctly and others

interface PropsInterFace {
    text: string
}

const Button:FC<PropsInterFace> = (props) => {
    return(
        <div className="button childs-center default-padding main-text">
            {props.text}
        </div>
    )
}

export default Button