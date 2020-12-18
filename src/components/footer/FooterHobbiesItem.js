import React from 'react'

const FooterHobbiesItem = ({ text, children }) => {
    return (
        <span>
            {children}
            <p>{text}</p>
        </span>
    )
}

export default FooterHobbiesItem
