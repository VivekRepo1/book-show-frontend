import { GoArrowLeft } from "react-icons/go";

import {
    FormGroup,
    InputLabel,
    Input,
    EventDuration,
    TwoInputField,
    SubmitButton,
    Loader,
    BackNavigate
} from "./styles";
import { useFormContext } from "../../../context/form-context";

interface FormProps {
    handleSubmit: (e: any) => void;
    isLoading: boolean;
}

const EventInfo = ({ handleSubmit, isLoading }: FormProps) => {
    const { formData, setFormData, setStep } = useFormContext();

    const today = new Date();
    const todayFormatted = today.toISOString().split('T')[0];

    const isDisabled = !formData.eventName || !formData.startDate || !formData.endDate || !formData.eventVenue || !formData.city || !formData.state;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value.replace(/^\s+/, ''),
        });
    };


    return (
        <>
            <FormGroup>
                <InputLabel htmlFor="eventName">Event Name</InputLabel>
                <Input type="text" id="eventName" placeholder="Enter the event name" value={formData.eventName} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
                <InputLabel>Event Duration</InputLabel>
                <EventDuration>
                    <Input
                        $fullInput
                        type="date"
                        id="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        min={todayFormatted}
                        required
                    />
                    <Input
                        $fullInput
                        type="date"
                        id="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        min={todayFormatted}
                        required
                    />
                </EventDuration>
            </FormGroup>

            <FormGroup>
                <InputLabel htmlFor="eventVenue">Event Venue</InputLabel>
                <Input type="text" id="eventVenue" placeholder="Enter event venue" value={formData.eventVenue} onChange={handleChange} required />
            </FormGroup>

            <TwoInputField>
                <FormGroup $twoInputField>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Input id="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                </FormGroup>

                <FormGroup $twoInputField>
                    <InputLabel htmlFor="state">State</InputLabel>
                    <Input id="state" placeholder="State" value={formData.state} onChange={handleChange} required />
                </FormGroup>
            </TwoInputField>

            <SubmitButton
                type="button"
                onClick={handleSubmit}
                disabled={isDisabled || isLoading}
            >
                {isLoading ? <Loader /> : "Submit"}
            </SubmitButton>
            <BackNavigate onClick={() => setStep(1)}>
                <GoArrowLeft /> Back
            </BackNavigate>
        </>
    );
};

export default EventInfo;
