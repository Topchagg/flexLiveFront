import { Wood } from "../../entities/entitiesApi"

import './ui/weWorkWith.css'

const WeWorkWith = () => {
    return (
        <div className='we-work-with section-padding'>
            <div className="content-wrapper">
                <div className="main-title text-center">
                    THE WOOD WE <br/> WORK WITH
                </div>
                <div className="wood-slider big-margin-top">
                    <div className="wood-slider-item">
                        <Wood/>
                    </div>
                    <div className="wood-slider-item">
                        <Wood/>
                    </div>
                    <div className="wood-slider-item">
                        <Wood/>
                    </div>
                    <div className="wood-slider-item">
                        <Wood/>
                    </div>
                    <div className="wood-slider-item">
                        <Wood/>
                    </div>
                    <div className="wood-slider-item">
                        <Wood/>
                    </div>
                    <div className="wood-slider-item">
                        <Wood/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeWorkWith