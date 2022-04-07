import React from 'react';

import HashLoader from 'react-spinners/ClipLoader';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <HashLoader size={50} />
  </div>
);
