import React, { useState } from 'react'
import Footer from './Footer'
import Popup from './Popup'
import jay from '../images/cv.png'
import Collection from '../images/collection.jpeg'
import Exhibition from '../images/exhibition.jpg'
import './Hub.css'

const Hub = () => {
    const [popup, setPopup] = useState(false)
    const OnClickOpen = () => {
        setPopup(true)
    }
    const OnClickClose = () => {
        setPopup(false)
    }

    return (
        <div className="page">
            <div style={{ textAlign: "center", fontSize: "60px", color: "#ccc", paddingBottom: "30px" }}>BE PERSISTENT</div>
            <div style={{ textAlign: "center", fontSize: "20px", paddingLeft: "200px", paddingRight: "200px", color: "#eee", paddingBottom: "30px" }}>
                "Nothing in this world can take the place of persistence.
                Talent will not; nothing is more common than unsuccessful men with talent. Genius will
            not; unrewarded genius is almost a proverb. Education will not;"</div>
            <div className="wrapper">
                <div className="card1">
                    <img src={Collection} alt="no image" />
                    <div className="info">
                        <h1>Collection</h1>
                        <p>There Is My Collection</p>
                        <a onClick={OnClickOpen} className="btn">Read More</a>
                    </div>
                </div>


                <div className="card2">
                    <img src={jay} alt="no image" />
                    <div className="info">
                        <h1>C V</h1>
                        <p>Click Button To See My CV</p>
                        <a href="/hub/cv" className="btn">Read More</a>
                    </div>
                </div>


                <div className="card3">
                    <img src={Exhibition} alt="no image" />
                    <div className="info">
                        <h1>Exhibition</h1>
                        <p>Click Button To Exploit More Web Design and Android App</p>
                        <a onClick={OnClickOpen}/* href="/exhibition" */ className="btn">Read More</a>
                    </div>
                </div>

                <Popup popup={popup} close={OnClickClose} />
                <div style={{ position: "fixed", bottom: "0px", width: "100%", backgroundColor: "#fff", color: "#233" }}><Footer /></div>
            </div>
        </div>
    )
}

export default Hub
