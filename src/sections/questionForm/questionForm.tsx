import Form from './ui/components/form/form'

import './ui/styles/common/questionForm.css'

// Here we are using form that was imported from Sections/ContactForm/Components/Form.tsx

const QuestionForm = () => {
    return (
        <div className="section-padding main-text">
           <div className="content-wrapper">
            <div className="main-title text-center">
                    Any Questions ?
                </div>
                <div className="form-n-text-wrapper big-margin-top">
                    <div className="form-wrapper">
                        <Form/> 
                    </div>
                    <div className="question-form-text-wrapper">
                        Write to us and we will be sure
                        to answer all your questions and
                        give you a comprehensive consultation.
                    </div>
                    <div className="question-form-img-wood-wrapper">
                    <img src="/images/log.png" alt="" />
                </div>
                </div>
           </div>
        </div>
    )
}

export default QuestionForm