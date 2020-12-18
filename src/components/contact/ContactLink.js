const ContactLink = ({ href, text, children, target = "_self" }) => {
    return (
        <a href={href} target={target}>
            {children}
            <p>{text}</p>
        </a>
    )
}

export default ContactLink
