import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://twitter.com/mit_mckenzie" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/mmcken3/" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.flickr.com/photos/163562214@N08/" target="_blank" className="icon fa-flickr"><span className="label">Flickr</span></a></li>
        </ul>
        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
        <p className="copyright"> Released under <a href="https://html5up.net/license">Creative Commons</a>. Changes made by Mitchell Mckenzie.</p> 
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
