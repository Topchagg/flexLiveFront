import { useState } from "react"
import { InputField,TextAreaField,Button,validOnlyLetters,validOnlyNumb } from "../../../../../shared/sharedApi"

import '../../styles/components/form.css'

// Making form and use this form in questionForm, or ContactForm, or createAccount form, we can make this form reusable
// But better making for any other form new form like example Sections/QuestionForm/Components/Form.tsx  it`s better just because
// We don`t care with names and root

/**
 * Handles input change events for input fields.
 * Updates the form state based on the input value.
 * If a validation function is provided, validates the input data.
 * @param {Object} e - The event object containing information about the input change even.
 * @param {Function} validFunc - Optional. A validation function to validate the input data
 */

const Form = () => {

    interface event { // interface for event onChange
        target: {
            name:string,
            value:string
        },
    }

    const [formInfo, setFormInfo] = useState({
        userName: '',
        userPhoneNumber: '',
        userMessage: '' 
    })

    const handleOnChange = (e:event,validFunc:Function) => { // handleOnChange for input(fields/areas)
        // e - event Onchange, validFunc this is func that will validating info. For example like
        // ValidOnlyLetters, ValidOnlyNumb, validEmail and others   
        if(validFunc){ // if validFunc was provided we validating data 
            if(validFunc(e.target.value)){
                setFormInfo(prev => ({
                    ...prev,
                    [e.target.name]: e.target.value // e.target.name it`s a name what a state we are change
                }))
            }
        }
        else { // if validFunc wasn`t provided we don`t validate data
            setFormInfo(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    }
    
    return (
        <div className="question-form-wrapper">   
            <form action="" className="question-form">
                <div>
                    <InputField 
                    validFunc={validOnlyLetters}  
                    value={formInfo.userName}
                    name={'userName'} 
                    handleOnChange={handleOnChange}  
                    placeholder="Your name"
                    />
                </div>
                <div className="small-margin-top">
                    <InputField 
                    value={formInfo.userPhoneNumber}
                    validFunc={validOnlyNumb} 
                    name={'userPhoneNumber'} 
                    handleOnChange={handleOnChange} 
                    placeholder="Your telephone number"
                    />
                </div>
                <div className="small-margin-top">
                    <TextAreaField 
                    name="userMessage" 
                    handleOnChange={handleOnChange} 
                    height={375} 
                    placeholder="Enter your text"
                    />
                </div>
                <div className="question-form-btn-wrapper small-margin-top">
                    <Button text="Send"/>
                </div>
            </form>
        </div>
    )
}

export default Form