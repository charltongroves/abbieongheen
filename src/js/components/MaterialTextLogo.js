import React from 'react';
import FontIcon from 'material-ui/FontIcon';
export class MaterialLogo extends React.Component {
    render() {
        if (this.props.icon) {
            const styles = {
                backgroundColor: this.props.color
            }
            return (
                <FontIcon className="material-icons gen-logo icon-logo" style={styles}>{this.props.icon}</FontIcon>
            )
        } else {
            return (
                <p id="icon" style={{overflow: "hidden"}} className="gen-logo text-logo"> {this.props.text} </p>
                )
        }
    }
}

export default MaterialLogo