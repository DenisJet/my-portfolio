import React from 'react';
import { StyledSection, SkillsUl, SkillsImage, SkillsText } from './styled';
import htmImg from '../../../assets/html.svg';
import cssImg from '../../../assets/css.svg';
import jsImg from '../../../assets/js.svg';
import reactImg from '../../../assets/react.svg';
import sassImg from '../../../assets/sass.svg';
import gulpImg from '../../../assets/gulp.svg';
import webpackImg from '../../../assets/webpack.svg';
import gitImg from '../../../assets/git.svg';

export default function Skills({ className }) {
  return (
    <StyledSection className={className}>
      <h2>Скиллы</h2>
      <SkillsUl>
        <li>
          <SkillsImage src={htmImg} alt="HTML" />
          <SkillsText>HTML</SkillsText>
        </li>
        <li>
          <SkillsImage src={cssImg} alt="css" />
          <SkillsText>Css</SkillsText>
        </li>
        <li>
          <SkillsImage src={jsImg} alt="javascript" />
          <SkillsText>JavaScript</SkillsText>
        </li>
        <li>
          <SkillsImage src={reactImg} alt="react" />
          <SkillsText>React</SkillsText>
        </li>
        <li>
          <SkillsImage src={sassImg} alt="sass" />
          <SkillsText>Sass</SkillsText>
        </li>
        <li>
          <SkillsImage src={gulpImg} alt="gulp" />
          <SkillsText>Gulp</SkillsText>
        </li>
        <li>
          <SkillsImage src={webpackImg} alt="webpack" />
          <SkillsText>Webpack</SkillsText>
        </li>
        <li>
          <SkillsImage src={gitImg} alt="git" />
          <SkillsText>Git</SkillsText>
        </li>
      </SkillsUl>
    </StyledSection>
  );
}
