import { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
    chart:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const ContextProvider = ({children})=>{
    const [activeMenu,setActiveMenu] = useState(true)
    const [isClicked,setIsClicked] = useState(initialState)
    const [screenSize,setScreenSize] = useState(undefined)
    const [currentColor,setCurrentColor] = useState('#03C9D7')
    const [currentMode,setCurrentMode] = useState('Light')
    const [themeSettings,setThemeSettings] = useState(false)

    
    const handleClick = (clicked)=>{
        setIsClicked({
            ...initialState,[clicked]:true
        })
        }

    const setMode = (mode)=>{
        setCurrentMode(mode)
        localStorage.setItem('themeMode',mode)
    }  
    const setColor = (color)=>{
        setCurrentColor(color)
        localStorage.setItem('colorMode',color)
    }      
    return (
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize,
            handleClick,
            currentColor,
            currentMode,
            setColor,
            setMode,
            themeSettings,
            setThemeSettings
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext)