import { useState } from "react";
import { Button, Form, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import './signup-view.scss';


export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    // validation of user signup
    const handleSubmit = (event) => {

        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://myflix90.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful");
                window.location.reload();

            } else {
                alert("Signup failed");
            }
        });
    };

    // signup form with submit button
    // handleSubmit is the callback of onSubmit, tells the login API to validate user and password
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label className="bold">Username:</Form.Label>
                <Form.Control
                    className="formControl"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                    placeholder="Enter a username"
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label className="bold">Password:</Form.Label>
                <Form.Control
                    className="formControl"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="8"
                    placeholder="Your Password must be 8 or more characters"
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label className="bold">Email:</Form.Label>
                <Form.Control
                    className="formControl"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email adress"
                />
            </Form.Group>

            <Form.Group controlId="formBirthday">
                <Form.Label className="bold">Birthday:</Form.Label>
                <Form.Control
                    className="formControl"
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </Form.Group>
            <Button className="button-primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};
