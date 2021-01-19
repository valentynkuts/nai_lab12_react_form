import React, { useState } from "react";

export default function AddNumForm() {
    let [num, setNum] = useState("");
    let [count, setCount]= useState(0);
    let [avg, setAvg]= useState(0);
    let [sum, setSum]= useState(0);

    const submit = e => {
        e.preventDefault();

        sum += parseInt(num);
        setSum(sum)
        count++;
        setCount(count);
        avg = sum / count;
        setAvg(avg);
    };

    return (
        <form onSubmit={submit}>
            <input
                value={num}
                onChange={event => setNum(event.target.value)}
                type="number"
                placeholder="number..."
                required
            />

            <button>ADD</button>

            <div>Sum : {sum}</div>
            <div>Count : {count}</div>
            <div>Avg : {avg}</div>

        </form>
    );
}