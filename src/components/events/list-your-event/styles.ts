import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-image: url("/images/list-your-event.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`;

export const SubContainer = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 20px;
    margin: 60px auto;

    @media (max-width: 480px){
        // width: 100%;
        flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
    width: 40%;
    color: #fff;
    margin-top: 5%;

    @media (max-width: 480px){
        width: 100%;
    }
`;

export const FormContainer = styled.div`
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 35%;
    opacity: 0.89;
    background: rgba(255, 255, 255, 0.9);

    @media (max-width: 480px){
        width: 90%;
        border-radius: 6px;
        margin-top: 40px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;

    @media (max-width: 480px){
        font-size: 18px;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    color: #fff;

    @media (max-width: 480px){
        font-size: 12px;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 90%;
    flex-direction: column;

    @media (max-width: 480px){
        width: 100%;
    }
`;

export const FormTitle = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    color: #000;
    text-align: center;
    font-weight: bold;

    @media (max-width: 480px){
        font-size: 20px;
    }
`;

export const FormSubTitle = styled.div`
    display: flex;
    margin-bottom: 20px;
    color: #000000;
    justify-content: center;

    @media (max-width: 480px){
        font-size: 14px;
    }
`;
