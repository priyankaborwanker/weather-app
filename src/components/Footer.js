import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <nav className="absolute flex flex-wrap inset-x-0 bottom-0 h-16 items-start justify-center px-2 py-3 bg-white bg-opacity-25">
            <div className="text-white">
                <div className="flex items-center justify-center text-0.25xl mt-0">
                    <h1>Checkout my <a className="hover:underline font-bold" href="">Github</a></h1>
                </div>
                <div className="flex items-center justify-center text-0.25xl">
                    <h1>Photo by Mo from Pexels</h1>
                </div>
            </div>
            </nav>
        )
    }
}

export default Footer;
