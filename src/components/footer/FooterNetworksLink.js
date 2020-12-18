import React from 'react'

const FooterNetworksLink = ({ href, children }) => {
    return (
        <a href={href}>
            {children}
        </a>
    )
}

export default FooterNetworksLink
