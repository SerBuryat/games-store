import { useEffect, useState } from 'react';
import "../styles/components/counter.css";

export default function Counter({ children, count: initialCount }) {
    const [count, setCount] = useState(initialCount);
    const [data, setData] = useState("some json response text here...");
    const subtract = () => setCount((i) => i - 1);
    const add = async () => setCount((i) => i + 1)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${count}`)
            const newData = await response.json()
            setData(JSON.stringify(newData))
        };

        fetchData();

        console.log("Updated!")

        if (count === 10)
            return () => setCount(1)

    }, [count])

    return (
        <>
            <div className="counter">
                <button onClick={subtract}>-</button>
                <pre>{count}</pre>
                <button onClick={add}>+</button>
                <div> {data} </div>
            </div>
            <div className="counter-message">{children}!</div>
        </>
    );
}