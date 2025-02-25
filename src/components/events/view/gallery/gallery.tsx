import styled from 'styled-components';

const Gallery = () => (
  <Container>
    <Title>Gallery</Title>
    <SubContainer>
      {[1, 2, 3, 4].map((_, index) => (
        <GalleryImage
          key={index}
          src="/images/carousel/boho.png"
          alt="404 Not_fount"
        />
      ))}
    </SubContainer>
  </Container>
);

export default Gallery;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 90%;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 480px){
    flex-direction: column;
  }
`;

const Title = styled.h2`
  width: 90%;
  font-size: 22px;
  font-weight: bold;
  color: #283F93;
  margin-bottom: 15px;
`;

const GalleryImage = styled.img`
  width: 100%;
  max-width: 23%;
  height: 150px;
  border-radius: 8px;
  
  @media (max-width: 480px){
    max-width: 100%;
  }
`;
