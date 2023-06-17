import { useState } from "react";
import SignupIllustration from '../../illustrations/Signup.png';
import { FilledButton, LinkButton } from "../Buttons";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="login-component-container">
            <div className="section-container">
                <section className="illustration-container">
                    <img src={SignupIllustration} alt="" />
                </section>
                <section className="form-container">
                    <form>
                        <h2 className="title">Sign up</h2>
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
                        <FilledButton buttonStyle='filled-button-large' buttonText='Create account' />
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.2vw'}}>
                            <hr />
                            <span style={{textAlign: "center"}}>Already have an account? <LinkButton buttonText='Sign in' buttonLink='/login' /></span>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Register;