import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    title: string;
    text: string;
    onClose?: () => void;
    showCloseButton?: boolean;
    okayButtonText?: string;
    okayButtonAction?: () => void;
};

const Popup = ({
    title,
    text,
    onClose,
    showCloseButton = false,
    okayButtonText = 'Ok',
    okayButtonAction,
}: IProps) => {
    const navigate = useNavigate();

    const handleOkayClick = () => {
        if (okayButtonAction) {
            okayButtonAction();
        } else {
            navigate("/events");
        }
    };

    return (
        <>
            <Overlay onClick={onClose} />
            <Container>
                {showCloseButton && <CloseButton onClick={onClose}>×</CloseButton>}
                <Title>{title}</Title>
                <TextInfo>{text}</TextInfo>
                <OkayButton onClick={handleOkayClick}>{okayButtonText}</OkayButton>
            </Container>
        </>
    );
}

export default Popup;

const Overlay = styled.div`
    background-color: black;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    opacity: 70%;
`;

const Container = styled.div`
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 300;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;

    @media (max-width: 480px) {
        width: 70%;
        padding: 25px;
    }
`;

const Title = styled.h2`
    margin: 0 5px;
    font-size: 18px;
    margin-bottom: 15px;
    
    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

const TextInfo = styled.p`
    font-size: 1rem;
    margin-bottom: 15px;

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

const OkayButton = styled.button`
    background-color: #2e3192;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    height: 40px;

    &:hover {
      background-color: #232578;
    }

    @media (max-width: 480px) {
      width: 40%;
      padding: 5px;
      font-size: 14px;
      font-weight: 500;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;

    &:hover {
        color: #000;
    }
`;
