import { Button } from '../../shared/sharedApi'

import './ui/weOffer.css'

const WeOffer = () => {
    return (
        <div className='we-offer section-padding'>
            <div className="content-wrapper">
                <div className="plate-wrapper big-margin-top">
                    <div className="plate we-offer-plate">
                        <div className="info-product-wrapper">
                            <div className="main-title">
                                SOLID WOOD PRODUCTS
                            </div>
                            <div className="main-text small-margin-top gold-text-color">
                                Oak, beech, ash from <br/> <strong>1700 CZK</strong> per m3
                            </div>
                            <div className="we-offer-btn-wrapper default-margin-top">
                                <Button text={"Order"}/>
                            </div>
                        </div>
                        <div className="line-wrapper default-padding">
                            <img src="/images/line.png" alt="" />
                        </div>
                        <div className="image-product-wrapper">
                            <div className="img-stairs-wrapper"><img src="/images/image (1).png" alt="" /></div>
                            <div className="img-table-wrapper"><img src="/images/image (2).png" alt="" /></div>
                            <div className="img-chair-wrapper"><img src="/images/image.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeOffer