import React,{useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart,Chat,Notifications,UserProfile} from '.'
import { useStateContext } from '../context/ContextProvider'
import NavButton from './NavButton'

const Navbar = () => {
const {setActiveMenu,isClicked,currentColor,handleClick,screenSize,setScreenSize}=useStateContext()

useEffect(()=>{
const handleResize = ()=> setScreenSize(window.innerWidth)
window.addEventListener('resize',handleResize)
handleResize();
return ()=> window.removeEventListener('resize',handleResize)
},[])

useEffect(()=>{
if(screenSize <=900){
  setActiveMenu(false)
}
else {
  setActiveMenu(true)

}
},[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative' >
      <NavButton
      title="Menu"
      color={currentColor}
      icon={<AiOutlineMenu/>}
      customFunc={()=>{setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}}
      />
      <div className='flex' >
        <NavButton
        title="Cart"
        color={currentColor}
        icon={<FiShoppingCart/>}
        customFunc={()=>{handleClick('cart')}}
        />
         <NavButton
        title="Chat"
        color={currentColor}
        dotColor="#03C9D7"
        icon={<BsChatLeft/>}
        customFunc={()=>{handleClick('chat')}}
        />
         <NavButton
        title="Notifications"
        color={currentColor}
        icon={<RiNotification3Line/>}
        customFunc={()=>{handleClick('notification')}}
        />
        <TooltipComponent content='Profile' position='BottomCenter' >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' 
          onClick={()=>handleClick('userProfile')}
          >
            <img className='rounded-full w-8 h-8' src={avatar} alt='ProfilePic' />
            <p>
              <span className='text-gray-400 text-14'>
                Hi,
              </span>
              {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Micheal
              </span>
              </p>
              <MdKeyboardArrowDown
              className='text-gray-400 text-14'
              />
          </div>

        </TooltipComponent>
        {isClicked.cart && <Cart/> }
        {isClicked.chat && <Chat/> }
        {isClicked.notification && <Notifications/> }
        {isClicked.userProfile && <UserProfile/> }

      </div>
    </div>
  )
}

export default Navbar
