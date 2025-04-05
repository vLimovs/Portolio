import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toastr from 'toastr';
interface Modal {
    modal: any,
    setModal: any,
}
const ModalGetInTouch: React.FC<Modal> = ({ modal, setModal }) => {

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
                    setModal(false)
                },
                () => {
                    toastr["error"](" ", "Something went wrong :с");
                },
            );
    };
    return (
        <div className={`modal ${modal && 'active'}`}>
            <form id="form" ref={form} onSubmit={sendEmail} className={`modal__form ${modal && 'active'}`}>
                <i className="fa-solid fa-x" onClick={() => setModal(false)}></i>
                <label>Your name</label>
                <input type="text" name="user_name" placeholder="Your name" required />
                <label>Your email</label>
                <input type="email" name="user_email" placeholder="Your email" required />
                <label>Type a message</label>
                <textarea name="message" title="Please providee your contacts exept email, etc. Telegram" style={{ resize: 'none' }} placeholder="Text..." required />
                <p>Please providee your contacts exept email, etc. Telegram</p>
                <button type="submit" value="Send">Submit</button>
            </form>
        </div>
    )
}

export default ModalGetInTouch