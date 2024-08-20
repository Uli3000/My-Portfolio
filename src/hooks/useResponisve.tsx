import { useEffect, useState } from "react";


export const useResponsive = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 768;
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return [windowWidth, breakpoint]
}