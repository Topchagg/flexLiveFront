import './ui/contactLocation.css'

// UI reusable component

const ContactLocation = () => {
    return (
        <div className='contact-location-wrapper'>
            <div className="geo-icon-wrapper">
                <img className='icon' src="./icons/geo.png" alt="" />
            </div>
            <div className="main-text">
                Na Plzeňce 1166/0 <br/>
                150 00
            </div>
        </div>
    )
}

export default ContactLocation