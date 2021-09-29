import React from 'react';
import './Header.css'

const Header = () => {
    return (
        
        <div className="header">
            <nav class="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand"><i class="fas fa-globe"> </i> CountryBuzz</a>
                    <form>
                <label>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Search" />
                </form>
                </div>
                </nav>
            <h1 className="text-center text-white pt-5 "><i class="fas fa-globe"> </i> <br /> Know about Countries</h1>
            <h4 className="text-center text-info "><i>Here are some informations</i></h4>
            <hr />
        </div>
    );
};

export default Header;