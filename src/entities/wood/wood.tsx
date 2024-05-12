import './ui/wood.css'

const Wood = () => {
    return (
        <div className="wood default-padding text-center main-text">
            <div className="wood-img-wrapper">
                <img className='img' src="" alt="" />
            </div>
            <div className="wood-name small-margin-top gold-text-color">
               Oak
            </div>
            <div className="wood-info">
                <div className="wood-info-item">Durability</div>
                <div className="wood-info-item">Beautiful texture</div>
                <div className="wood-info-item">Water resistance</div>
                <div className="wood-info-item">Expensive</div>
            </div>
        </div>
    )
}

export default Wood 