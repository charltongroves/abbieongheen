import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-dom';


class MaterialTabs extends Component {
    
    renderTabs() {
        const tabs = [
                {
                    index: 0,
                    name: "About",
                    route: "/"
                }, {
                    index: 1,
                    name: "Design",
                    route: "/design"
                }, {
                    index: 2,
                    name: "Illustration",
                    route: "/illustration"
                }, {
                    index: 3,
                    name: "Contact",
                    route: "/contact"
                }
            ]
        return tabs.map((tab) => {
            return (
                <Tab containerElement={<Link to={tab.route} />}
                    label={tab.name}
                    data-route={tab.route}
                    onActive={this.handleActive}>
                </Tab>
            )
        });
    }
    render() {
        const initIndex = this.props.currentRoute
        const styles = {
            ink: {
                backgroundColor: "#FFC107"
            },
            tabs: {
                backgroundColor: 'rgba(0,0,0,0)'
            },
            width: {
                width: "60vw",
                maxWidth: "40rem"
            }
        };
        return (
            <div>
                <Tabs
                    initialSelectedIndex={initIndex}
                    contentContainerStyle={styles.width}
                    inkBarStyle={styles.ink}
                    tabItemContainerStyle={styles.tabs}>
                    {this.renderTabs()}
                </Tabs>
            </div>
        );
    }
}

export default MaterialTabs;