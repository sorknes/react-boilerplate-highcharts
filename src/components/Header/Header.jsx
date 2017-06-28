/*  ------------------------------------------------
./src/components/Header.jsx
---------------------------------------------------- */


import React from 'react';


const Header = (props) => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="page-title">{props.headline}</h1>
        <p>digital playground</p>
      </header>
    </div>
  )
}

// export components
export default Header;
