import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './CboardLogo.css';

import image from '../../assets/images/logo_no_words.svg';

const CboardLogo = () => {

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setShowLogo(true);
  });

  return (
    <CSSTransition
      in={showLogo}
      timeout={5000}
      classNames="transition"
      appear={true}
    >
      <img className="CboardLogo" src={image} alt="Cboard Logo" />
    </CSSTransition>
  );
}

export default CboardLogo;
