import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice } from 'react-icons/gi';
import { FaPaw } from 'react-icons/fa';
import { IoIosSnow, IoIosMusicalNotes, IoMdTennisball, IoIosAirplane } from 'react-icons/io';
import { GiKing } from "react-icons/gi";
import { GoBeaker } from "react-icons/go";


export const topics = [
  {
    name:'hygge',
    icon: <IoIosSnow />
  },
  {
    name:'music',
    icon: <IoIosMusicalNotes />
  },
  {
    name: 'coding',
    icon: <BsCode />,
  },
  {
    name: 'comedy',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'Entertainment',
    icon: <GiKing />,
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'science',
    icon: <GoBeaker />,
  },
  {
    name: 'travel',
    icon: <IoIosAirplane />,
  },
  {
    name: 'animals',
    icon: <FaPaw />,
  },
  {
    name: 'sports',
    icon: <IoMdTennisball />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'TikTik for Good','Advertise','Developers','Transparency','TikTik Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]