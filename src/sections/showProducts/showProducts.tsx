import { Product } from "../../entities/entitiesApi"
import { Carousel } from "../../shared/sharedApi"


const ShowProducts = () => {
    return (
        <div className="show-products section-padding text-center">
            <div className="content-wrapper">
                <div className="main-title">
                    Our work
                </div>
                <div className="carousel-wrapper">
                   <Carousel Item={Product} itemList={[]}/>
                </div>
            </div>
        </div>
    )
}

export default ShowProducts