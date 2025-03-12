import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

import {
    Container,
    PageTitle,
    StepsContainer,
    StepCircle,
    StepLine,
    OrderCard,
    Title,
    TicketsSection,
    TicketCard,
    EventName,
    GeneralAdmission,
    TicketCounter,
    CounterButton,
    TicketText,
    TicketPrice,
    BuyMoreTickets,
    DiscountSection,
    DiscountTitle,
    DiscountInput,
    ApplyButton,
    PaymentSection,
    PaymentRow,
    PaymentLabel,
    PaymentAmount,
    ContinueButton,
    TicketCategory,
    DiscountWrapper,
    AmountWrapper,
    TicketContainer,
    BackButton
} from './styles';
import { TICKET_TYPES } from '../../../constants';

const OrderSummary = () => {
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [discountCode, setDiscountCode] = useState('');
    const [ticketCounts, setTicketCounts] = useState<{ [key: string]: number }>({});

    const { tickets } = location.state;

    useState(() => {
        const initialCounts: { [key: string]: number } = {};
        Object.entries(tickets).forEach(([type, count]) => {
            initialCounts[type] = count as number;
        });
        setTicketCounts(initialCounts);
    });

    const handleIncrement = (type: string) => {
        setTicketCounts((prevCounts) => ({
            ...prevCounts,
            [type]: (prevCounts[type] || 0) + 1,
        }));
    };

    const handleDecrement = (type: string) => {
        setTicketCounts((prevCounts) => ({
            ...prevCounts,
            [type]: Math.max((prevCounts[type] || 1) - 1, 1),
        }));
    };

    const orderAmount = Object.entries(ticketCounts).reduce((total, [type, count]) => {
        const ticketPrice = TICKET_TYPES.find((t) => t.type === type)?.price || 0;
        return total + count * ticketPrice;
    }, 0);

    const platformFee = 20;
    const grandTotal = orderAmount + platformFee;

    return (
        <Container>
            <PageTitle>Complete the procedure to book ticket</PageTitle>

            <StepsContainer>
                <StepCircle active />
                <StepLine />
                <StepCircle />
                <StepLine />
                <StepCircle />
            </StepsContainer>

            <OrderCard>
                <Title title>Order Summary</Title>
                <TicketsSection>
                    <Title>Tickets</Title>
                    <TicketCard>
                        <EventName>Wonder Girls 2025 | Bangalore</EventName>

                        {Object.entries(ticketCounts).map(([type, count]) => {
                            const ticketPrice = TICKET_TYPES.find((t) => t.type === type)?.price || 0;
                            return (
                                <TicketCard key={type}>
                                    <TicketCategory>{type}</TicketCategory>
                                    <GeneralAdmission>
                                        <TicketContainer>
                                            <TicketCounter>
                                                <CounterButton onClick={() => handleDecrement(type)}>-</CounterButton>
                                                <span>{count}</span>
                                                <CounterButton onClick={() => handleIncrement(type)}>+</CounterButton>
                                            </TicketCounter>
                                            <TicketText>Ticket</TicketText>
                                        </TicketContainer>
                                        <AmountWrapper>
                                            <TicketPrice>₹{count * ticketPrice}</TicketPrice>
                                            <div>Includes taxes</div>
                                        </AmountWrapper>
                                    </GeneralAdmission>
                                </TicketCard>
                            );
                        })}
                    </TicketCard>
                </TicketsSection>
                <BuyMoreTickets onClick={() => navigate(-1)}>
                    Buy more tickets
                </BuyMoreTickets>

                <DiscountSection>
                    <DiscountTitle>Have a discount code?</DiscountTitle>
                    <DiscountWrapper>
                        <DiscountInput
                            type="text"
                            placeholder="Enter a discount code"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value.trim())}
                        />
                        <ApplyButton disabled={!discountCode}>Apply</ApplyButton>
                    </DiscountWrapper>
                </DiscountSection>

                <PaymentSection>
                    <Title>Payment Details</Title>
                    <PaymentRow>
                        <PaymentLabel>Order Amount</PaymentLabel>
                        <PaymentAmount>₹{orderAmount}</PaymentAmount>
                    </PaymentRow>
                    <PaymentRow>
                        <PaymentLabel>Platform Fee</PaymentLabel>
                        <PaymentAmount>₹{platformFee}</PaymentAmount>
                    </PaymentRow>
                    <PaymentRow total>
                        <PaymentLabel>Grand Total</PaymentLabel>
                        <PaymentAmount>₹{grandTotal}</PaymentAmount>
                    </PaymentRow>
                </PaymentSection>

                <ContinueButton onClick={() => navigate(`/${id}/purchase-tickets`)}>
                    Continue
                </ContinueButton>
                <BackButton type="button" onClick={() => navigate(-1)}>
                    <GoArrowLeft /> Back
                </BackButton>
            </OrderCard>
        </Container>
    );
};

export default OrderSummary;
