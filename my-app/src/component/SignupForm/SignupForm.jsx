 
// import styles from "./SignupForm.module.css";
import { useState } from 'react';

export default function SignupForm() {

    const [email, setEmail] = useState('my email');
    console.log(email, setEmail);

    return (
                <form autoComplete="off">
                    <label>
                        <span>Почта</span>
                        <input 
                            type="email"
                            name="email"
                            // onChange={handleChange}
                            // value={state.email} 
                            />
                    </label>
                </form>
    );
}



