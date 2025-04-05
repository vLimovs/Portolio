import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toastr from 'toastr';

const Footer = () => {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": undefined,
        "showDuration": 300,
        "hideDuration": 1000,
        "timeOut": 3000,
        "extendedTimeOut": 1000,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_ov51aww', 'template_qhif8qh', form.current, {
                publicKey: '5U5PEflivOqyvVx2d',
            })
            .then(
                () => {
                    toastr["success"](" ", "The message has sent successfully !");
                },
                () => {
                    toastr["error"](" ", "Something went wrong :с");
                },
            );
    };

    return (
        <footer className="footer">
            <div className="container">
                <div id="footer" className="footer__inner">
                    <h1>Contact</h1>
                    <p>Frontend Developer with 1 year of hands-on experience in building responsive, dynamic, and user-friendly web applications. Skilled in crafting modern interfaces using HTML, CSS, SCSS, and JavaScript, with expertise in React.js, Next.js, and TypeScript to develop scalable and high-performance solutions.</p>
                    <a href="mailto:vlimovs@icloud.com"><img src="mail.svg" alt="" />vlimovs@icloud.com</a>
                </div>
                <form id="form" ref={form} onSubmit={sendEmail} className="footer__form">
                    <label>Your name</label>
                    <input type="text" name="user_name" placeholder="Your name" required />
                    <label>Your email</label>
                    <input type="email" name="user_email" placeholder="Your email" required />
                    <label>Type a message</label>
                    <textarea name="message" title="Please don't forgot type your contacts exept email, etc. Telegram" style={{ resize: 'none' }} placeholder="Text..." required />
                    <button type="submit" value="Send">Submit</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
