import React, {Component} from 'react';
class About extends Component {
    render() {
        const styles = {
            container: {
                color: "#f2f2f2",
                textAlign: "center",
                left: "50%",
                paddingLeft: "calc(1500px - 50vw)",
                marginTop: "2rem",
            },
            h: {
                fontWeight: 100,
                textAlign: "center",
                fontSize: "2.2rem"
            },
            p: {
                fontWeight: 300,
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
                    <img style={styles.face} alt="charlie groves"/>
                    <h1 style={styles.h}>Howdy</h1>
                    <p style={styles.p}>I'm a software developer & designer based in Brisbane, Australia.
                        <br/>
                        I'm currently studying computer science at the University of Queensland
                        (graduate July 2018)</p>
                    <h1 style={styles.h}>What can I do</h1>
                    <p style={styles.p}>I'm an avid programmer with experience ranging from
                        full stack development to embeded systems programming. <br/>I also have a strong
                        background in visual art and love to combine those skills with programming in
                        the form of UI/UX design.
                    </p>
                    <h1 style={styles.h}>I want to work with you</h1>
                    <p style={styles.p}>I am currently looking for internships and part time work in
                        the fields of software engineering, software development, and UI/UX design. 
                    </p>
                    <h1 style={styles.h}>Drop me a line</h1>
                    <p style={styles.p}>Need some help with a software project? Or just want to chat about stuff? Get in touch :) </p>
                    <p style={styles.p}><a href="mailto:charltongroves@gmail.com">charltongroves@gmail.com</a> - <a href="tel:0401001014">0401001014</a></p>
                </div>
            </div>
        )
    }
}
export default About;