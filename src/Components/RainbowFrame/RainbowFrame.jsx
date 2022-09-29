import React, { useState } from 'react';
import styles from './rainbow.module.scss'

const RainbowFrame = ({colors}) => {
    console.log(colors)
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(50);

    const w = () => {
        setWidth(width + 20 + 'px');
    }


    return (
        <div className={styles.rainbow}>
        {colors.map((color,index) => {
           return <div key={color}
        //    className={styles.rainbow}
           style={{border:`5px solid ${color}`,
            width: `${index * width + 40}px`,
            height: `${height * index + 40}px`,
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}
            >
                hello
            </div>
        })}
     </div>

    );
};

export default RainbowFrame;