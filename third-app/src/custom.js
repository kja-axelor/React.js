import {useState} from "react";
function useCustomCounter(){
    const [count,setcount] = useState(0);
    const [count1,setcount1] = useState(0);
    const handleclk = ()=>{
        setcount(count + 1);
    };
    return{
        count,
        handleclk
    };
}
export default useCustomCounter;