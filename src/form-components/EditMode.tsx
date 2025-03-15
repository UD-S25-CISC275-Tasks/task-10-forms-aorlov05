import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditting, setEditting] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditting(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={isEditting}
                    onChange={updateEditMode}
                />
            </Form.Group>
            {!isEditting ?
                <div>
                    <p>
                        {name}{" "}
                        {isStudent ? " is a student" : "is not a student"}
                    </p>
                </div>
            :   <div>
                    <Form.Group>
                        <Form.Label>Enter name: </Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        ></Form.Control>
                        <Form.Check
                            type="checkbox"
                            id="student-check"
                            checked={isStudent}
                            label="Are you a student?"
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setIsStudent(event.target.checked);
                            }}
                        />
                        <Form.Label htmlFor="student-check">Student</Form.Label>
                    </Form.Group>
                </div>
            }
        </div>
    );
}
