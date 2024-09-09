import { useState, useEffect } from "react"

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
    const handleWindowSizeChange = () => {
      setScreenWidth(window.innerWidth)
    }
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
      }
    }, [])
  
    return screenWidth
  }

  /*
  referência:
  https://dev.to/lazarocontato/criando-custom-hook-para-capturar-o-width-da-tela-em-reactjs-36m7

  */