import React from 'react';
import {
  StyledSection,
  SectionTitle,
  SocialLinkImage,
  ContactLink,
  SocialLink,
  GithubLink
} from './styled';
import telegramm from '../../../assets/telegram.svg';
import watsapp from '../../../assets/whatsapp.svg';
import github from '../../../assets/github.svg';

export default function Contacts({ className }) {
  return (
    <StyledSection className={className}>
      <SectionTitle>Контакты:</SectionTitle>
      <div>
        <h4>Email:</h4>
        <ContactLink href="mailto:deniskalkopf@gmail.com">
          deniskalkopf@gmail.com
        </ContactLink>
      </div>
      <div>
        <h4>Телефон:</h4>
        <ContactLink href="tel:+79123155349">+ 7 912 315 53 49</ContactLink>
        <SocialLink href="https://t.me/+79123155349">
          <SocialLinkImage src={telegramm} alt="написать в телеграмм" />
        </SocialLink>
        <SocialLink href="https://wa.me/+79123155349">
          <SocialLinkImage src={watsapp} alt="написать в ватсапп" />
        </SocialLink>
      </div>
      <p>
        <GithubLink href="https://github.com/DenisJet">
          GitHub
          <SocialLinkImage src={github} alt="ссылка на гитхаб" />
        </GithubLink>
      </p>
    </StyledSection>
  );
}
