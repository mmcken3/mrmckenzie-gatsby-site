import React from 'react'
import PropTypes from 'prop-types'

import mitchell from '../images/mitchell.png'

if (process.env.IS_BROWSER) {
  require('whatwg-fetch');
}

class Main extends React.Component {

  handleFormSubmit(event) {
    var fname = document.getElementById("myForm").elements.namedItem("fullname").value;
    var ead = document.getElementById("myForm").elements.namedItem("email").value;
    var tmessage = document.getElementById("myForm").elements.namedItem("message").value;

    if (process.env.IS_BROWSER) {
      window.fetch('http://68.183.25.114:3000/v1/send/text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: fname,
          login: ead,
          message: tmessage,
        })
      })
    } else {
      fetch('http://68.183.25.114:3000/v1/send/text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: fname,
          login: ead,
          message: tmessage,
        })
      })
    }
    event.preventDefault();
    alert("Contact form was submitted!")
  }

  render() {
    
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={mitchell} alt="" /></span>
          <p>Currently I am a back end engineer at <a href="https://www.redventures.com/">Red Ventures</a>. I am working to maintain large APIs written in GoLang along with building out full scale data pipelines. This work is intriguing to me and I want to continue working with GoLang, APIs, and data engineering issues.</p>
          <p>My Computer Science, BS, degree came from Clemson University in 2018. If you want to see the resume with descriptions of previous jobs and internships you can check all of that out on <a href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/">LinkedIn</a>. Some of my side projects, and other websites that I have worked on are up on my <a href="https://github.com/mmcken3/">GitHub</a>. A few of the things I like to play with as side projects are web crawlers, metric collectors/pipelines, tools to help development, and websites to keep up with front end tech.</p>
          {close}
        </article>

        {/* <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h4>Recent Roles</h4>
          <ul>
            <li>Associate Engineer, Red Ventures</li>
            <li>Mobile Development Intern, Clemson University</li>
            <li>Solutions Technology Enablement Intern, Intel Corp.</li>
          </ul>
          <p>If you want to see the resume with descriptions of previous jobs and internships you can check all of that out on <a href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/">LinkedIn</a>. And if you would like to see any of the projects I play with in my spare time then those can be found on my <a href="https://github.com/mmcken3/">GitHub</a>. A few examples of the projects I have GitHub are this website, hackathon projects, demos, an API to integrate with GMail and <a href="https://www.twilio.com/">Twilio</a>.</p>
          <h5>A few other projects I have worked on:</h5>
          <ul>
            <li><a href="https://github.com/intel/Board-Instrumentation-Framework">Intel BIFF Framework</a></li>
            <li><a href="https://mobile.sites.clemson.edu/">Clemson Mobile App & Marketing Site For The App</a></li>
            <li><a href="https://github.com/mmcken3/sidecar-demo">Demo on DataDog Sidecar in Go</a></li>
          </ul>
          {close}
        </article> */}

        <article id="about" className={`${this.props.article === 'misc' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Misc</h2>
          <p>I am a software engineer by day, but in my free time I like to adventure in the outdoors and travel. There are many hobbies I have had through the years that I still enjoy making time for like sailing, scuba diving, and hiking. If you are interested in seeing some photos from my adventures sailing the Atlantic Ocean, visiting the carribean with my family, or hiking throughout the US, then go check out my <a href="https://www.flickr.com/photos/163562214@N08/" target="_blank" rel="noopener noreferrer">Flickr Page</a>.</p>
          {/* <p>Here is one of the photos from my travels:</p> */}
          <a data-flickr-embed="true"  href="https://www.flickr.com/photos/163562214@N08/46814256901/in/album-72157675770234127/" title="BVI Coastline" target="_blank" rel="noopener noreferrer">
          <span className="flickrimage main">
          <img src="https://farm8.staticflickr.com/7906/46814256901_c73514b815_z.jpg" alt="BVI Coastline"></img>
          </span>
          </a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form id="myForm" method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="fullname" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" onClick={this.handleFormSubmit}/></li>
              <li><input type="submit" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/mit_mckenzie" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/mmcken3/" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.flickr.com/photos/163562214@N08/" target="_blank" rel="noopener noreferrer" className="icon fa-flickr"><span className="label">Flickr</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main