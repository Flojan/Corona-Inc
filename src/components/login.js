import React, { useState } from "react";

class login {
    /*
    const [log, setLog] = useState(False);
    checkLogin = () => {
        setLog(True)
    } */

    render() {
        return(
            <div>
                <form >
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="DaniWiese@example.com"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your Password"
                        required
                    />
                    <button type="submit">Login</button>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default login