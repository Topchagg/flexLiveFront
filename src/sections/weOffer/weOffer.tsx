import { Button } from '../../shared/sharedApi'

import './ui/weOffer.css'

const WeOffer = () => {
    return (
        <div className='we-offer section-padding'>
            <div className="content-wrapper we-offer-plate-wrapper">
                <div className="we-offer-plate plate">
                    <div className="we-offer-plate-info-block">
                        <div className="we-offer-plate-title">
                            Solid <br className='we-offer__laptop-adaptive'/> wood <br className='we-offer__laptop-adaptive'/> products
                        </div>
                        <div className="we-offer-plate-price-info default-margin-top main-text gold-text-color">
                            Oak, beech, ash from <strong>1700 CZK</strong> per m3
                        </div>
                        <div className="we-offer-plate-btn-wrapper">
                            <Button text='Order'/>
                        </div>
                    </div>
                    <div className="we-offer-plate-line-wrapper we-offer__laptop-adaptive">
                        <img className='we-offer-line' src="/images/line.png" alt="" />
                    </div>
                    <div className="we-offer-plate-images-block we-offer__laptop-adaptive">
                        <div className="img-item1 img-item-wrapper">
                            <img className='img-item' src="/images/image.png" alt="" />
                        </div>
                        <div className="img-item2 img-item-wrapper">
                            <img className='img-item' src="/images/image (1).png" alt="" />
                        </div>
                        <div className="img-item3 img-item-wrapper">
                            <img className='img-item' src="/images/image (2).png" alt="" />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default WeOffer