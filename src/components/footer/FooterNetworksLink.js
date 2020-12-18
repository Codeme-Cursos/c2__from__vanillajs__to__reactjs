import React from 'react'

const FooterNetworksLink = ({ href, children, target="_self" }) => {
    return (
        <a href={href} target={target}>
            {children}
        </a>
    )
}

export default FooterNetworksLink
