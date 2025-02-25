import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

import { EVENT_INFO } from '../constants';
import withFooter from '../hoc/with-footer';
import {
    BackNavigate,
    Container,
    EventDuration,
    Form,
    FormContainer,
    FormGroup,
    FormSubTitle,
    FormTitle,
    InforContainer,
    Input,
    InputLabel,
    Label,
    SubContainer,
    SubmitButton,
    Title,
    TwoInputField,
    Wrapper
} from './styles';
import Popup from "../common/popup/popup";

interface FormProps {
    handleSubmit: (e: React.MouseEvent) => void;
}

const PersonalInfo = ({ handleSubmit }: FormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const isDisabled = !formData.name || !formData.email || !formData.phoneNumber;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value.replace(/^\s+/, ''),
        });
    };

    return (
        <>
            <FormTitle>Let's get started</FormTitle>
            <FormSubTitle>Your one stop tool for organizing events</FormSubTitle>
            <FormGroup>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
                <Input id="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
            </FormGroup>
            <SubmitButton type="submit" onClick={handleSubmit} disabled={isDisabled}>
                Next
                <MdKeyboardArrowRight />
            </SubmitButton>
        </>
    );
};


const EventInfo = ({ handleSubmit }: FormProps) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        eventName: '',
        startDate: '',
        endDate: '',
        eventVenue: '',
        city: '',
        state: '',
    });

    const isDisabled = !formData.eventName || !formData.startDate || !formData.endDate || !formData.eventVenue || !formData.city || !formData.state;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value.replace(/^\s+/, ''),
        });
    };

    const onSave = () => {
        setIsSuccess(!isSuccess);
    }

    return (
        <>
            {isSuccess &&
                <Popup
                    title="Your application has been submitted "
                    text="Our executive will contact you in next  24-48 hours."
                />
            }
            <FormTitle>Let's get started</FormTitle>
            <FormSubTitle>Your one stop tool for organizing events</FormSubTitle>

            <FormGroup>
                <InputLabel htmlFor="eventName">Event Name</InputLabel>
                <Input type="text" id="eventName" placeholder="Enter the event name" value={formData.eventName} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
                <InputLabel>Event Duration</InputLabel>
                <EventDuration>
                    <Input fullInput type="date" id="startDate" value={formData.startDate} onChange={handleChange} required />
                    <Input fullInput type="date" id="endDate" value={formData.endDate} onChange={handleChange} required />
                </EventDuration>
            </FormGroup>

            <FormGroup>
                <InputLabel htmlFor="eventVenue">Event Venue</InputLabel>
                <Input type="text" id="eventVenue" placeholder="Enter event venue" value={formData.eventVenue} onChange={handleChange} required />
            </FormGroup>

            <TwoInputField>
                <FormGroup twoInputField>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Input id="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                </FormGroup>

                <FormGroup twoInputField>
                    <InputLabel htmlFor="state">State</InputLabel>
                    <Input id="state" placeholder="State" value={formData.state} onChange={handleChange} required />
                </FormGroup>
            </TwoInputField>

            <SubmitButton
                type="button"
                onClick={onSave}
                disabled={isDisabled}
            >
                Submit
            </SubmitButton>
            <BackNavigate onClick={(handleSubmit)}>
                <GoArrowLeft /> Back
            </BackNavigate>
        </>
    );
};



const ListYourEvent = () => {
    const [isEventInfo, setIsEventInfo] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    const handleNext = () => {
        setIsEventInfo(!isEventInfo)
    }

    return (
        <Container>
            <SubContainer>
                <InforContainer>
                    {EVENT_INFO.map(info => (
                        <Wrapper key={info.id}>
                            <Title>{info.title}</Title>
                            <Label>{info.label}</Label>
                        </Wrapper>
                    ))}
                </InforContainer>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        {isEventInfo ? <EventInfo handleSubmit={handleNext} /> : <PersonalInfo handleSubmit={handleNext} />}
                    </Form>
                </FormContainer>
            </SubContainer>
        </Container>
    );
};

export default withFooter(ListYourEvent);
