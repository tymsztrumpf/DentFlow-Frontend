import React, {useCallback, useEffect, useState} from "react";
import {ClinicApi} from "../../api/ClinicApi";
import {useNavigate} from "react-router-dom";
import {
    LoginButton,
    LoginForm,
    LoginHeader,
    LoginInputs,
    StyledTextFieldMedium,
    StyledTextFieldSmall, ValidationError
} from "../login/Login.styles";
import {
    Button, Modal,
    ModalBody,
    ModalFooter,
    ModalOverlay, PaymentModalContent, StyledSelect,
    TextFieldModal,
    UserName
} from "../profile/Profile.styles";

import {toast} from "react-toastify";

const ClinicRegistration = () => {
    const [clinicName, setClinicName] = useState('');
    const [email, setEmail] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerLastname, setOwnerLastname] = useState('');
    const [isEmailValid, setEmailValid] = useState<boolean>(false)
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [isPasswordValid, setPasswordValid] = useState<boolean | null>(false)
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    // tablica zawierająca dane z różnych ofert
    const pricingOptions = [
        {number:1, header: "1 fotel", price: "249.99", currency: "zł/msc" },
        {number:4,  header: "1-4 fotele", price: "549.99", currency: "zł/msc" },
        {number:0,  header: "5+ foteli", price: "899.99", currency: "zł/msc" },
    ];
    const [selectedPricingOption, setSelectedPricingOption] = useState(pricingOptions[0]);
    const [isFormValid, setFormValid] = useState<boolean>(false)

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false);
    };
    const registerClinic = useCallback(async () => {
        console.log(selectedPricingOption.number)
        try {
            await ClinicApi.register({
                clinicName: clinicName,
                ownerName: ownerName,
                ownerLastname: ownerLastname,
                phoneNumber:phoneNumber,
                numberOfSeats:selectedPricingOption.number,
                city: city,
                address: address,
                email: email,
                password: password,
            });
            toast.success("Założono klinikę")
            navigate("/")

        } catch (error: any) {
            toast.error("Bład serwera")
        }
    }, [selectedPricingOption,ownerLastname,ownerName,phoneNumber,clinicName, city, address, email, password, navigate]);

    useEffect(() => {
        setEmailValid(email.match(emailRegex) !== null)
    }, [email,emailRegex])

    useEffect(() => {
        setFormValid(clinicName.length >= 2 && city.length >= 2 && address.length >= 2 && ownerName.length >= 2 && ownerLastname.length >= 2);
    }, [clinicName, city, address]);


    useEffect(() => {
        setPasswordValid(password === secondPassword && password.length >= 8)
    }, [password, secondPassword])
    const onClinicNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setClinicName(event.target.value)
    }
    const onOwnerNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOwnerName(event.target.value)
    }
    const onOwnerLastnameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOwnerLastname(event.target.value)
    }

    const onCityChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCity(event.target.value)
    }
    const onPhoneNumberChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPhoneNumber(event.target.value)
    }
    const onStreetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddress(event.target.value)
    }
    const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const onSecondPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSecondPassword(event.target.value)
    }


    // stan przechowujący aktualnie wybraną opcję

    const handlePricingOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPricingOption(pricingOptions[event.target.selectedIndex]);
    };


    return (
        <>
            {showModal?(
                <Modal>
                    <ModalOverlay/>
                    <PaymentModalContent>
                        <UserName>Płatność</UserName>
                        <StyledSelect onChange={handlePricingOptionChange}>
                            {pricingOptions.map((option, index) => (
                                <option key={index} value={option.price}>
                                    {option.header} - {option.price} {option.currency}
                                </option>
                            ))}
                        </StyledSelect>
                        <ModalBody>
                            <TextFieldModal
                                required
                                id="cardNumber"
                                type={"text"}
                                label="Numer karty"
                                defaultValue={cardNumber}
                                onChange={e => setCardNumber(e.target.value)}/>
                            <TextFieldModal
                                required
                                id="Cardholder's"
                                type={"text"}
                                label="Cardholder's Name:"
                                defaultValue={cardHolder}
                                onChange={e => setCardHolder(e.target.value)}/>
                            <TextFieldModal
                                required
                                id="expiration"
                                type={"text"}
                                label="Expiration:"
                                defaultValue={expiration}
                                onChange={e => setExpiration(e.target.value)}/>
                            <TextFieldModal
                                required
                                id="cvv"
                                type={"text"}
                                label="CVV:"
                                defaultValue={cvv}
                                onChange={e => setCvv(e.target.value)}/>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={closeModal} >
                                Anuluj
                            </Button>
                            <Button onClick={registerClinic} >
                                Zapłać
                            </Button>
                            {/*disabled={!isEmailValid || !isPasswordValid || !isFormValid}*/}
                        </ModalFooter>
                    </PaymentModalContent>
                </Modal>
                ):(
                <LoginForm height={67}>
                    <LoginHeader>
                        Załóż przychodnię
                    </LoginHeader>


                    <LoginInputs>

                        <StyledTextFieldMedium label='Nazwa przychodni' size={"medium"} value={clinicName}
                                               onChange={onClinicNameChange}/>
                        <StyledTextFieldSmall label='Nazwa przychodni' size={"small"} value={clinicName}
                                              onChange={onClinicNameChange}/>

                        <StyledTextFieldMedium label='Imię właściciela' size={"medium"} value={ownerName}
                                               onChange={onOwnerNameChange}/>
                        <StyledTextFieldSmall label='Imię właściciela' size={"small"} value={ownerName}
                                              onChange={onOwnerNameChange}/>

                        <StyledTextFieldMedium label='Nazwisko właściciela' size={"medium"} value={ownerLastname}
                                               onChange={onOwnerLastnameChange}/>
                        <StyledTextFieldSmall label='Nazwisko właściciela' size={"small"} value={ownerLastname}
                                              onChange={onOwnerLastnameChange}/>

                        <StyledTextFieldMedium label='Miasto' size={"medium"} value={city} onChange={onCityChange}/>
                        <StyledTextFieldSmall label='Miasto' size={"small"} value={city} onChange={onCityChange}/>

                        <StyledTextFieldMedium label='Adres' size={"medium"} value={address} onChange={onStreetChange}/>
                        <StyledTextFieldSmall label='Adres' size={"small"} value={address} onChange={onStreetChange}/>

                        <StyledTextFieldMedium label='tel kliniki' size={"medium"} value={phoneNumber} onChange={onPhoneNumberChange}/>
                        <StyledTextFieldSmall label='tel kliniki' size={"small"} value={phoneNumber} onChange={onPhoneNumberChange}/>

                        <StyledTextFieldMedium label="Email" size={'medium'} value={email} onChange={onEmailChange}/>
                        <StyledTextFieldSmall label="Email" size={'small'} value={email} onChange={onEmailChange}/>
                        {!isEmailValid && email.length !== 0 && <ValidationError>Błędny adres Email</ValidationError>}

                        <StyledTextFieldMedium label="Hasło" size={'medium'} type='password' value={password}
                                               onChange={onPasswordChange}/>
                        <StyledTextFieldSmall label="Hasło" size={'small'} type='password' value={password}
                                              onChange={onPasswordChange}/>
                        {password.length < 8 && password.length !== 0 &&
                            <ValidationError>Hasło jest zbyt krótkie</ValidationError>}

                        <StyledTextFieldMedium label="Powtórz Hasło" size={'medium'} type='password' value={secondPassword}
                                               onChange={onSecondPasswordChange}/>
                        <StyledTextFieldSmall label="Powtórz Hasło" size={'small'} type='password' value={secondPassword}
                                              onChange={onSecondPasswordChange}/>
                        {!isPasswordValid && secondPassword.length !== 0 &&
                            <ValidationError>Hasła nie są takie same</ValidationError>}

                        <LoginButton  onClick={openModal} >
                            Zarejestruj
                        </LoginButton>
                        {/*// disabled={!isEmailValid || !isPasswordValid || !isFormValid}*/}

                    </LoginInputs>

                </LoginForm>
            )}
        </>
    )
}


export default ClinicRegistration;