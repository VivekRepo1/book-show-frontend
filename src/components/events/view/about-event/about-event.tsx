import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

import { TERMS_AND_CONDITIONS } from '../../../constants';
import {
  Container,
  Direction,
  ExpendIcon,
  Header,
  Image,
  InfoBox,
  InfoBoxes,
  InfoBoxIcon,
  InfoBoxText,
  Label,
  ListItem,
  Location,
  Section,
  SectionTitle,
  Text,
  UnOrderList,
  Value,
  Venue,
  VenueContainer
} from './styles';

const AboutEvent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>

      <Section $isConditions={false}>
        <SectionTitle>About the event</SectionTitle>
        <Text>
          Wonder Girls was a South Korean girl group formed by JYP Entertainment.
          The group debuted in February 2007 with the single "Irony" and 5 members: Yeeun, Sunye, Sunmi, Hyuna,
          and Sohee. After Hyuna's departure in July, Yubin was added into the group prior to the release of their debut studio
          album, The Wonder Years (2007). The album spawned the hit single "Tell Me", which topped various South Korean music
          charts.
        </Text>

        <InfoBoxes>
          <InfoBox>
            <InfoBoxIcon>
              <Image
                src="/images/language.svg"
                alt="404 Not_found"
              />
            </InfoBoxIcon>
            <InfoBoxText>
              <Label>Language</Label>
              <Value>English</Value>
            </InfoBoxText>
          </InfoBox>
          <InfoBox>
            <InfoBoxIcon>
              <Image
                src="/images/eligible.svg"
                alt="404 Not_found"
              />
            </InfoBoxIcon>
            <InfoBoxText>
              <Label>Best Suited For Ages</Label>
              <Value>21 yrs & above</Value>
            </InfoBoxText>
          </InfoBox>
        </InfoBoxes>

        <Venue>
          <SectionTitle>Venue</SectionTitle>
          <VenueContainer>
            <Location>Sri Kanteerava Outdoor Stadium, Bengaluru</Location>
            <Direction><CiLocationOn /> Get Directions</Direction>
          </VenueContainer>
        </Venue>

      </Section>

      <Section $isConditions={true}>
        <Header>
          <SectionTitle>Terms & Conditions</SectionTitle>
          <ExpendIcon onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <SlArrowUp /> : <SlArrowDown />}
          </ExpendIcon>
        </Header>
        <UnOrderList>
          {(!isExpanded ? TERMS_AND_CONDITIONS.slice(0, 2) : TERMS_AND_CONDITIONS).map((data: any) => (
            <ListItem key={data.id}>{data.label}</ListItem>
          ))}
        </UnOrderList>
      </Section>

    </Container>
  );
};

export default AboutEvent;
