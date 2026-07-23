import './animations.css';

import { cloneElement } from 'react';

function Animate({children, delay="0ms", duration="400ms", type="fade-up"})
{
        return cloneElement(children, {
                className: `${children.props.className ?? ""} ${type}`,
                style : {
                                ...children.props.style,
                                "--animation-duration": `${duration}`,
                                "--animation-delay": `${delay}`
                        }
        });
}

export default Animate;