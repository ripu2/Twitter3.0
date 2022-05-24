import React, { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import SideBarCell from './sideBarCell'
import {
  IconContainerBird,
  LowerChild,
  LowerChildProfile,
  MintButton,
  ParentCotainer,
} from './styles'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
// import Modal from 'react-modal'
// import { customStyles } from '../lib/constants'
// import ProfileImageMinter from './profile/mintingModal/ProfileImageMinter'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'

function Sidebar() {
  const [selected, setSelectedd] = useState('')

  return (
    <ParentCotainer>
      <div>
        <IconContainerBird>
          <VscTwitter size={30} />
        </IconContainerBird>
        <SideBarCell
          icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={Boolean(selected === 'Home')}
          setSelected={() => {
            setSelectedd('Home')
          }}
          redirect={'/'}
        />
        <SideBarCell
          icon={selected === 'Explore' ? FaHashtag : BiHash}
          text="Explore"
          isActive={Boolean(selected === 'Explore')}
          setSelected={() => {
            setSelectedd('Explore')
          }}
          redirect={'/explore'}
        />
        <SideBarCell
          icon={selected === 'Notifications' ? FaBell : FiBell}
          text="Notifications"
          isActive={Boolean(selected === 'Notifications')}
          setSelected={() => {
            setSelectedd('Notifications')
          }}
          redirect={'/notifications'}
        />
        <SideBarCell
          icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={Boolean(selected === 'Messages')}
          setSelected={() => {
            setSelectedd('Messages')
          }}
          redirect={'/messages'}
        />
        <SideBarCell
          icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          isActive={Boolean(selected === 'Bookmarks')}
          setSelected={() => {
            setSelectedd('Bookmarks')
          }}
          redirect={'/bookmarks'}
        />
        <SideBarCell
          icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          isActive={Boolean(selected === 'Lists')}
          setSelected={() => {
            setSelectedd('Lists')
          }}
          redirect={'/lists'}
        />
        <SideBarCell
          icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === 'Profile')}
          setSelected={() => {
            setSelectedd('Profile')
          }}
          redirect={'/profile'}
        />
        <SideBarCell icon={CgMoreO} text="More" setSelected={() => {}} />
        <MintButton style={{ backgroundColor: '#1d9bf0' }}>Mint</MintButton>
      </div>
      <LowerChild>
        ripu
        <LowerChildProfile>
          @dwdx...4
          <FiMoreHorizontal />
        </LowerChildProfile>
      </LowerChild>
    </ParentCotainer>
  )
}

export default Sidebar
