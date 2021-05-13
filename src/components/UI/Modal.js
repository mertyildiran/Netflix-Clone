import React from 'react';

import Aux from '../../hoc/Aux';
import Backdrop from './Backdrop';

export default function Modal(props) {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(${process.env.IMAGE_POSTER_PATH}${
      props.movie.backdrop_path || props.movie.poster_path
    })`,
  };

  return (
    <Aux>
      <Backdrop show={props.show} toggleBackdrop={props.modalClosed} />
      <div
        style={backgroundStyle}
        className={props.show ? 'modal show' : 'modal hide'}
      >
        {props.children}
      </div>
    </Aux>
  );
}
