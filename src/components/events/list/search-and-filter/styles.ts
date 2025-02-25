import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    border-radius: 10px;
    margin-top: 40px;
`;

export const SubContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const SearchContainer = styled.div`
    width: 30%;
    display: flex;
    position: relative;

    @media (max-width: 480px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 30px;
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 50px;
    font-size: 16px;
    padding-left: 35px;

    &:focus {
        outline: none;
        border-color: #453e6b;
    }

    &::placeholder {
        font-size: 12px;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    width: 62%;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 480px) {
        width: 100%;
        gap: 20px;
    }
`;

export const DropdownWrapper = styled.div`
    background: #F2F4FF;
    border-radius: 50px;
    padding: 2px 10px;
    width: 20%;

    @media (max-width: 480px) {
        width: 40%;
    }

    &:hover {
        background: #e0e3ff;
    }
`;

export const SearchIconWrapper = styled.div`
    position: absolute;
    top: 56%;
    left: 15px;
    transform: translateY(-50%);
    pointer-events: none;
`;