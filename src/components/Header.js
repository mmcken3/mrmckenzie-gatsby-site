import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-laptop"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Mitchell McKenzie</h1>
                <p>Back End Software Engineer, Charlotte NC</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('misc')}}>Misc</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
