import React, { Component } from 'react'
import image1 from '../../../images/python1.jpg'
import image2 from '../../../images/python2.jpg'
import { CardActionArea, CardMedia } from '@material-ui/core'

export default class PythonBack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: image1,
            count: 0
        }

    }


    componentDidMount() {
        const images = [image1, image2]
        let count = 0
        this.myInterval = setInterval(() => {
            this.setState({ image: images[count] })
            count = (count + 1) % 2
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
