import React from 'react'
import {
    Link
} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

                <a class="navbar-brand" href="#">Logo</a>


                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/feed" className="nav-link">Feed</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/users" className="nav-link">Users</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" className="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/logOut" className="nav-link">LogOut</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
