import { Product } from "../../entities/entitiesApi"
import { Carousel } from "../../shared/sharedApi"

const testList = [
    {
        "name": "Kitchen",
        "wood": "Oak",
        "price": "300",
        "image": "https://www.charlestonamishfurniture.com/cdn/shop/products/amish-made-oak-kitchen-cabinets-with-seely-finish.jpg?v=1629649576"
    },
    {
        "name": "Kitchen",
        "wood": "Oak",
        "price": "300",
        "image": "/images/kitchen.png"
    },
    {
        "name": "Kitchen",
        "wood": "Oak",
        "price": "300",
        "image": "https://www.charlestonamishfurniture.com/cdn/shop/products/amish-made-oak-kitchen-cabinets-with-seely-finish.jpg?v=1629649576"
    },
]

const ShowProducts = () => {
    return (
        <div className="show-products section-padding text-center">
            <div className="content-wrapper">
                <div className="main-title">
                    Our work
                </div>
                <div className="carousel-wrapper">
                   <Carousel Item={Product} itemList={testList}/>
                </div>
            </div>
        </div>
    )
}

export default ShowProducts