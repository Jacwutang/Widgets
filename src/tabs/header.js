import React, {Component} from "react";

const Header = (props) => {

    const {content,title,onClick} = props;

    return(
      <div className='tab-content'>
        <span onClick={() => {onClick()} }> {title} </span>
        <span> {content} </span>
      </div>
    );

}

export default Header;
