import React, { Component } from 'react'
import Jsp1 from '../../../images/jsp1.JPG'
import Jsp2 from '../../../images/jsp2.JPG'
import Jsp3 from '../../../images/jsp3.JPG'
import Jsp4 from '../../../images/jsp4.JPG'
import { CardActionArea, CardMedia } from '@material-ui/core'

export default class JspBack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: Jsp1,
            count: 0
        }

    }


    componentDidMount() {
        const images = [Jsp1, Jsp2, Jsp3, Jsp4]
        let count = 0
        this.myInterval = setInterval(() => {
            this.setState({ image: images[count] })
            count = (count + 1) % 4
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