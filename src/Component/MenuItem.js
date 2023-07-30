import React from 'react';

const MenuItem = ({ item, isSelected, onItemClick }) => {
  
  const { label, icon: Icon } = item;


    return (
      <div
      onClick={() => onItemClick(label)}
      className={`active:text-black ${isSelected ? 'text-primary border-b-2 border-primary' : ''}`}
    >
        <Icon size={30}></Icon>
         <div className="">
          {label}
         </div>
      </div>

    );
};

export default MenuItem;
