import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("0");
    const requestAsNum: number = parseInt(requestAttempts) || 0;

    function changeRequestAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestAttempts(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Request Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={changeRequestAttempts}
                />
            </Form.Group>
            <p>Attempts: {attempts}</p>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + requestAsNum);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
