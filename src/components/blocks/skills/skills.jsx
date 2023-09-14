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
import reduxImg from '../../../assets/redux.svg';
import jestImg from '../../../assets/jest.svg';
import tsImg from '../../../assets/typescript.svg';
import nodeImg from '../../../assets/nodejs.svg';
import mongoDb from '../../../assets/mongodb.svg';

export default function Skills({ className }) {
  return (
    <StyledSection className={className}>
      <h2>Скиллы</h2>
      <SkillsUl>
        <li>
          <SkillsImage src={tsImg} alt='javascript' />
          <SkillsText>TypeScript</SkillsText>
        </li>
        <li>
          <SkillsImage src={jsImg} alt='javascript' />
          <SkillsText>JavaScript</SkillsText>
        </li>
        <li>
          <SkillsImage src={nodeImg} alt='javascript' />
          <SkillsText>Node JS</SkillsText>
        </li>
        <li>
          <SkillsImage src={reactImg} alt='react' />
          <SkillsText>React</SkillsText>
        </li>
        <li>
          <SkillsImage src={reduxImg} alt='sass' />
          <SkillsText>Redux</SkillsText>
        </li>
        <li>
          <SkillsImage src={mongoDb} alt='sass' />
          <SkillsText>Mongo DB</SkillsText>
        </li>
        <li>
          <SkillsImage src={htmImg} alt='HTML' />
          <SkillsText>HTML</SkillsText>
        </li>
        <li>
          <SkillsImage src={cssImg} alt='css' />
          <SkillsText>Css</SkillsText>
        </li>
        <li>
          <SkillsImage src={sassImg} alt='sass' />
          <SkillsText>Sass</SkillsText>
        </li>
        <li>
          <SkillsImage src={jestImg} alt='webpack' />
          <SkillsText>Jest</SkillsText>
        </li>
        <li>
          <SkillsImage src={gulpImg} alt='gulp' />
          <SkillsText>Gulp</SkillsText>
        </li>
        <li>
          <SkillsImage src={webpackImg} alt='webpack' />
          <SkillsText>Webpack</SkillsText>
        </li>
        <li>
          <SkillsImage src={gitImg} alt='git' />
          <SkillsText>Git</SkillsText>
        </li>
      </SkillsUl>
    </StyledSection>
  );
}
