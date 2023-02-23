
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please enter values for email and password");
            return;
        }
        const newEntry = { email: email, password: password };
        setAllEntry([newEntry]);
    };


    const navigate = useNavigate();
    function handleClick() {
        navigate("/Home")
    }
    return (
        <div className="container">
            <div className="head">
                <h1 className="title">Login</h1>
            </div>
            <form className="form" onSubmit={submitForm} >
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>

                    <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off" className="form-input" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>



                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

            <div className="entry-list">
                {
                    allEntry.map((curElem) => {
                        return (
                            <div className="entry" key={curElem.email}>
                                <p>{curElem.email}</p>
                                <button onClick={handleClick} className="btn btn-secondary">Join</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Login;
