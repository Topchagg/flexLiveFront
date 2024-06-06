import './ui/aboutUs.css'

const AboutUsSection = () => {
    return (
        <div className='about-us section-padding text-center'>
            <div className="content-wrapper">
                <div className="about-us-plate-wrapper">
                    <div className="plate about-us-plate">
                        <div className="about-us-plate-text-wrapper">
                            <div className="main-title">
                                About us
                            </div>
                            <div className="about-us-main-text">
                            <strong>BIO CWT</strong>  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
                            </div>
                        </div>
                        <div className="about-us-plate-images-wrapper">
                            <div>
                                <img className='about-us-plate-sub-image1' src="/images/aboutus2.png" alt="" />
                            </div>
                            <div className="about-us-plate-main-image-wrapper">
                                <img className='about-us-plate-main-image' src="/images/aboutus1.png" alt="" />
                            </div>
                            <div>
                                <img className="about-us-plate-sub-image2" src="/images/aboutus3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection