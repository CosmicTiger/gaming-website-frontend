import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const [ windowSize, setWindowSize ] = useState({
        height: undefined,
        width: undefined
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        const trigger = () => window.removeEventListener("resize", handleResize);
        
        return trigger;
    }, []);

    return windowSize;
}

export default useWindowSize
