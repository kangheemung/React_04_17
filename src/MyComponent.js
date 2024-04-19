import React ,{ useEffect,useState }from 'react';
const MyComponent=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("update")
        return()=>{
            console.log('Component')
        };
    },[count]);
    const increment=()=>{
        setCount(count +1);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Inrement</button>

        </div>
    );
};

export default MyComponent;
