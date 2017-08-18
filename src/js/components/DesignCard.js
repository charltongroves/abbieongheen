import React, {Component} from 'react';
import {
    Card,
    CardMedia,
    CardTitle,
    CardText,
} from 'material-ui/Card';
import transitions from 'material-ui/styles/transitions';
import MaterialTextLogo from './MaterialTextLogo'

class CodeCard extends Component {
    constructor(props) {
        super();
    }
    handleMouseEnter = () => {
        this.setState({zDepth: 4});
    };

    handleMouseLeave = () => {
        this.setState({zDepth: 0});
    };
    render() {
        const {name, desc, date, logoIcon, logoText} = this.props
        const styles = {
            paper: {
                transition: transitions.easeOut(),
                width: "300px",
                maxWidth: "100vw"
            },
            date: {
                color: "rgba(0,0,0,0.6)",
                padding: "0px 16px 8px 16px",
                fontSize: "0.8rem"
            }
        }
        return (
            <Card className="code-card"
                onMouseOver={this.handleMouseEnter}
                onMouseOut={this.handleMouseLeave}
                style={{
                ...this.props.style,
                ...styles.paper
            }}>
                <CardMedia>
                    <MaterialTextLogo text={logoText} icon={logoIcon} />
                </CardMedia>
                <CardTitle title={name} subtitle={desc}/>
                <CardText style={styles.date}>{date}</CardText>
            </Card>
        )
    }
};

export default CodeCard;