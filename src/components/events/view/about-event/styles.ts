import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;

  @media (max-width: 480px){
    flex-direction: column;
  }
`;

export const Section = styled.div<{ $isConditions: boolean }>`
  margin-bottom: 20px;
  width: ${({ $isConditions }) => ($isConditions ? "36%" : "60%")};

  @media (max-width: 480px){
    width: 100%;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const ExpendIcon = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 40px;
  justify-content: center;
  cursor: pointer;
`;

export const Text = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const InfoBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const InfoBox = styled.div`
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 6px;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const InfoBoxIcon = styled.div`
  margin-right: 20px;
  color: #555;
`;

export const Image = styled.img`
  color: #5E5E5E;
`;

export const InfoBoxText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #5E5E5E;
  font-size: 12px;
`;

export const Value = styled.div`
  font-weight: bold;
  margin-top: 8px;
  color: #222222;
`;

export const Venue = styled.div``;

export const VenueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F5F5F5;
  padding: 15px;
  border-radius: 6px;
  align-items: center;

  @media (max-width: 480px){
    flex-direction: column;
    align-items: start;
    gap: 20px;
    font-size: 14px;
  }
`;

export const Location = styled.div``;

export const Direction = styled.div`
  border: 1px solid #283F93;
  color: #283F93;
  font-size: 14px;
  padding: 6px;
  border-radius: 6px;
  align-items: center;
  display: flex;
  gap: 5px;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  line-height: 20px;
  color: #666;
`;

export const UnOrderList = styled.ul`
  background-color: #F5F5F5;
  padding: 20px 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 270px;
  overflow-y: auto;
`;
