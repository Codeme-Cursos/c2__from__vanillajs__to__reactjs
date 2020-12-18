import SVGEmail from "../icons/SVGEmail"
import SVGFile from "../icons/SVGFile"
import SVGPhone from "../icons/SVGPhone"
import ContactLink from "./ContactLink"

const Contact = () => {
    return (
        /* Sección de Contacto */
        <div className="contact" id="contact">
            <div className="contact__title">
                <h1>Datos de Contacto</h1>
            </div>
            <div className="contact__data">

                <ContactLink href="" text="Email">
                    <SVGEmail size="16" />
                </ContactLink>

                <ContactLink href="" text="Teléfono">
                    <SVGPhone size="16" />
                </ContactLink>

                <ContactLink href="" text="Curriculum Vitae">
                    <SVGFile size="16" />
                </ContactLink>

            </div>
        </div>
    )
}

export default Contact
