import { useState } from "react";
import '../../styles/components.css';
import { FilledButton, LinkButton } from "../Buttons";
import LoginIllustration from '../../illustrations/Login.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isFocused, setIsFocused] = useState(false);

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
                                <input className="textbox" type="password" value={password} onChange={(event) => setPassword(event.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={{background: isFocused ? "transparent" : "transparent", color: isFocused ? "black" : "black",}} />
                            </label>
                        </section>
                        <Link to='/courses'><FilledButton buttonStyle='filled-button-large' buttonText='Login' /></Link>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.2vw'}}>
                            <hr />
                            <span style={{textAlign: "center"}}>Don't have an account? <LinkButton buttonText='Sign up' buttonLink='/register' /></span>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Login;









// import { useState } from "react";
// import { FilledButton, LinkButton } from "./Buttons";
// import '../styles/components.css';
// import LoginIllustration from '../illustrations/Login.png';
// import axios from "axios";

// const Login = () => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [isFocused, setIsFocused] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/users/login', { email, password });
//             localStorage.setItem('token', response.data.token);
//             window.location.href = '/designpath'; // redirect user to the courses page on successful login
//         } catch (error) {
//             console.error(error);
//             alert('Invalid email or password');
//         }
//     };

//     return(
//         <div className="login-component-container">
//             <div className="section-container">
//                 <section className="illustration-container">
//                     <img src={LoginIllustration} alt="" />
//                 </section>
//                 <section className="form-container">
//                     <form>
//                         <h2 className="title">Sign in</h2>
//                         <section className="textboxes">
//                             <label htmlFor="">
//                                 Email address:
//                                 <input className="textbox" type="text" value={email} onChange={(event) => setEmail(event.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={{background: isFocused ? "transparent" : "transparent", color: isFocused ? "black" : "black",}} />
//                             </label>
//                             <label htmlFor="">
//                                 Password:
//                                 <input className="textbox" type="password" value={password} onChange={(event) => setPassword(event.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={{background: isFocused ? "transparent" : "transparent", color: isFocused ? "black" : "black",}} />
//                             </label>
//                         </section>
//                         <FilledButton buttonText='Login' buttonLink='' buttonOnClick={handleSubmit} />
//                         <div style={{display: 'flex', flexDirection: 'column', gap: '1.2vw'}}>
//                             <hr />
//                             <span style={{textAlign: "center"}}>Don't have an account? <LinkButton buttonText='Sign up' buttonLink='/register' /></span>
//                         </div>
//                     </form>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default Login;