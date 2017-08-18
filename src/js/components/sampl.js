import React, {Component} from 'react';
import spacing from 'material-ui/styles/spacing';
import transitions from 'material-ui/styles/transitions';
import typography from 'material-ui/styles/typography';
import {grey200} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom'
import Easle from '../../img/easle.svg';

class CodeCard extends Component {
    constructor(props) {
        super();
        console.log(props)
        this.state = {
            zDepth: 0
        };
    }
    handleMouseEnter = () => {
        this.setState({zDepth: 4});
    };

    handleMouseLeave = () => {
        this.setState({zDepth: 0});
    };

    render() {
        const {name, desc, imgurl} = this.props
        const desktopGutter = spacing.desktopGutter;
        const desktopKeylineIncrement = spacing.desktopKeylineIncrement;
        const styles = {
            paper: {
                transition: transitions.easeOut(),
                maxWidth: '300px',
                margin: `0 auto ${desktopGutter}px auto`
            },
            heading: {
                fontSize: 20,
                paddingTop: 19,
                marginBottom: 13,
                letterSpacing: 0,
                fontWeight: typography.fontWeightMedium,
                color: typography.textDarkBlack,
                backgroundColor: grey200,
                textAlign: 'center',
                margin: 0,
                padding: 0,
                lineHeight: `${desktopKeylineIncrement}px`
            },
            image: {
                // Not sure why this is needed but it fixes a display issue in chrome
                marginBottom: -6
            }
        }
        return (
            <Paper
                zDepth={this.state.zDepth}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={styles.paper}>
                <h3 style={styles.heading}>name</h3>
                <Link to="/memes">
                    <img style={styles.image} src={Easle}/>
                </Link>
            </Paper>
        );
    }
};

export default CodeCard;