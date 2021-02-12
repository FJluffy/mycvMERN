import React from 'react'
import ToHub from '../ToHub'
import Footer from '../Footer'

const Collection_home = () => {
    return (
        <div>
            <div style={{ backgroundColor: "#223" }} ><ToHub /></div>
            <div style={{ position: "fixed", bottom: "0px", width: "100%", backgroundColor: "#eee", color: "#233" }}><Footer /></div>
        </div>
    )
}

export default Collection_home
