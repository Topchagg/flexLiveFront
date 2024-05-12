import { ContactLocation, ContactNumber} from '../../shared/sharedApi' // Import reusable shared-components

import './ui/footer.css'

const Footer = () => {
    return  (
       <footer className="footer">
           <div className="content-wrapper center-div"> 
                <div className="content-info-wrapper ">
                    <div className="logo-wrapper">
                        <img className='icon' src="./icons/logo.png" alt="" />
                    </div>
                    <div className="number-info-wrapper">
                        <ContactNumber/>
                    </div>
                    <div className="location-info-wrapper">
                        <ContactLocation/>
                    </div>
                </div>
                <div className="privacy-wrapper">
                    <div className="privacy main-text">
                        Privacy policy
                    </div>
                </div>
           </div>
       </footer>
    )
}

export default Footer