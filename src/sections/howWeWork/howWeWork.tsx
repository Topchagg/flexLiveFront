import { Button } from "../../shared/sharedApi"

import './ui/howWeWork.css'

const HowWeWork = () => {
    return (
        <div className='how-we-work section-padding main-text'>
            <div className="content-wrapper"> 
                <div className="main-title text-center">
                    Advantages <br/> working with us
                </div>
                <div className="video-n-text-wrapper big-margin-top">
                    <div className="video-wrapper">

                    </div>
                    <div className="advantages-text-wrapper">

                    </div>
                </div>
                <div className="default-margin-top">
                    <Button text={"Receive a consultation"}/>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork