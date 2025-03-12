import styled from 'styled-components';

const ComingSoon = () => (
  <ComingSoonContainer>
    <ComingSoonText>Coming Soon...</ComingSoonText>
  </ComingSoonContainer>
);

export default ComingSoon;

const ComingSoonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  text-align: center;
  background-color: #f0f2f5;
  height: 100vh;
`;

const ComingSoonText = styled.h5`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;
