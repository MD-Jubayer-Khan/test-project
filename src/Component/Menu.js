import React from 'react';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import MenuItem from './MenuItem';

const Menu = () => {

 const AllMenuItems = [
        {
          label: 'Beach',
          icon: TbBeach,
          description: 'This property is close to the beach!',
        },
        {
          label: 'Windmills',
          icon: GiWindmill,
          description: 'This property is has windmills!',
        },
        {
          label: 'Countryside',
          icon: TbMountain,
          description: 'This property is in the countryside!'
        },
        {
          label: 'Pools',
          icon: TbPool,
          description: 'This is property has a beautiful pool!'
        },
        {
          label: 'Islands',
          icon: GiIsland,
          description: 'This property is on an island!'
        },
        {
          label: 'Lake',
          icon: GiBoatFishing,
          description: 'This property is near a lake!'
        },
        {
          label: 'Skiing',
          icon: FaSkiing,
          description: 'This property has skiing activies!'
        },
        {
          label: 'Castles',
          icon: GiCastle,
          description: 'This property is an ancient castle!'
        },
        {
          label: 'Caves',
          icon: GiCaveEntrance,
          description: 'This property is in a spooky cave!'
        },
        {
          label: 'Camping',
          icon: GiForestCamp,
          description: 'This property offers camping activities!'
        },
        {
          label: 'Arctic',
          icon: BsSnow,
          description: 'This property is in arctic environment!'
        },
        {
          label: 'Desert',
          icon: GiCactus,
          description: 'This property is in the desert!'
        },
        {
          label: 'Barns',
          icon: GiBarn,
          description: 'This property is in a barn!'
        },
      ]
      
    return (
      <div
        className="
          pt-10
          flex 
          flex-row 
          items-center 
          justify-evenly
          bg-[#ffffff]
          px-20
          py-4
          text-black-600
        "
      >
        {AllMenuItems.map((item) => (
          <MenuItem
            key={item.label}
            item ={item}
            // selected={=== item.label}
          />
        ))}
    </div>
    );
};

export default Menu;