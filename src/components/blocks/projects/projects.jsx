import React from 'react';
import {
  ProjectSection,
  ProjectImage,
  ProjectList,
  ProjectItem,
  ProjectDescription,
  ProjectLink,
} from './styled';

export default function Projects({ projects, className }) {
  return (
    <ProjectSection className={className}>
      <h2>Мои проекты</h2>
      <ProjectList>
        {projects &&
          projects.length &&
          projects.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectImage src={project.image} alt="Изображение проекта" />
              <ProjectDescription>
                <h3>{project.name}</h3>
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.opinion}</p>
                <ProjectLink href={project.link}>
                  Ссылка на пример проекта
                </ProjectLink>
                <ProjectLink href={project.repolink}>
                  Ссылка на репозиторий
                </ProjectLink>
              </ProjectDescription>
            </ProjectItem>
          ))}
      </ProjectList>
    </ProjectSection>
  );
}
