import { FC } from 'react'
import './ui/fullSizePhoto.css'
import { useDispatch } from 'react-redux'
import { toggleFullImage } from '../sharedApi'

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