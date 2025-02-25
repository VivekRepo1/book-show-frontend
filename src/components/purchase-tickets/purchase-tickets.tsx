import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

import {
    BackButton,
    Checkbox,
    CheckboxContainer,
    CheckboxLabel,
    CheckCircle,
    ConfirmationCard,
    Container,
    ContinueButton,
    FormContainer,
    FormField,
    FormGrid,
    FullWidthField,
    GreenLine,
    Input,
    Label,
    PageTitle,
    ProgressBar,
    SmallText,
    TermsLink,
    Title
} from './styles';

const PurchaseTickets = () => {
    const navigate = useNavigate();

    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        termsAccepted: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value.replace(/^\s+/, ''),
        });
    };

    const isFormValid = () => {
        return (
            formData.name.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.city.trim() !== '' &&
            formData.state.trim() !== '' &&
            formData.termsAccepted
        );
    };

    const handleContinue = () => {
        if (isFormValid()) {
            navigate("/confirmation");
        } else {
            alert("Please fill out all fields and accept the terms.");
        }
    };

    return (
        <Container>

            <ConfirmationCard>
                <PageTitle>Complete the procedure to book ticket</PageTitle>
                <ProgressBar>
                    <CheckCircle $isComplete><FaCheck /></CheckCircle>
                    <GreenLine $isComplete />
                    <CheckCircle></CheckCircle>
                    <GreenLine />
                    <CheckCircle></CheckCircle>
                </ProgressBar>

                <FormContainer>
                    <Title>Ticket Details</Title>
                    <form>
                        <FormGrid>
                            <FormField>
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </FormField>

                            <FormField>
                                <Label>Phone</Label>
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </FormField>

                            <FullWidthField>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="abc@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <SmallText>E-tickets will be sent to this email address</SmallText>
                            </FullWidthField>

                            <FormField>
                                <Label>City</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </FormField>

                            <FormField>
                                <Label>State</Label>
                                <Input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                />
                            </FormField>
                        </FormGrid>

                        <CheckboxContainer>
                            <Checkbox
                                type="checkbox"
                                name="termsAccepted"
                                id="terms"
                                checked={formData.termsAccepted}
                                onChange={handleInputChange}
                            />
                            <CheckboxLabel htmlFor="terms">
                                I have read and accepted the <TermsLink>terms and conditions</TermsLink>
                            </CheckboxLabel>
                        </CheckboxContainer>

                        <ContinueButton
                            type="button"
                            onClick={handleContinue}
                            disabled={!isFormValid()}
                        >
                            Continue
                        </ContinueButton>

                        <BackButton type="button" onClick={() => navigate(-1)}>
                            <GoArrowLeft /> Back
                        </BackButton>
                    </form>
                </FormContainer>
            </ConfirmationCard>
        </Container>
    );
};

export default PurchaseTickets;









































/**
 * import { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import {
    BackButton,
    Checkbox,
    CheckboxContainer,
    CheckboxLabel,
    CheckCircle,
    ConfirmationCard,
    Container,
    ContinueButton,
    FormContainer,
    FormField,
    FormGrid,
    FullWidthField,
    GreenLine,
    Input,
    Label,
    PageTitle,
    ProgressBar,
    SmallText,
    TermsLink,
    Title
} from './styles';

const PurchaseTickets = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        termsAccepted: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const loadScript = (src: any) => {
        return new Promise((resolve) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve(true);
                return;
            }

            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };


    const initializeRazorpay = async () => {
        try {
            const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

            if (!res) {
                alert("Razorpay failed to load. Please check your connection.");
                return false;
            }

            return true;
        } catch (error) {
            alert("Failed to initialize Razorpay. Please try again.");
            return false;
        }
    };

    const handlePayment = async () => {
        const res = await initializeRazorpay();

        if (!res) {
            alert('Razorpay SDK failed to load');
            return;
        }

        const orderData = {
            amount: 50000, // amount in smallest currency unit (e.g., paise)
            currency: "INR",
            // Add other order details as needed
        };

        const options = {
            key: "YOUR_RAZORPAY_KEY",
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Your Company Name",
            description: "Ticket Purchase",
            handler: function (response: any) {
                console.log(response);
                navigate("/confirmation");
            },
            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone,
            },
            notes: {
                city: formData.city,
                state: formData.state,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
    };

    return (
        <Container>

            <ConfirmationCard>
                <PageTitle>Complete the procedure to book ticket</PageTitle>
                <ProgressBar>
                    <CheckCircle $isComplete><FaCheck /></CheckCircle>
                    <GreenLine $isComplete />
                    <CheckCircle></CheckCircle>
                    <GreenLine />
                    <CheckCircle></CheckCircle>
                </ProgressBar>

                <FormContainer>
                    <Title>Ticket Details</Title>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <FormGrid>
                            <FormField>
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </FormField>

                            <FormField>
                                <Label>Phone</Label>
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </FormField>

                            <FullWidthField>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="abc@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <SmallText>E-tickets will be sent to this email address</SmallText>
                            </FullWidthField>

                            <FormField>
                                <Label>City</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </FormField>

                            <FormField>
                                <Label>State</Label>
                                <Input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                />
                            </FormField>
                        </FormGrid>

                        <CheckboxContainer>
                            <Checkbox
                                type="checkbox"
                                id="terms"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleInputChange}
                            />
                            <CheckboxLabel htmlFor="terms">
                                I have read and accepted the <TermsLink>terms and conditions</TermsLink>
                            </CheckboxLabel>
                        </CheckboxContainer>

                        <ContinueButton
                            type="button"
                            onClick={handlePayment}
                        // disabled={!formData.termsAccepted}
                        >
                            Continue
                        </ContinueButton>

                        <BackButton type="button" onClick={() => navigate(-1)}>
                            ← Back
                        </BackButton>
                    </form>
                </FormContainer>

            </ConfirmationCard>
        </Container>
    );
};

export default PurchaseTickets;

 */
