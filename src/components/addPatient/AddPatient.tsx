import React, {useCallback, useContext, useState} from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {StyledBox, WelcomeText, WindowRegistration, Fields} from "./AddPatient.styles";
import {ClinicContext} from "../../context/ClinicContext";
import {PatientApi} from "../../api/PatientApi";

export const AddPatient = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const {currentClinic} = useContext(ClinicContext)
    const PatientRegistration = useCallback(async () => {
        try {
            await PatientApi.register({
                clinicId: currentClinic?.id as 0,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber
            })
        } catch (error: any) {

        }
    },[currentClinic?.id, email, firstName, lastName, phoneNumber])

    return (
        <WindowRegistration>
            <StyledBox>
                <WelcomeText>Dodaj Pacjenta</WelcomeText>
                <Fields>
                    <TextField
                        required
                        id="firstName"
                        label="Imię"
                        variant="standard"
                        onChange={(event) => setFirstName(event.target.value)}
                    />

                    <TextField
                        required
                        id="lastName"
                        label="Nazwisko"
                        variant="standard"
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        type='email'
                        variant="standard"
                        onChange={event => setEmail(event.target.value)}
                    />

                    <TextField
                        id="telNumber"
                        label="Numer telefonu"
                        type="tel"
                        variant="standard"
                        onChange={event => setPhoneNumber(event.target.value)}
                    />

                </Fields>

                <Button onClick={PatientRegistration} fullWidth={true}> Zarejestruj </Button>

            </StyledBox>
        </WindowRegistration>

    );


}