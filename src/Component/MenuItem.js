import React, { useState } from 'react';

const MenuItem = ({item}) => {
  
  
  const [selected, setSelected] = useState('')
  
    const {label, icon: Icon} = item
console.log(selected, label);
    const handleClicked =()=>{
      setSelected(label)
     if(selected === label && selected){
      setSelected('')
     }

    }


    return (
      <div onClick={handleClicked}  className={`active:text-black active-item ${selected ? 'text-primary underline' : ''}`}>
        <Icon size={30}></Icon>
         <div className="">
          {label}
         </div>
      </div>

    );
};

export default MenuItem;
