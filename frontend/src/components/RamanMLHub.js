import React, { useState } from 'react';
import Preprocess from './Preprocess';
// import Train from './Train';
// import Evaluate from './Evaluate';

const RamanMLHub = () => {
  const [activeTab, setActiveTab] = useState('preprocess');

  const renderTab = () => {
    switch (activeTab) {
      case 'preprocess':
        return <Preprocess />;
      case 'train':
        return <div>Train component placeholder</div>;
      case 'evaluate':
        return <div>Evaluate component placeholder</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="tabs">
        <button
          className={`tab-button ${activeTab === 'preprocess' ? 'active' : ''}`}
          onClick={() => setActiveTab('preprocess')}
        >
          Preprocess
        </button>
        <button
          className={`tab-button ${activeTab === 'train' ? 'active' : ''}`}
          onClick={() => setActiveTab('train')}
        >
          Train
        </button>
        <button
          className={`tab-button ${activeTab === 'evaluate' ? 'active' : ''}`}
          onClick={() => setActiveTab('evaluate')}
        >
          Evaluate
        </button>
      </nav>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default RamanMLHub;


