import { useState } from "react";

function Dropdown({ selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["Yes", "React", "Vue", "Angular", "Probably not"];
    return(
        <div className="dropdown">
            <div className="title-name">Should you use a dropdown?</div>
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <i class="fa-solid fa-caret-down"></i>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                           onClick={(e) => {
                            setSelected(option);
                            setIsActive(false);
                           }}
                           className="dropdown-item"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;