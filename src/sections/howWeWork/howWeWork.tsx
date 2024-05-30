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
                    <div className="advantages-block-wrapper how-we-work__mobile-adaptive">
                        <div className="advantages-items-wrapper">
                            <div className="advantages-text-item default-margin-top">
                                In-house carpentry production
                            </div>
                            <div className="advantages-text-item default-margin-top">
                                We only treat wood with environmentally friendly and safe products
                            </div>
                            <div className="advantages-text-item default-margin-top">
                                Prices from the manufacturer, no extra chargers
                            </div>
                        </div>
                    </div>
                    <div className="video-wrapper">

                    </div>
                    <div className="advantages-block-wrapper how-we-work__laptop-adaptive">
                        <div className="advantages-items-wrapper">
                            <div className="advantages-text-item default-margin-top">
                                In-house carpentry production
                            </div>
                            <div className="advantages-text-item default-margin-top">
                                We only treat wood with environmentally friendly and safe products
                            </div>
                            <div className="advantages-text-item default-margin-top">
                                Prices from the manufacturer, no extra chargers
                            </div>
                        </div>
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