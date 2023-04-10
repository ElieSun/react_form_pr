 
// import styles from "./SignupForm.module.css";
import { useState } from 'react';

export default function SignupForm() {

    const [email, setEmail] = useState('my email');

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }; 

    return (
                <form className={styles.form} autoComplete="off">
                    <label className={styles.label}>
                        <span>Почта</span>
                        <input 
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                            value={email} 
                            />
                    </label>
                </form>
    );
}


