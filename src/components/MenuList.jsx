import React from 'react';
import{ AiOutlineHome, AiOutlineCompass, AiOutlineLineChart} from "react-icons/ai"
const MenuList= [
    {
      id: 1,
      icon: < AiOutlineHome />,
      name: "Home",
    },
    {
      id: 2,
      icon: < AiOutlineLineChart/>,
      name: "Trends",
    },
    {
      id: 3,
      icon:<AiOutlineCompass />,
      name: "Feed",
    },
]
export {MenuList}