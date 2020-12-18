import SVGEmail from "../icons/SVGEmail"
import SVGFile from "../icons/SVGFile"
import SVGPhone from "../icons/SVGPhone"
import ContactLink from "./ContactLink"
import CV from "../../assets/cv.pdf"

const Contact = () => {
    return (
        /* Sección de Contacto */
        <div className="contact" id="contact">
            <div className="contact__title">
                <h1>Datos de Contacto</h1>
            </div>
            <div className="contact__data">

                <ContactLink href="mailto:your@email.cl" text="Email">
                    <SVGEmail size="16" />
                </ContactLink>

                <ContactLink href="tel:+5690000000" text="Teléfono">
                    <SVGPhone size="16" />
                </ContactLink>

                <ContactLink target="_blank" href={CV} text="Curriculum Vitae">
                    <SVGFile size="16" />
                </ContactLink>

            </div>
        </div>
    )
}

export default Contact
