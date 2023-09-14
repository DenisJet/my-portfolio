import React from 'react';
import {
  ProjectSection,
  ProjectImage,
  ProjectList,
  ProjectItem,
  ProjectDescription,
  ProjectLink,
  TabsList,
  TabBtn,
} from './styled';
import { useState } from 'react';

export default function Projects({ projects, className }) {
  const [activeTab, setActiveTab] = useState('коммерческие');

  const activeProjects = projects.filter((project) => project.type === activeTab);

  return (
    <ProjectSection className={className}>
      <TabsList>
        <h2>Мои проекты:</h2>
        <TabBtn
          isActive={activeTab === 'коммерческие'}
          onClick={() => setActiveTab('коммерческие')}
        >
          коммерческие
        </TabBtn>
        <TabBtn isActive={activeTab === 'pet-проекты'} onClick={() => setActiveTab('pet-проекты')}>
          pet-проекты
        </TabBtn>
        <TabBtn isActive={activeTab === 'учебные'} onClick={() => setActiveTab('учебные')}>
          учебные
        </TabBtn>
      </TabsList>

      <ProjectList>
        {activeProjects &&
          activeProjects.length &&
          activeProjects.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectImage src={project.image} alt='Изображение проекта' />
              <ProjectDescription>
                <h3>{project.name}</h3>
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.opinion}</p>
                {project.link && (
                  <ProjectLink href={project.link} target='blank'>
                    Ссылка на пример проекта
                  </ProjectLink>
                )}
                {project.repolinkFront && (
                  <ProjectLink href={project.repolinkFront} target='blank'>
                    Ссылка на репозиторий фронтенд
                  </ProjectLink>
                )}
                {project.repolinkBack && (
                  <ProjectLink href={project.repolinkBack} target='blank'>
                    Ссылка на репозиторий бэкенд
                  </ProjectLink>
                )}
              </ProjectDescription>
            </ProjectItem>
          ))}
      </ProjectList>
    </ProjectSection>
  );
}
