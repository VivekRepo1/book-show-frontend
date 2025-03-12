import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoTimeOutline } from "react-icons/io5";
import { FaCalendarAlt } from 'react-icons/fa';
import { GrLocation } from "react-icons/gr";
import { GoArrowLeft } from "react-icons/go";

import TicketCard from './ticket-card/ticket-card';
import { EVENTS_DATA, TICKET_TYPES } from '../../../constants';
import {
    Container,
    DateAndTime,
    EventHeader,
    EventInfo,
    EventTitle,
    NotFound,
    SectionTitle,
    SubContainer,
    TicketContainer,
    TicketSection,
    SummarySection,
    SummaryContent,
    SummaryText,
    AddToCart,
    FooterContainer,
    NumberOfTickets,
    BackButton
} from './styles';

interface TicketCount {
    [key: string]: number;
}

const ChooseTickets = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [ticketCounts, setTicketCounts] = useState<TicketCount>({});
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const eventDetails = EVENTS_DATA.find(event => event.id === Number(id));

    if (!eventDetails) {
        return <NotFound>Oops! Event Not Found</NotFound>;
    }

    const handleIncrement = (type: string, price: number) => {
        setTicketCounts(prev => ({
            ...prev,
            [type]: (prev[type] || 0) + 1
        }));
        setTotalAmount(prev => prev + price);
    };

    const handleDecrement = (type: string, price: number) => {
        setTicketCounts(prev => ({
            ...prev,
            [type]: Math.max(0, (prev[type] || 0) - 1)
        }));
        setTotalAmount(prev => Math.max(0, prev - price));
    };

    const handleAddToCart = () => {
        navigate(`/checkout/${id}/summary`, {
            state: {
                tickets: ticketCounts,
                totalAmount,
                eventDetails
            }
        });
    };

    const totalTickets = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);

    return (
        <Container>
            <SubContainer $totalTickets={!!totalTickets}>
                <EventHeader>
                    <EventTitle>{eventDetails.title}</EventTitle>
                    <EventInfo>
                        <DateAndTime>
                            <span><FaCalendarAlt /> <span>{eventDetails.date}</span></span>
                            <span><IoTimeOutline /> <span>{eventDetails.time}</span></span>
                        </DateAndTime>
                        <span><GrLocation size={15} /> <span>{eventDetails.location}</span></span>
                    </EventInfo>
                </EventHeader>

                <TicketContainer>
                    <TicketSection>
                        <SectionTitle>Choose Tickets</SectionTitle>
                        {TICKET_TYPES.map((ticket) => (
                            <TicketCard
                                key={ticket.type}
                                type={ticket.type}
                                price={ticket.price}
                                description={ticket.description}
                                ticketCount={ticketCounts[ticket.type] || 0}
                                onIncrement={() => handleIncrement(ticket.type, ticket.price)}
                                onDecrement={() => handleDecrement(ticket.type, ticket.price)}
                            />
                        ))}
                        <BackButton type="button" onClick={() => navigate(-1)}>
                            <GoArrowLeft /> Back
                        </BackButton>
                    </TicketSection>
                </TicketContainer>

                {totalTickets > 0 && (
                    <SummarySection>
                        <FooterContainer>
                            <SummaryContent>
                                <NumberOfTickets>
                                    {totalTickets} Ticket
                                </NumberOfTickets>
                                <SummaryText>
                                    ₹{totalAmount}
                                </SummaryText>
                            </SummaryContent>
                            <AddToCart onClick={handleAddToCart}>
                                Add to Cart
                            </AddToCart>
                        </FooterContainer>
                    </SummarySection>
                )}
            </SubContainer>
        </Container>
    );
};

export default ChooseTickets;
