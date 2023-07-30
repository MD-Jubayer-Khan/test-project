import React from 'react';

const MenuItem = ({ item, isSelected, onItemClick }) => {
  
  const { label, icon: Icon } = item;


    return (
      <div
      onClick={() => onItemClick(label)}
      className={` ${isSelected ? 'text-primary border-b-2 border-primary' : 'text-[#685f5f]'}`}
    >
        <Icon size={30}></Icon>
         <div className="">
          {label}
         </div>
      </div>

    );
};

export default MenuItem;
