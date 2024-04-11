import React from "react";
import style from "C:/Users/Daria/Desktop/test-react/src/styles/MyInput.module.css"

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={style.MyInput}/>
    );
});

export default MyInput;