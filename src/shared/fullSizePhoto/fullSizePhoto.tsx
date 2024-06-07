import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { toggleFullImage } from '../sharedApi'

import './ui/fullSizePhoto.css'

interface fullSizePhotoProps {
    image:string
}

const FullSizePhoto:FC<fullSizePhotoProps> = (props) => {

    const dispatch = useDispatch()

    const closeFullSizeImage = () => dispatch(toggleFullImage({image:''}))

    return (
        <div className='full-size-photo-wrapper' onClick={closeFullSizeImage}>
            <img className='full-size-image' src={props.image} alt="" />
        </div>
    )
}

export default FullSizePhoto