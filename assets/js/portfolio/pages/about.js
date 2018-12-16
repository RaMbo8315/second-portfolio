import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import Typing from 'react-typing-animation';

export default class about extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentWillMount() {
        var app = document.getElementById('app')
        app.style.overflow = 'visible'
    }

    switchExp = () => {
        var expTitle = document.getElementsByClassName('exp')[0];
        var famTitle = document.getElementsByClassName('fam')[0];
        var bars = document.getElementsByClassName('bars-group')[0];
        var familiar = document.getElementsByClassName('familiar')[0];
        if (bars.style.display = 'none') {
            famTitle.classList.remove("active");
            familiar.style.display = 'none';
            familiar.style.opacity = 0;
            bars.style.display = 'grid';
            bars.style.opacity = 1;
            expTitle.classList.add("active");
        } else {
            famTitle.classList.add("active");
            familiar.style.display = 'grid';
            familiar.style.opacity = 1;
            expTitle.classList.remove("active");
            bars.style.display = 'none';
            bars.style.opacity = 0;
        }
    }

    switchFam = () => {
        var expTitle = document.getElementsByClassName('exp')[0];
        var famTitle = document.getElementsByClassName('fam')[0];
        var bars = document.getElementsByClassName('bars-group')[0];
        var familiar = document.getElementsByClassName('familiar')[0];
        if (familiar.style.display = 'none') {
            bars.style.display = 'none';
            bars.style.opacity = 0;
            expTitle.classList.remove("active");
            famTitle.classList.add("active");
            familiar.style.display = 'grid'
            familiar.style.opacity = 1
        } else {
            expTitle.classList.add("active");
            bars.style.display = 'grid';
            bars.style.opacity = 1;
            famTitle.classList.remove("active");
            familiar.style.display = 'none'
            familiar.style.opacity = 0
        }
    }

    Typing = () => (
        <Typing hideCursor={true} startDelay={5000} speed={50}>
            <div>
                This a paragraph about me in my website come
                what i've been up to in my time as a developer.
                Let me know if you like it.
                </div>
        </Typing>
    );

    render() {
        return (
            <div id='About'>
                <div className='container'>
                    <div className='layout'>
                        <div className="weather">
                            {/* <div id="rays" className="rays"></div>
                            <div id="sun" className="sun"></div> */}
                            <div id="cloud" className="cloud">
                                <div className='menu'>
                                    <div className='menu-btn'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sunny"></div>
                        <div className='logo'>
                            <Link to="/">
                                <img src="/img/logo.png" />
                            </Link>
                        </div>
                        {/* <div className='menu'>
                            <div className='menu-btn'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div> */}
                        <div className='me'>
                            <div className='info'>
                                <div id='para'>
                                    {this.Typing()}
                                </div>
                            </div>
                            <div className='image'>
                                <img src='/img/me1.png' />
                            </div>
                        </div>
                        <div className='exp-section'>
                            <div className='exp-header'>
                                <h1 className='exp active' onClick={this.switchExp}>Experience</h1>
                                <h1>/</h1>
                                <h1 className='fam' onClick={this.switchFam}>Familiar</h1>
                            </div>
                            <div className='familiar'>
                                <div className="fam-img">
                                    <img src='/img/jquery-128.png' />
                                </div>
                                <div className="fam-img">
                                    <img src='/img/git-128.png' />
                                </div>
                                <div className="fam-img">
                                    <img src='/img/linux-128.png' />
                                </div>
                                <div className="fam-img">
                                    <img src='/img/seq-128.png' />
                                </div>
                                <div className="fam-img">
                                    <img src='/img/word-128.png' />
                                </div>
                                <div className="fam-img">
                                    <img src='/img/heroku-128.png' />
                                </div>
                                <div className="fam-img">
                                    <img src='/img/boot-128.png' />
                                </div>
                                <div className="fam-img">
                                    <img src='/img/sass-128.png' />
                                </div>
                            </div>
                            <div className='bars-group'>
                                <div className="bars">
                                    <div id="html" className='flex-space'>
                                        <div className="top">
                                            <div className="infobox">
                                                <img src='/img/html5-64.png' />
                                                <p>HTML</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                        </div>
                                        <div className="percent">
                                            {/* <p>80%</p> */}
                                        </div>
                                    </div>
                                    <div id="css" className='flex-space'>
                                        <div className="top">
                                            <div className="infobox">
                                                <img src='/img/css-64.png' />
                                                <p>CSS</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                        </div>
                                        <div className="percent">
                                            {/* <p>70%</p> */}
                                        </div>
                                    </div>
                                    <div id="javascript" className='flex-space'>
                                        <div className="top">
                                            <div className="infobox">
                                                <img src='/img/javascript-64.png' />
                                                <p>JS</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                        </div>
                                        <div className="percent">
                                            {/* <p>60%</p> */}
                                        </div>
                                    </div>
                                    <div id="node" className='flex-space'>
                                        <div className="top">
                                            <div className="infobox">
                                                <img src='/img/nodejs-64.png' />
                                                <p>Node</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                        </div>
                                        <div className="percent">
                                            {/* <p>70%</p> */}
                                        </div>
                                    </div>
                                    <div id="react" className='flex-space'>
                                        <div className="top">
                                            <div className="infobox">
                                                <img src='/img/react-64.png' />
                                                <p>React</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                        </div>
                                        <div className="percent">
                                            {/* <p>50%</p> */}
                                        </div>
                                    </div>
                                    <div id="mysql" className='flex-space'>
                                        <div className="top">
                                            <div className="infobox">
                                                <img src='/img/mysql.png' />
                                                <p>MySQL</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                        </div>
                                        <div className="percent">
                                            {/* <p>35%</p> */}
                                        </div>
                                    </div>
                                    <div id="mongo" className='flex-space'>
                                        <div className="top">
                                            <div className="infobox">
                                                <img src='/img/mongo-64.png' />
                                                <p>Mongo</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                        </div>
                                        <div className="percent">
                                            {/* <p>45%</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='percent-line'>
                                    <div className='percent-group'>
                                        <div className='top-group'>
                                            <div className='percent-line-top'>
                                                <div className='top-line'></div>
                                                <p className='percent'>100</p>
                                            </div>
                                        </div>
                                        <div className='percent-line-middle'>
                                            <div className='middle-line'></div>
                                            <p className='percent'>50</p>
                                        </div>
                                        <div className='bottom-group'>
                                            <div className='percent-line-bottom'>
                                                <div className='bottom-line'></div>
                                                <p className='percent'>0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='line'>
                                        <div className='line-body'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

