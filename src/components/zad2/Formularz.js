import React, { useState, useEffect } from "react";

export default function Formularz() {
    let [val1, setVal1] = useState("");
    let [val2, setVal2] = useState("");
    let [checked, setChecked] = useState(false);
    let [checkedValue, setCheckedValue] = useState("");
    let [selected, setSelected] = useState("");
    let [radio, setRadio] = useState(false);
    let [radioValue, setRadioValue] = useState("");
    let [show, setShow] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem("checkbox-value", checked);
    // });
    //
    // useEffect(() => {
    //     localStorage.setItem("radio", radio);
    // });

    const submit = e => {
        e.preventDefault();
        show = true;
        setShow(show);
        checkedValue = checked ? "checked" : "not checked" ;
        setCheckedValue(checkedValue);
        radioValue = radio ? "set" : "not set" ;
        setRadioValue(radioValue);

    };

    const reset = e => {
        e.preventDefault();
        show = false;
        setShow(show);
        checked = false;
        setChecked(checked);
        checkedValue = checked ? "checked" : "not checked" ;
        setCheckedValue(checkedValue);
        radio = false;
        setRadio(radio);
        radioValue = radio ? "set" : "not set" ;
        setRadioValue(radioValue);
        selected = "Opcja 1";
        setSelected(selected);
        val1 = ""
        setVal1(val1);
        val2 = "";
        setVal2(val2);

    };

    return (
        <>
        <form onSubmit={submit}>
            <input
                value={val1}
                onChange={event => setVal1(event.target.value)}
                type="text"
                placeholder="enter..."
                required
            />
            <br/>
            <input
                value={val2}
                onChange={event => setVal2(event.target.value)}
                type="text"
                placeholder="enter..."
                required
            />
            <br/>

            <input
                type="radio"
                value={radio}
                onChange={() => setRadio(radio => !radio)}
                checked={checked}
            />
            {radio ? "set" : "not set"}
            <br/>

            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value="Opcja 1">Opcja 1</option>
                <option value="Opcja 2">Opcja 2</option>
                <option value="Opcja 3">Opcja 3</option>
            </select>
            <br/>

            <input
                type="checkbox"
                value={checked}
                onChange={() => setChecked(checked => !checked)}
                checked={checked}
            />
            {checked ? "checked" : "not checked"}
            <br/>

            <button>Submit</button>
            <br/>

            <button onClick={reset}>Reset</button>

        </form>
            {
                show &&
                <table className="table">
                    <thead>
                    <tr>
                        <th>Input1</th>
                        <th>Input2</th>
                        <th>radio</th>
                        <th>Select</th>
                        <th>Checkbox</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{val1}</td>
                        <td>{val2}</td>
                        <td>{radioValue}</td>
                        <td>{selected}</td>
                        <td>{checkedValue}</td>
                    </tr>

                    </tbody>
                </table>
            }
            </>


    );
}