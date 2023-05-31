import { useState } from "react";
import { FilledButton, LinkButton } from "./Buttons";
import '../styles/components.css';
import LoginIllustration from '../illustrations/Login.png';
import Modal from "./Modals";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClose = () => {
        setIsOpen(false);
      };

    const handleSubmit = () => {
        setIsOpen(true);
    };

    return(
        <div className="login-component-container">
            <div className="section-container">
                <section className="illustration-container">
                    <img src={LoginIllustration} alt="" />
                </section>
                <section className="form-container">
                    <form>
                        <h2 className="title">Sign in</h2>
                        <section className="textboxes">
                            <label htmlFor="">
                                Email address:
                                <input className="textbox" type="text" value={email} onChange={(event) => setEmail(event.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={{background: isFocused ? "transparent" : "transparent", color: isFocused ? "black" : "black",}} />
                            </label>
                            <label htmlFor="">
                                Password:
                                <input className="textbox" type="text" value={password} onChange={(event) => setPassword(event.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={{background: isFocused ? "transparent" : "transparent", color: isFocused ? "black" : "black",}} />
                            </label>
                        </section>
                        <FilledButton buttonText='Login' buttonLink='/404' buttonOnClick={handleSubmit} />
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.2vw'}}>
                            <hr />
                            <span style={{textAlign: "center"}}>Don't have an account? <LinkButton buttonText='Sign up' buttonLink='/register' /></span>
                        </div>
                    </form>
                    {isOpen && <Modal isOpen={isOpen} onClose={handleClose} modalTitle='Ei saa' modalText='Here we go!' />}
                </section>
            </div>
        </div>
    );
}

export default Login;