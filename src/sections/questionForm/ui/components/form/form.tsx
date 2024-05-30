import { useEffect, useState } from "react"
import { InputField,TextAreaField,Button,validOnlyLetters,validOnlyNumb,formField,usePost,IsLoading } from "../../../../../shared/sharedApi"

import '../../styles/components/form.css'

// Making form and use this form in questionForm, or ContactForm, or createAccount form, we can make this form reusable
// But better making for any other form new form like example Sections/QuestionForm/Components/Form.tsx  it`s better just because
// We don`t care with names and root


// If u need make new form u can find how to do this here
// src/shared/types/handleOnChangeType.ts

type questionFormInfo = {
    userName: formField;
    userPhoneNumber: formField;
    userMessage: formField;
}

const Form = () => {
    const {data,loading,error,post} = usePost<boolean>('')

    const [formInfo, setFormInfo] = useState<questionFormInfo>({
        userName: {value:'',isValid:false},
        userPhoneNumber: {value:'',isValid:false},
        userMessage: {value:'',isValid:false} 
    })

    async function handleOnSubmit(data:questionFormInfo):Promise<void> {
        const dataToPost = {
            userName: data.userName.value,
            userPhoneNumber: data.userPhoneNumber.value,
            userMessage: data.userMessage.value
        }
       if(data.userMessage.isValid && data.userPhoneNumber.isValid && data.userName.isValid){
        await post({value:dataToPost})
       }
    }
    
    return (
        <div className="question-form-wrapper">   
            {loading && <IsLoading/>}
            <form action="" className="question-form">
                <div>
                    <InputField 
                    validFunc={validOnlyLetters} // validFunc that validating data and setting only if condition correctly
                    setFunc={setFormInfo} // setFunc that setting object
                    setObject={formInfo.userName} // setObject object of useState hook 
                    name={'userName'} // name of field must have be the same with name of key in setObject
                    placeholder="Your name"
                    min={2} // if amount of symbols be less than this value field will be invalid.
                    max={20} // Can not set string that have more than this value symbols
                    />
                </div>
                <div className="small-margin-top">
                   <InputField 
                    setFunc={setFormInfo}
                    setObject={formInfo.userPhoneNumber}
                    validFunc={validOnlyNumb} 
                    name={'userPhoneNumber'} 
                    placeholder="Your telephone number"
                    min={2}
                    max={15}
                    />
                </div>
                <div className="small-margin-top">
                    <TextAreaField 
                    name="userMessage" 
                    setObject={formInfo.userMessage}
                    setFunc={setFormInfo}
                    height={375} 
                    placeholder="Enter your text"
                    min={0}
                    max={20}
                    />
                </div>
                <div className="question-form-btn-wrapper small-margin-top" onClick={() => {handleOnSubmit(formInfo)}}>
                    <Button text="Send"/>
                </div>
            </form>
        </div>
    )
    }

export default Form