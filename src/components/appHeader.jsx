import React from 'react';

const AppHeader = ({resetCountdownList}) => {
  return (
    <div className="header-container container-fluid">
      <i className="fa fa-refresh btn-icon fa-lg"></i>
      <h1 onClick={resetCountdownList} className="appName">countdown</h1>
    </div>
  );
}

export default AppHeader;