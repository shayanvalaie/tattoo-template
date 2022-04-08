import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GiIcons from 'react-icons/gi'
import * as FiIcons from 'react-icons/fi'



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'

    },

    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'

    },

    {
        title: 'Work',
        path: '/work',
        icon: <GiIcons.GiPencilBrush />,
        cName: 'nav-text'

    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FiIcons.FiMail />,
        cName: 'nav-text'

    },



]