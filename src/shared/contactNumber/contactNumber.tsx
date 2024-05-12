import './ui/contactNumber.css'

// UI reusable component

const ContactNumber = () => {
    return (
        <div className='contact-number-wrapper'>
            <div className="phone-icon-wrapper">
                <img className='icon' src="./icons/phone.png" alt="" />
            </div>
            <div className="main-text">
                +420 000 000 000
            </div>
        </div>
    )
}

export default ContactNumber