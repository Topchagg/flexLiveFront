import { Link } from "react-router-dom"

import { Button } from "../../shared/sharedApi"

import './ui/notFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="content-wrapper text-center">
                <div className="error">
                    404
                </div>
                <div className="error-text">
                    Woops
                </div>
                <div className="gold-text-color main-text not-found-page-text">
                Oh, you must be lost, there is no such page.
                </div>
                <Link to="/">
                    <div className="not-found-btn-wrapper  default-margin-top">
                        <Button text={"Go to the home page"} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NotFound