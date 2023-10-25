import React from 'react';

const AppWrap = (Component, idName) => function HOC() {
  return (
    <div id={idName}>
      <div>
        <Component />
      </div>
    </div>
  )
}

export default AppWrap