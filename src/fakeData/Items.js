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

     const AllMenuItems = [
            {
              label: 'Beach',
              icon: TbBeach,
            },
            {
              label: 'Windmills',
              icon: GiWindmill,
            },
            {
              label: 'Countryside',
              icon: TbMountain,
            },
            {
              label: 'Pools',
              icon: TbPool,
            },
            {
              label: 'Islands',
              icon: GiIsland,
            },
            {
              label: 'Lake',
              icon: GiBoatFishing,
            },
            {
              label: 'Skiing',
              icon: FaSkiing,
            },
            {
              label: 'Castles',
              icon: GiCastle,
            },
            {
              label: 'Caves',
              icon: GiCaveEntrance,
            },
            {
              label: 'Camping',
              icon: GiForestCamp,
            },
            {
              label: 'Arctic',
              icon: BsSnow,
            },
            {
              label: 'Desert',
              icon: GiCactus,
            },
            {
              label: 'Barns',
              icon: GiBarn,
            },
          ]

export default AllMenuItems