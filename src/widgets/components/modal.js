import React from 'react';
import { Link } from 'react-router-dom';

import './modal.css';

function Modal(props) {
  return (
    <Link
      to={{
        pathname:'/videos',
      }}
    >
      <div className="Modal">
        {props.children}
        <button
          onClick={props.handleClick}
          className="Modal-close"
        />
      </div>
    </Link>
  )
}

export default Modal;
