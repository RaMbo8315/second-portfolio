import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

export default class landing extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentWillMount() {
        var app = document.getElementById('app')
        app.style.overflow = 'hidden'
    }

    render() {
        return (
            <div id='Landing'>
                <Link to="/About">
                    <div className="pulsatingCircle">
                        <span className="firstCircle">
                            <p className='text'>About</p>
                        </span>
                        <span className="secondCircle"></span>
                        <span className="thirdCircle"></span>
                    </div>
                </Link>
            </div>
        )
    }
}

