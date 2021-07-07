import React, {useState} from 'react';

const BoxGen = (props) => {
    const[box, setBox] = useState("");
    const[size, setSize] = useState(2);
    const [boxes] = useState([]);

    const createBox = (e) => {
        e.preventDefault();
        if(e.target.size.value === ""){
            e.target.size.value = 4;
        }
        const newBox = e.target.color.value;
        const newSize = e.target.size.value;
        e.target.color.value = ""
        e.target.size.value = 4;
        setBox(newBox);
        setSize(newSize);
        boxes.push({color: newBox, size: newSize})
    };

    return (
        <div className="main">
            <form onSubmit={createBox}>
                <div>
                    <label>Color </label>
                    <input name="color"/>
                </div>
                <div>
                    <label>Size </label>
                    <input type="number" min="4" name="size"/>
                </div>
                <button>Submit</button>
            </form>
            <div className="flex">
            {
                boxes.map((box) => 
                    <p className="box" style={{backgroundColor: box.color, width: box.size+"em", height: box.size+"em"}}>{box.color}</p>
                )
            }
            </div>
        </div>
    );
}

export default BoxGen;