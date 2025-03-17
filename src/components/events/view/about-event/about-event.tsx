import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { IoLanguageOutline } from "react-icons/io5";
import { FaPeopleRobbery } from "react-icons/fa6";

import {
  ComingSoon,
  Container,
  Direction,
  ExpendIcon,
  Header,
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

const AboutEvent = ({ event }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const goToDirection = () => {
    const placeName = encodeURIComponent(`${event?.venue?.address}, ${event?.venue?.city}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${placeName}`;

    window.open(mapsUrl, "_blank");
  };

  return (
    <Container>

      <Section $isConditions={false}>
        <SectionTitle>About the event</SectionTitle>
        {event?.isComingSoon
          ? <Text>{event?.description}</Text>
          : <ComingSoon>Coming Soon...</ComingSoon>
        }

        <InfoBoxes>
          {event?.language && <InfoBox>
            <InfoBoxIcon>
              <IoLanguageOutline size={30} />
            </InfoBoxIcon>
            <InfoBoxText>
              <Label>Language</Label>
              <Value>{event?.language}</Value>
            </InfoBoxText>
          </InfoBox>}
          {event?.ageRequirement && <InfoBox>
            <InfoBoxIcon>
              <FaPeopleRobbery size={25} />
            </InfoBoxIcon>
            <InfoBoxText>
              <Label>Best Suited For Ages</Label>
              <Value>{event?.ageRequirement} yrs & above</Value>
            </InfoBoxText>
          </InfoBox>}
        </InfoBoxes>

        <Venue>
          <SectionTitle>Venue</SectionTitle>
          <VenueContainer>
            <Location>{`${event?.venue?.address}, ${event?.venue?.city}`}</Location>
            <Direction onClick={goToDirection}>
              <CiLocationOn /> Get Directions
            </Direction>
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
          {(!isExpanded
            ? event?.termsAndConditions?.slice(0, 2)
            : event?.termsAndConditions)?.map((data: string, index: number) => (
              <ListItem key={index}>{data}</ListItem>
            ))}
        </UnOrderList>
      </Section>

    </Container>
  );
};

export default AboutEvent;
