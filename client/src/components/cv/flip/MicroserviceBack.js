import React, { Component } from 'react'
import Micro1 from '../../../images/micro1.JPG'
import Micro2 from '../../../images/micro2.JPG'
import Micro3 from '../../../images/micro3.JPG'
import { CardActionArea, CardMedia } from '@material-ui/core'

export default class MicroserviceBack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: Micro1,
            count: 0
        }

    }


    componentDidMount() {
        const images = [Micro1, Micro2, Micro3]
        let count = 0
        this.myInterval = setInterval(() => {
            this.setState({ image: images[count] })
            count = (count + 1) % 3
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