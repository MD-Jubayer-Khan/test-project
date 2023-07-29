import React from 'react';

const MenuItem = ({item}) => {
    const {label,
       icon: Icon} = item
    return (
      <div>
        <Icon size={30}></Icon>
         <div className="">
          {label}
         </div>
      </div>

    );
};

export default MenuItem;
