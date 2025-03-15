import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(DEFAULT_COLOR);

    function updateSelectedColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="colors" as={Row}>
                <Form.Label column>Select a Color</Form.Label>
                <div>
                    {COLORS.map((color: string) => (
                        <Form.Check
                            inline
                            style={{ backgroundColor: color }}
                            type="radio"
                            key={color}
                            label={color}
                            name="color_options"
                            onChange={updateSelectedColor}
                            value={color}
                            checked={selectedColor === color}
                        ></Form.Check>
                    ))}
                </div>
            </Form.Group>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
