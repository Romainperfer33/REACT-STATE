import { useState } from "react";

const Counter = () => {
const [hasClicked,setHasClicked] = useState(false);


    const handleClick = () => {
        setHasClicked(!hasClicked);
    };

    return (
    <div>
        <p> J'ai 30 pair de chaussure </p>
        {hasClicked && <p>J'ai 0 pair de chaussure</p>}
        <button onClick={handleClick}>Cliquez ici</button>
    </div>
    );
};
export default Counter;  