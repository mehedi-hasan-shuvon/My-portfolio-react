import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Separator from '../../Common/separater/Separator';
import SocialContact from '../../Common/SocialContact/SocialContact';

import './Contact.css';

import contact_photo from '../../../assets/contact.png';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_yep6wkb', form.current, 'szxsLV0hL9-GCrgT4')
            .then((result) => {

               
                console.log(result.text);
               
            }, (error) => {

            });
        e.target.reset();
    };

    return (
        <div className='contact'>
            <Separator></Separator>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <img className='contact_photo' src={contact_photo} alt="" />
                    <p>Want to get in Touch, Contact me on any of the platform</p>
                    <SocialContact></SocialContact>


                </div>

                <div className='download1'>
                    <div>
                        <p className='say'>Say Something...</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <label>Name: </label>
                                <input type="text" name="from_name" required />
                            </div>
                            <div>
                                <label>Email: </label>
                                <input type="email" name="user_email" required />
                            </div>
                            <div>
                                <label>subject: </label>
                                <input type="text" name="subject" />
                            </div>
                            <div>
                                <label>Message: </label>
                                <textarea name="message" rows="10" />
                            </div>
                            <div>
                                <input className='sending' type="submit" value="Send Email" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;