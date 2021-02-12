import React, { Component } from 'react'
import Mern1 from '../../../images/mern1.jpg'
import Mern2 from '../../../images/mern2.jpg'
import Mern3 from '../../../images/mern3.jpg'
import Mern4 from '../../../images/mern4.jpg'
import Mern5 from '../../../images/mern5.jpg'
import Mern6 from '../../../images/mern6.jpg'
import Mern7 from '../../../images/mern7.jpg'
import { CardActionArea, CardMedia } from '@material-ui/core'

export default class MernBack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: Mern1,
            count: 0
        }

    }


    componentDidMount() {
        const images = [Mern1, Mern2, Mern3, Mern4, Mern5, Mern6, Mern7]
        let count = 0
        this.myInterval = setInterval(() => {
            this.setState({ image: images[count] })
            count = (count + 1) % 7
        }, 4000);
    }

    render() {
        return (
            <CardActionArea onClick={this.props.onClick}>
                <CardMedia component="img" alt="Project1"
                    height="320" image={this.state.image} />
            </CardActionArea>
        )
    }
}
