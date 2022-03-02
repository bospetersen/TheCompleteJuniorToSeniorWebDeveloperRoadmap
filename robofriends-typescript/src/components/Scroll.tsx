import * as React from 'react';

const Scroll = ({children}:any) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {children}
    </div>
  );
};

export default Scroll;