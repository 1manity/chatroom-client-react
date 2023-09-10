import {Button, FormControl, FormGroup, Input, InputLabel} from "@mui/material";

export default function Contact() {
    return(
        <div>
            <h1>Contact Form</h1>
            <FormGroup >
                <FormControl>
                    <InputLabel> Full name </InputLabel>
                    <Input />
                </FormControl>
                <Button variant={"contained"} color={"secondary"}>Send</Button>
            </FormGroup>
        </div>
    )
}