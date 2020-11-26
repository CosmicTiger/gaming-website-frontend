import React from 'react';
import Topbar from "../Topbar";
import Navbar from "../Navbar";

export default function Header() {
    return (
        <div className="Header">
            <Topbar/>
            <Navbar />
        </div>
    );
}
