import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { useFormContext } from "../../../context/form-context";
import { isEmailValid, isPhoneNumberValid } from '../../../constants';
import { FormGroup, InputLabel, Input, ErrorMsg, SubmitButton } from "./styles";

const PersonalInfo = () => {
    const { formData, setFormData, setStep } = useFormContext();

    const [emailError, setEmailError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');

    const isDisabled = !formData.name || !formData.email || !formData.phoneNumber || emailError || phoneError;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        const trimmedValue = value.replace(/^\s+/, '');

        setFormData({
            ...formData,
            [id]: trimmedValue,
        });

        if (id === 'email') {
            if (trimmedValue && !isEmailValid(trimmedValue)) {
                setEmailError('Please enter a valid email address.');
            } else {
                setEmailError('');
            }
        }

        if (id === 'phoneNumber') {
            if (trimmedValue && !isPhoneNumberValid(trimmedValue)) {
                setPhoneError('Please enter a valid phone number.');
            } else {
                setPhoneError('');
            }
        }
    };

    return (
        <>
            <FormGroup>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                {emailError && <ErrorMsg style={{ color: 'red' }}>{emailError}</ErrorMsg>}
            </FormGroup>
            <FormGroup>
                <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
                <Input id="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
                {phoneError && <ErrorMsg style={{ color: 'red' }}>{phoneError}</ErrorMsg>}
            </FormGroup>
            <SubmitButton type="button" onClick={() => setStep(2)} disabled={!!isDisabled}>
                Next
                <MdKeyboardArrowRight />
            </SubmitButton>
        </>
    );
};

export default PersonalInfo;
