import { useState } from "react";

const Counter = () => {

const [count, setCount] = useState(0);
const [isLoading, setIsLoading] = useState(false);

const change = () => {
    setIsLoading(true);
    setCount(count + 1);
}

return(
    <div>
         { isLoading ? <p> {count} Loading ... </p> : <button onClick={change}>{count} Load</button>}
    </div>
)

}

export default Counter