import React from 'react';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-light header" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Sharenergy</a>
                    <span class="navbar-toggler-icon"></span>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Login</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header