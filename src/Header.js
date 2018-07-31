import React from 'react';

const Header = (props) => (   //////stateless function. Faster and easier to work with. Used when the function only returns a regular render function
    
        <div className='header'>
           <header className='container'>
           <h1 className='header__title'>{props.title}</h1>
            {props.subtitle &&  <h2 className='header__subtitle'>{props.subtitle}</h2>}   
            </header>
        </div>
        
);


Header.defaultProps = {      ///// this is gonna set default values to what ever you want
    title: 'Indecision App',     
    subtitle: 'Put your life in the hands of a computer'
};

export default Header;