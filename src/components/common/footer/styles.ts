import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #283F93;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    min-width: 90%;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
  flex: 1;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  height: 40px;
  color: #fff;
`;

export const Title = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00aeff;
  }
`;

export const BookShowInfo = styled.div`
  max-width: 300px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #fff;
  line-height: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const SocialIcon = styled.a<{ $bgColor: string }>`
  color: #ffffff;
  font-size: 1.5rem;
  margin-right: 15px;
  display: flex;
  align-items: center;
  background: ${({ $bgColor }) => $bgColor || '#3B5998'};
  padding: 10px;
  border-radius: 50px;

  &:hover {
    opacity: 0.8;
  }
`;

export const SubscribeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #fff;
  padding: 5px;
  border-radius: 50px;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 6px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #D3D3D3;
  border-radius: 50px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  border: none;
  outline: none;
  font-size: 12px;

  ::placeholder {
    color: #A9A9A9;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 15px;
    width: auto;
  }
`;

export const Button = styled.button`
  background-color: #283F93;
  color: #ffffff;
  padding: 12px 25px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  box-sizing: border-box;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 0.8rem;
  color: #E4E4E4;
  width: 100%;
  font-size: 12px;
  padding: 15px 0;
  opacity: 0.8;
  box-sizing: border-box;
  border-top: 1px solid #E4E4E4;
`;
