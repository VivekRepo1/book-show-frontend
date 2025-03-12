import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const SubContainer = styled.div`
  position: relative;
  width: 90%;
  overflow: hidden;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #283F93;
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > * {
    width: 100%;
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  font-weight: bold;
  color: #555;
  text-align: center;
`;


export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 4px solid gray;
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.9s linear infinite;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #F6F6F6;
  color: #333;
  font-size: 16px;
`;
