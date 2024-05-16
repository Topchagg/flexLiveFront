import { useState } from "react"
import { InputField,TextAreaField,Button,validOnlyLetters,validOnlyNumb,handleOnChange,formField } from "../../../../../shared/sharedApi"

import '../../styles/components/form.css'

// Making form and use this form in questionForm, or ContactForm, or createAccount form, we can make this form reusable
// But better making for any other form new form like example Sections/QuestionForm/Components/Form.tsx  it`s better just because
// We don`t care with names and root

/**
 * Handles input change events for input fields.
 * Updates the form state based on the input value.
 * If a validation function is provided, validates the input data.
 * @param {Function} validFunc - Optional. A validation function to validate the input data
 */

type questionFormInfo = {
    userName: formField;
    userPhoneNumber: formField;
    userMessage: formField;
}


const Form = () => {
    const [formInfo, setFormInfo] = useState<questionFormInfo>({
        userName: {value:'',isValid:false},
        userPhoneNumber: {value:'',isValid:false},
        userMessage: {value:'',isValid:false} 
    })

    return (
        <div className="question-form-wrapper">   
            <form action="" className="question-form">
                <div>
                    <InputField 
                    validFunc={validOnlyLetters}  
                    setFunc={setFormInfo}
                    setObject={formInfo.userName}
                    name={'userName'} 
                    handleOnChange={handleOnChange}  
                    placeholder="Your name"
                    min={2}
                    max={20}
                    />
                </div>
                <div className="small-margin-top">
                    <InputField 
                    setFunc={setFormInfo}
                    setObject={formInfo.userPhoneNumber}
                    validFunc={validOnlyNumb} 
                    name={'userPhoneNumber'} 
                    handleOnChange={handleOnChange} 
                    placeholder="Your telephone number"
                    min={2}
                    max={15}
                    />
                </div>
                <div className="small-margin-top">
                    <TextAreaField 
                    name="userMessage" 
                    handleOnChange={handleOnChange} 
                    setObject={formInfo.userMessage}
                    setFunc={setFormInfo}
                    height={375} 
                    placeholder="Enter your text"
                    min={0}
                    max={500}
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