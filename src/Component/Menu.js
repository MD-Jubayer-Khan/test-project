import React, { useState } from 'react';
import MenuItem from './MenuItem';
import AllMenuItems from '../fakeData/Items'

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

 

      const handleItemClick = (label) => {
        setSelectedItem((prevSelectedItem) => (prevSelectedItem === label ? null : label));
      };

    return (
      <div
        className="
          pt-10
          flex 
          flex-row 
          items-center 
          justify-evenly
          bg-[#ffffff]
          px-18
          pl-8
          text-black-600
          border-b-2 border-gray
        "
      >
        {AllMenuItems.map((item, index) => (
          <MenuItem
          key={index}
          item={item}
          isSelected={selectedItem === item.label}
          onItemClick={handleItemClick}
          />
        ))}
    </div>
    );
};

export default Menu;