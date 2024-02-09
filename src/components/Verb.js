import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, text }) => {
  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div>
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const BoxList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const handleBoxClick = (text) => {
    setCurrentText(text);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Click on boxes to show modal</h1>
      <div className="box" onClick={() => handleBoxClick('Text 1')}>
        Box 1
      </div>
      <div className="box" onClick={() => handleBoxClick('Text 2')}>
        Box 2
      </div>
      <div className="box" onClick={() => handleBoxClick('Text 3')}>
        Box 3
      </div>

      <Modal isOpen={isModalOpen} text={currentText} onClose={handleCloseModal} />
    </div>
  );
};

export default BoxList;