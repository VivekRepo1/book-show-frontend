import { FaClock } from 'react-icons/fa';
import { LuMinus } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";

import {
    TicketCardWrapper,
    TicketInfo,
    TicketTypeText,
    Category,
    TicketPrice,
    AddButton,
    QuantityControl,
    QuantityButton,
    QuantityText,
    TicketDescription
} from './styles';

interface IProps {
    type: string;
    price: number;
    description: string;
    ticketCount: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const TicketCard = ({
    type,
    price,
    description,
    ticketCount,
    onIncrement,
    onDecrement
}: IProps) => (
    <TicketCardWrapper>
        <TicketInfo>
            <TicketTypeText>{type}</TicketTypeText>
            <Category>
                <TicketPrice>₹{price}</TicketPrice>
                {ticketCount === 0 ? (
                    <AddButton onClick={onIncrement}>Add</AddButton>
                ) : (
                    <QuantityControl>
                        <QuantityButton onClick={onDecrement}><LuMinus /></QuantityButton>
                        <QuantityText>{ticketCount}</QuantityText>
                        <QuantityButton onClick={onIncrement}><HiPlus /></QuantityButton>
                    </QuantityControl>
                )}
            </Category>
        </TicketInfo>
        <TicketDescription>
            <FaClock size={12} />
            {description}
        </TicketDescription>
    </TicketCardWrapper>
);

export default TicketCard;
