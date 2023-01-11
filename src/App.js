import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'aanchal59', // Your GitHub org/user name. (Required)
          sortBy: 'stars', // stars | updated
          limit: 10, // How many projects to display.
          exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
          },
        },
        social: {
          linkedin: 'aanchal-negi-6a8679216',
          instagram: 'aa._.challll',
          dribbble: '',
          behance: '',
          
          stackoverflow: '', // format: userid/username
          website: 'https://arifszn.com',
          phone: '',
          email: 'aanchalnegi59@gmail.com',
        },
        resume: {
          fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
        },
        skills: [
          'C++',
          'QT5',
          'HTML',
          'CSS',
          'Python',
          'JavaScript',
          'React.js',
          'Node.js',
          'MySQL',
          'Git',
          'Tailwind',
          'CoreJava'
        ],
        experiences: [
          {
            company: 'Kommunicate',
            position: 'Software Developer Intern',
            from: 'January 10,2022',
            to: 'March 17,2022',
            companyLink: 'https://www.kommunicate.io/',
          },
          {
            company: 'Bharat Electronics Limited',
            position: 'Trainee',
            from: 'July 2019',
            to: 'August 2021',
            companyLink: 'https://ghaziabad.nic.in/en/public-utility/bharat-electronics-limited/',
          },
        ],
        education: [
          {
            institution: 'Govind Ballabh Pant Institute Of Engineering and Technology,Pauri Garhwal',
            degree: 'B.tech',
            from: '2019',
            to: '2023',
          },
          {
            institution: 'SGMSS',
            degree: 'Intermediate',
            from: '2018',
            to: '2019',
          },
          {
            institution: 'SFS, Indirapuram',
            degree: 'High School',
            from: '2016',
            to: ' 2017'
          }
        ],
        // To hide the `Other Projects` section, keep it empty.
        /*externalProjects: [
          {
            title: 'Project Name',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
            imageUrl: 'https://via.placeholder.com/250x250',
            link: 'https://example.com',
          },
          {
            title: 'Project Name',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
            imageUrl: 'https://via.placeholder.com/250x250',
            link: 'https://example.com',
          },
        ],*/
        // Display blog posts from your medium or dev account. (Optional)
        blog: {
          source: 'dev', // medium | dev
          username: 'arifszn', // to hide blog section, keep it empty
          limit: 3, // How many posts to display. Max is 10.
        },
        googleAnalytics: {
          id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        },
        // Track visitor interaction and behavior. https://www.hotjar.com
        hotjar: {
          id: '',
          snippetVersion: 6,
        },
        themeConfig: {
          defaultTheme: 'business',

          // Hides the switch in the navbar
          // Useful if you want to support a single color mode
          disableSwitch: false,

          // Should use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultTheme
          respectPrefersColorScheme: false,

          // Hide the ring in Profile picture
          hideAvatarRing: false,

          // Available themes. To remove any theme, exclude from here.
          themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
          ],

          // Custom theme
          customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
          },
        },
      }}
    />
  );
}

export default App;
