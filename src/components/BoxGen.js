import React, {useState} from 'react';

const BoxGen = (props) => {
    const[box, setBox] = useState("");
    const [boxes, setBoxes] = useState([]);

    const createBox = (e) => {
        e.preventDefault();
        const newBox = e.target.color.value;
        setBox(newBox);
        boxes.push(newBox)
    };

    return (
        <div className="main">
            <form onSubmit={createBox}>
                <div>
                    <label>Color </label>
                    <input name="color"/>
                </div>
                <button>Submit</button>
            </form>
            <div className="flex">
            {
                boxes.map((box) => 
                    <p className="box" style={{backgroundColor: box}}>{box}</p>
                )
            }
            </div>
        </div>
    );
}

export default BoxGen;