import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { toggleFullImage } from '../../shared/sharedApi'

import './ui/product.css'

interface propsInterface {
    name:string,
    wood:string,
    price:string,
    image:string
}



const Product:FC<propsInterface> = (props) => {

   const dispatch = useDispatch();

   const showFullImageOnClick = () => dispatch(toggleFullImage({image:props.image}))

    return (
        <div className="product default-margin-top">
           <div className="name-n-wood">
                <div className="wood-name">
                    {props.wood}
                </div>
                <div className="product-name">
                    {props.name}
                </div>
           </div>
           <div className="img-wrapper" onClick={showFullImageOnClick}>
                <img className='product-image' src={props.image} alt="" />
           </div>
           {/* <div className="price-wrapper main-title">
            300
           </div> */}
        </div>
    )
}

export default Product