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
                  using redux-persist(save states in local storage) and react-i18next (for multi languages) in frontend.
                  Login test:<br>
                  <b>username:</b> wewik92609@mailrnl.com, <b>password:</b> 123`,
    imgName: 'unsplash.png',
    siteUrl: 'https://photo-library-467.herokuapp.com/',
    githubUrl: 'https://github.com/teamcode24',
  },
  {
    name: 'Dashboard box',
    description: `Single Page Application (SPA) implemented with React, I used the 
                  movie database API to fetch dynamic data to the app. Check repo on 
                  GitHub for more information.`,
    imgName: 'dashboard-box.png',
    siteUrl: 'https://dashboardbox.netlify.com/#/',
    githubUrl: 'https://github.com/Gilbert1391/dashboardbox',
  },
  {
    name: 'Bryant hill',
    description: `I built this website thinking about real estate, 
                  it has galleries and individual listing pages. 
                  I integrated some vanilla JavaScript functionalities.`,
    imgName: 'bryant-hill.png',
    siteUrl: 'https://gilbert1391.github.io/Bryant-Hill/',
    githubUrl: 'https://github.com/Gilbert1391/Bryant-Hill',
  },
];

projectsData.forEach((e, i) => (e.id = i));
