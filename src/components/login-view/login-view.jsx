import { useState } from "react";
import { Button, Form, Row, Col, Container, CardGroup, Card } from "react-bootstrap/";


export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // validation of user login
    const handleSubmit = (event) => {
        // prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();

        const data = {
            username,
            password
        };

        fetch("https://myflix90.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Login response:", data);
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("token", data.token);
                    onLoggedIn(data.user, data.token);
                } else {
                    alert("No such user");
                }
            })
            .catch((e) => {
                alert("Something went wrong");
            });
    };

    // login form with submit button
    // handleSubmit is the callback of onSubmit, tells the login API to validate user and password
    return (
        <Card className="mt-2 mb-3">
            <Card.Body>
                <Card.Title >Log in</Card.Title>
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
                        />
                    </Form.Group>
                    <Button className="button-primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}; 