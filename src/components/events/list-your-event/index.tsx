import { useState } from "react";

import EventInfo from "./event-info/event-info";
import { EVENT_INFO } from '../../constants';
import Popup from "../../common/popup/popup";
import withFooter from '../../hoc/with-footer';
import PersonalInfo from "./personal-info/personal-info";
import { useFormContext } from "../../context/form-context";
import {
    Container,
    Form,
    FormContainer,
    FormSubTitle,
    FormTitle,
    InfoContainer,
    Label,
    SubContainer,
    Title,
    Wrapper
} from './styles';

const ListYourEvent = () => {
    const { formData, step, setStep, resetFormData } = useFormContext();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8003/api/events/registerEvent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setStep(1);
                resetFormData();
            } else {
                console.error("Error submitting form:", result.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        setIsLoading(false);
    };

    return (
        <Container>
            {isSuccess &&
                <Popup
                    title="Your application has been submitted "
                    text="Our executive will contact you in next  24-48 hours."
                />
            }
            <SubContainer>
                <InfoContainer>
                    {EVENT_INFO.map(info => (
                        <Wrapper key={info.id}>
                            <Title>{info.title}</Title>
                            <Label>{info.label}</Label>
                        </Wrapper>
                    ))}
                </InfoContainer>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <FormTitle>Let's get started</FormTitle>
                        <FormSubTitle>Your one stop tool for organizing events</FormSubTitle>
                        {step === 1 ? (
                            <PersonalInfo />
                        ) : (
                            <EventInfo handleSubmit={handleSubmit} isLoading={isLoading} />
                        )}
                    </Form>
                </FormContainer>
            </SubContainer>
        </Container>
    );
};

export default withFooter(ListYourEvent);
