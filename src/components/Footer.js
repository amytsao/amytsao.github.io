import React from 'react'
import { FaEnvelopeSquare, FaFacebookF, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="social-icons">
                        <a href="https://www.linkedin.com/in/amy-tsao-aaab51a8/" alt="github"><FaLinkedinIn /></a>
                        <a href="https://github.com/amytsao" alt="github"><FaGithubAlt /></a>
                        <a href="https://www.facebook.com/amy.tsao.9" alt="facebook"><FaFacebookF /></a>
                        <a href="mailto:amy.tsao227@gmail.com" alt="email"><FaEnvelopeSquare/></a>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
