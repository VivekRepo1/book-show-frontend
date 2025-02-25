// import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import {
  Container,
  SubContainer,
  Section,
  Logo,
  BookShowInfo,
  Text,
  // SocialIcons,
  // SocialIcon,
  Title,
  List,
  ListItem,
  Link,
  SubscribeForm,
  Input,
  Button,
  Copyright,
} from './styles';
import { FOOTER_LINK } from '../../constants';

const Footer = () => (
  <Container>
    <SubContainer>
      <Section>
        <Logo src='/white-footer-fram.svg' alt='book_show_online' />
        <BookShowInfo>
          <Text>
            Bookshow.online is a global self-service ticketing platform for
            live experiences that allows anyone to create, share, find and
            attend events that fuel their passions and enrich their lives.
          </Text>
          {/* <SocialIcons>
            <SocialIcon
              href="https://www.facebook.com/repozitory/"
              target='_blank'
              $bgColor="#3B5998"
            >
              <FaFacebookF size={15} />
            </SocialIcon>
            <SocialIcon href="#" $bgColor="#55ACEE">
              <FaTwitter size={15} />
            </SocialIcon>
            <SocialIcon
              href="https://in.linkedin.com/company/repozitory"
              target='_blank'
              $bgColor="#007AB9"
            >
              <FaLinkedinIn size={15} />
            </SocialIcon>
          </SocialIcons> */}
        </BookShowInfo>
      </Section>

      <Section>
        <Title>Upcoming Events</Title>
        <List>
          {FOOTER_LINK.map(link => (
            <ListItem key={link.id}>
              <Link href={link.to}>{link.text}</Link>
            </ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <Title>Stay In The Loop</Title>
        <Text>
          Join our mailing list to stay in the loop with our newest for Event
          and concert
        </Text>
        <SubscribeForm>
          <Input type="email" placeholder="Enter your email address" />
          <Button>Subscribe Now</Button>
        </SubscribeForm>
      </Section>
    </SubContainer>
    <Copyright>Copyright © 2025 BookShow.online</Copyright>
  </Container>
);

export default Footer;
