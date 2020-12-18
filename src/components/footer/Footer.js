import React from 'react'
import SVGFlower from '../icons/SVGFlower';
import SVGEgg from '../icons/SVGEgg';
import SVGInstagram from '../icons/SVGInstagram';
import SVGFacebook from '../icons/SVGFacebook';
import SVGLinkedin from '../icons/SVGLinkedin';
import FooterNetworksLink from './FooterNetworksLink';
import FooterHobbiesItem from './FooterHobbiesItem';
import BackgroundImage from '../../assets/bici1.jpg';

const Footer = () => {
    return (
        /* Sección de Pie de Página */
        <footer className="footer" id="footer">

            <div className="footer__image">
                <img src={BackgroundImage} alt="Not Found" />
            </div>

            <div className="footer__description">
                <h3>Descripción</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius, obcaecati culpa consequuntur nostrumquasi.</p>
            </div>

            <div className="footer__hobbies">
                <h3>Intereses</h3>
                <div className="footer__hobbies__icons">

                    <FooterHobbiesItem text='Plantas'>
                        <SVGFlower size={16} />
                    </FooterHobbiesItem>

                    <FooterHobbiesItem text='Plantas'>
                        <SVGEgg size={16} />
                    </FooterHobbiesItem>

                </div>
            </div>

            <div className="footer__networks">
                <h3>RRSS</h3>
                <div className="footer__networks__item">

                    <FooterNetworksLink target="_blank" href="https://www.facebook.com/">
                        <SVGFacebook size={20} />
                    </FooterNetworksLink>

                    <FooterNetworksLink target="_blank" href="https://www.linkedin.com/">
                        <SVGLinkedin size={20} />
                    </FooterNetworksLink>

                    <FooterNetworksLink target="_blank" href="https://www.instagram.com/">
                        <SVGInstagram size={20} />
                    </FooterNetworksLink>

                </div>
            </div>

        </footer>
    )
}

export default Footer
