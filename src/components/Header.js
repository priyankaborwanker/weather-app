import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="relative flex flex-wrap items-start justify-start px-2 py-3 bg-white bg-opacity-25 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <h1 className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">~FORECAST~</h1>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;



