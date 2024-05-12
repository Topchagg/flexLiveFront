import { ContactLocation,ContactNumber } from "../../shared/sharedApi"

import './ui/contact.css'

const ContactSection = () => {
    return (
        <div className="contact section-padding">
            <div className="content-wrapper">
                <div className="contact-n-map-wrapper">
                    <div className="contact-info-wrapper">
                        <div className="main-title">
                            Contact
                        </div>
                        <div className="big-margin-top">
                            <ContactNumber/>
                        </div>
                        <div className="small-margin-top">
                            <ContactLocation/>
                        </div>
                    </div>
                    <div className="map-wrapper">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85183.18007815603!2d11.567104!3d48.1492992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2z0JzRjtC90YXQtdC9!5e0!3m2!1sru!2sde!4v1713111329738!5m2!1sru!2sde"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection