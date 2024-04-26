import React from 'react';
import style from './Popup.module.scss';

function Popup({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={style.popupOverlay} onClick={onClose}>
      <div className={style.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
