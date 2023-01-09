import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from "react-copy-to-clipboard"
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';

const Contact = () => {
    return (
        <main>
            <Mouse/>
            <div className="contact">
                <Navigation/>
                <Logo/>
                <ContactForm/>
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>12 rue Laplace</p>
                            <p>59000 Lille</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0606060606" className="hover">
                                <p 
                                    style={{ cursor : "pointer"}} 
                                    className="clipboard"
                                    onClick={() => alert('Téléphone copié !')} 
                                >
                                        06 06 06 06 06
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="john-doe@mail.com" className="hover">
                                <p 
                                    style={{ cursor : "pointer"}} 
                                    className="clipboard"
                                    onClick={() => alert('Email copié !')} 
                                >
                                       john-doe@mail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork/>
                    <div className="credits">
                        <p>Thomas - 2022</p>
                    </div>
                </div>
                <Buttons left={'/projet-4'}/>
            </div>
        </main>
    );
};

export default Contact;