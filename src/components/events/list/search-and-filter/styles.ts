import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 0px 20px;
    border-radius: 10px;
    margin-top: 40px;

    @media (max-width: 480px){
        padding: 0px 20px;
    }
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
    border-radius: 8px;
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
    width: 50%;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 480px) {
        width: 100%;
        gap: 20px;
    };
`;

export const DropdownWrapper = styled.div`
    background: #F2F4FF;
    border-radius: 8px;
    padding: 2px 10px;
    width: fit-content;
    height: fit-content;

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

export const ClearFiltersButton = styled.button`
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#ff4d4f")};
    color: white;
    border: none;
    padding: 12px 10px;
    border-radius: 8px;
    width: fit-content;
    height: fit-content;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: all 0.3s ease;

    @media (max-width: 480px){
        width: 46%;
        padding: 12px 16px;
    }

    &:hover {
        background-color: ${({ disabled }) => (disabled ? "#ccc" : "#d9363e")};
    }
`;

export const DropdownWrapper1 = styled.div<{ value: string }>`
    position: relative;
    width: 26%;
    box-sizing: border-box;
    padding: 2px 18px;
    cursor: pointer;

    @media (max-width: 480px) {
        width: 40%;
        padding: 2px;
    }

    input {
        padding: 10px 8px;
        border: 1px solid #F2F4FF;
        border-radius: 8px;
        font-size: 14px;
        width: 100%;
        color: ${({ value }) => !!value ? "#000" : "#b0b0b0"};
        background: #F2F4FF;
        outline: none;
        position: relative;
        appearance: none;
    }

    /* Custom Placeholder */
    .placeholder {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #999;
        font-size: 14px;
        pointer-events: none;
        transition: all 0.2s ease-in-out;
    }

    /* Hide placeholder when input has value */
    input:focus + .placeholder,
    input:not(:placeholder-shown) + .placeholder {
        display: none;
    }
`;
