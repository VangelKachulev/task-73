import { useEffect, useState } from "react";

export function Counter() {

    let [counter , setCounter ] = useState(1);

    let myFunction = () => {
        setCounter(counter + 1)

    }
    useEffect(() => {
        document.title = `Count (${counter})`
    }, [counter])
   

    return (
        <button onClick={myFunction}>Count ({counter})</button>
    )



}