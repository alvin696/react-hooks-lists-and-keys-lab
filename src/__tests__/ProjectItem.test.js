import React from 'react';
import { render } from '@testing-library/react';
import ProjectItem from '../ProjectItem';

test('renders project title, description, and technologies', () => {
  const project = {
    id: 1,
    title: 'Test Project',
    description: 'This is a test project',
    technologies: ['React', 'Jest'],
  };

  const { getByText } = render(<ProjectItem project={project} />);

  expect(getByText(project.title)).toBeInTheDocument();
  expect(getByText(project.description)).toBeInTheDocument();
  expect(getByText('Technologies:')).toBeInTheDocument();
  project.technologies.forEach((technology) => {
    expect(getByText(technology)).toBeInTheDocument();
  });
});
