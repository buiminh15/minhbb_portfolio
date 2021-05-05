export const skillsData = [
  { name: 'html', category: 'frontend' },
  { name: 'css', category: 'frontend' },
  { name: 'javascript', category: 'language' },
  { name: 'react', category: 'frontend' },
  { name: 'angular', category: 'frontend' },
  { name: 'node.js', category: 'backend' },
  { name: 'express.js', category: 'backend' },
  { name: 'mongodb', category: 'database' },
  { name: 'VBA', category: 'excel' },
];

skillsData.forEach((e, i) => (e.id = i));

export const projectsData = [
  {
    name: 'Unsplash Copycat',
    description: `Web app built with the MERN stack. We are
                  using passport-local(for authentication), sendmail(for verification) in backend and
                  using react-i18next (for multi languages) in frontend.
                  Login test:<br>
                  <b>username:</b> wewik92609@mailrnl.com, <b>password:</b> 123`,
    imgName: 'unsplash.png',
    siteUrl: 'https://photo-library-467.herokuapp.com/',
    githubUrl: 'https://github.com/teamcode24',
  },
  {
    name: 'D5-Tools',
    description: `Coding tools for division which purpose is 
    increasing productivity of each member in team. (Status: Coding)`,
    imgName: 'unsplash.png',
    siteUrl: 'https://d-tools-2.herokuapp.com/',
    githubUrl: '',
  },
  {
    name: 'ipsum',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam ut vestibulum sem. In tincidunt urna eu orci semper ornare. 
    Vestibulum dolor dui, malesuada vel arcu vel, efficitur sodales diam. 
    Cras at mi eget dolor viverra vestibulum vitae id ipsum. 
    Mauris diam purus, sodales nec suscipit eleifend, interdum eu justo. `,
    imgName: '',
    siteUrl: '',
    githubUrl: '',
  },
];

projectsData.forEach((e, i) => (e.id = i));
