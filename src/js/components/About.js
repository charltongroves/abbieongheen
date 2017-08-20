import React, {Component} from 'react';
import Face from '../../img/me.jpg'
class About extends Component {
    render() {
        const styles = {
            container: {
                color: "#f2f2f2",
                textAlign: "center",
                left: "50%",
                marginTop: "4rem",
            },
            h: {
                fontWeight: 800,
                textAlign: "center",
                fontSize: "2.2rem"
            },
            p: {
                fontWeight: 400,
                lineHeight: "2rem",
                fontSize: "1.2rem"
            },
            align: {
                width: "90%",
                maxWidth: "600px",
                margin: "0 auto"
            },
            face: {
                filter: "opacity(0.8)",
                width: "128px",
                borderRadius: "50%"
            }
        }
        return (
            <div style={styles.container}>
                <div style={styles.align}>
                    <img src={Face} style={styles.face} alt="charlie groves"/>
                    <h1 style={styles.h}>I LOVE U ABBIE</h1>
                    <p style={styles.p}>I’m a Graphic Designer and Illustrator based in Brisbane. I’m currently studying a Bachelor of Design at 
                      Griffith University Queensland College of Art (Graduating July 2019). 
                    </p>
                    <h1 style={styles.h}>What can I do</h1>
                    <p style={styles.p}>I love designing funky typefaces and logos and am passionate about all things Design. 
                    </p>
                    <h1 style={styles.h}>I am looking for work</h1>
                    <p style={styles.p}>I’m currently on the hunt for a position as an intern or Junior Designer. 
                    </p>
                    <h1 style={styles.h}>Drop me a line</h1>
                    <p className="no-blue-link"style={styles.p}>Contact me at <a href="mailto:ongheen@gmail.com">ongheen@gmail.com</a> or on <a href="tel:0456727784">0456727784</a> for work enquiries or just to say hello 
                    </p>
                </div>
            </div>
        )
    }
}
export default About;