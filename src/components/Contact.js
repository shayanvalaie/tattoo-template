import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import "../css/contact.css"
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    textField: {
        border: "1px sold white"
    }
});





const Contact = () => {

    const classes = useStyles();

    const form = useRef();
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }, } = useForm();



    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "USERID";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
            },
            userID
        )
        r.target.reset();
    }




    // send email


    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Sent successfully! I will contact you as soon as possible!");
            }).catch(err => console.error(`Something went wrong ${err}`));
    };



    return (


        <form ref={form} onSubmit={handleSubmit(onSubmit)}>


            <Typography sx={{
                textShadow: '1px 1px 2px rgb(0 0 0 / 50%)',
                color: "#6D7070",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',


            }} variant="h3">
                Contact
            </Typography>
            <Typography sx={{
                marginTop: '10px'
            }} variant="h6">{successMessage}</Typography>
            <span className="error-message">

                <p> {errors.name && errors.name.message} </p>
                <p> {errors.email && errors.email.message} </p>
                <p> {errors.subject && errors.subject.message} </p>
                <p> {errors.message && errors.message.message} </p>
            </span>










            <Box>

                <TextField  {
                    ...register("name", {
                        required: "* Please enter your name",
                        maxLength: {
                            value: 20,
                            message: "Name must not be longer than 20 characters",
                        }
                    })
                } fullWidth={true} id="standard-basic" label="Name" name="name" variant="standard" />

                <br />
                <TextField  {
                    ...register("email", {
                        required: "* Please enter a valid email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "* Invalid Email"
                        }
                    })
                } fullWidth={true} id="standard-basic" label="Email" name="email" variant="standard" />

                <br />
                <TextField  {
                    ...register("subject", {
                        required: "* Please enter a subject",
                        maxLength: {
                            value: 20,
                            message: "* Subject must not be longer than 20 characters",
                        }
                    })
                } fullWidth={true} id="standard-basic" label="Subject" name='subject' variant="standard" />

            </Box>





            <Box sx={{
                marginTop: 13.2,

            }}>

                <TextField multiline fullWidth={true}
                    minRows={2}
                    maxRows={4} sx={{
                        marginBottom: 2,
                        color: 'white'




                    }} {
                    ...register("message", {
                        required: "* Please enter a message",

                    })
                    } id="standard-basic" label="Message" name='message' variant="standard"
                />




            </Box>



            <Button fullWidth={true}
                type="submit" className='button-shadow' sx={{
                    border: 1,
                    color: '#9A9A9A'





                }} variant="standard">Send</Button>

        </form>



    )
}

export default Contact