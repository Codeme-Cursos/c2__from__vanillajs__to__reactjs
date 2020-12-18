const ContactLink = ({ href, text, children }) => {
    return (
        <a href={href}>
            {children}
            <p>{text}</p>
        </a>
    )
}

export default ContactLink
