export default class DataService {
  _data = {
    projectRepo: 'https://github.com/erkmenesen/erkmenesen.com',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "My name is Simon Farruqui and I'm currently a high school senior studying and boarding at Milton Academy.",
            "My parents are first-generation immigrants from Bangladesh. I grew up in Huntington, New York for seven years and Frisco, Texas for another seven years before attending Milton Academy in Massachusetts starting September 2021.",
            'Growing up as a Bengali-American, I was fascinated by the "Made in Bangladesh" clothing labels while shopping and the post-1972 government formation of Bangladesh, from its Constitution to its U.S. diplomatic ties, sparking my early interests in economics, political science, and social studies.',
            'From my ancestral home to my school, daily experiences enriched by my involvement in humanitarian aid, public forum debate, and educational reform have fueled my ambition to meld these academic interests, crafting data-driven policies that tackle socio-economic issues head-on.',
            "In the future, I hope to lead sustainable development initiatives, ensuring that every country's unique strengths are recognized and  nurtured through appropriate reforms or stimuli to unlock their full potential.",
            'Outside of academics, I enjoy playing the alto saxophone, chess, and tennis; learning new languages; and traveling to explore diverse cultures and traditions.',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          workExperience: [
            {
              jobTitle: 'Founder and Chief Executive Officer',
              company: 'Walivest',
              location: 'Hamburg',
              period: 'MAR 2023 - PRESENT',
              accomplishments: [
                'Founded a youth-led nonprofit supporting South Asia’s disaster-vulnerable communities, improving schools, aiding hundreds of fishermen, advancing sustainable development through extensive policy briefs, and featured on Bangla TV for impact initiatives.',
              ],
              resumeLink: 'https://walivest.org/'
            },
            {
              jobTitle: 'Chief Operating Officer',
              company: 'StockSense',
              location: 'Istanbul',
              period: 'SEP 2023 - PRESENT',
              accomplishments: [
                'Launched a civil society organization leveraging an app to mobilize 100+ youths for mandated personal finance education, co-developed a comprehensive financial literacy app with 5,000+ users, testified for financial education legislation at the Massachusetts State House, and featured on CBS News Boston.',
              ],
              resumeLink: 'https://thestocksense.org/'
            },
            {
              jobTitle: 'Editor-In-Chief & Layout Editor',
              company: 'Centre Street Journal',
              location: 'Istanbul',
              period: 'JUN 2023 - PRESENT',
              accomplishments: [
                "Established and managed school's largest special interest publication with a 40-member team, directed marketing with digital collateral and a SquareSpace website, produced weekly economic news debriefs, and launched the Junior Economic Forum podcast, blending economic history with policy to better inform citizens on today's economic policies.",
              ],
              resumeLink: 'https://www.centrestreetjournal.com/'
            },
            
            {
              jobTitle: 'Curriculum Developer',
              company: 'Greater Boston STEM Program',
              location: 'Istanbul',
              period: 'SEP 2022 - DEC 2023',
              accomplishments: [
                "Designed weekly mathematics competition curriculum for K-8 students; developed gbSTEM's most rigorous math course (Math V) with bi-weekly lesson plans, introduced LaTeX, and prepped students for national contests; instructed advanced computer science topics including Object-Oriented Programming and machine learning.",
              ],
              resumeLink: 'https://gbstem.org/'
            },
          ],
          education: [
            {
              degree: 'Milton Academy',
              institution: '2021 - 2025',
              period: '2015 - 2019',
              details: [
                'Relevant Coursework: Statistics • Calculus • Web Development • Behavioral Economics • Environmental Science • American Government • Spanish 3',
                'Activities: Founder and Head of Microfinance Club • Co-Head of Economics Club • Secretary-General of Model United Nations Team • Co-Head of Muslim Students Association • Varsity Speech & Debate Team • Public Issues Board',
              ],
            },
            {
              degree: 'Harvard Extension School',
              institution: '2022 - 2023',
              period: '2015 - 2019',
              details: [
                'Undergraduate Degree Credit: Neuroinvesting (A), Game Theory (A-) • Principles of Economics (A)',
              ],
            },
          ],
          honors: [
            {
              name: 'Boys Nation U.S. Senator',
              institution: 'Massachusetts American Legion Boys State',
              year: 'Jun 2024',
              
            },
            {
              name: 'First Class Distinction',
              institution: 'National Council of Teachers of English Achievement Awards in Writing',
              year: 'May 2024',
              
            },
            {
              name: '1st Place Massachusetts Team',
              institution: 'National Personal Finance Challenge',
              year: 'Apr 2024',
            },
            {
              name: '2nd Place Massachusetts Team',
              institution: 'National Economics Challenge Adam Smith Division',
              year: 'Apr 2024',
            },
            {
              name: '2nd Place Award',
              institution: 'Massachusetts Science & Engineering Fair',
              year: 'Apr 2024',
              
            },
            {
              name: 'Benjamin Franklin Transatlantic Fellowship',
              institution: 'U.S. Department of State',
              year: 'Mar 2024',
            },
            {
              name: 'Top 100 from 9800 Business Pitches',
              institution: 'Blue Ocean Student Entrepreneur Pitch Competition',
              year: 'Mar 2024',
              
            },
            {
              name: 'National Security Language Initiative for Youth scholarship',
              institution: 'U.S. Department of State',
              year: 'Mar 2024',
            },
            {
              name: 'Best Delegate',
              institution: 'Suffolk University’s Greater Boston Model United Nations Conference',
              year: 'Oct 2023',
            },
            {
              name: 'Best Public Speaker',
              institution: 'Northeastern University’s Rising Leaders Model United Nations Conference',
              year: 'May 2023',
            },
            {
              name: '3rd Place Massachusetts Team',
              institution: 'National Economics Challenge Adam Smith Division',
              year: 'Apr 2023',
            },
            {
              name: '4th Place Massachusetts Team',
              institution: 'National Economics Challenge David Ricardo Division',
              year: 'Apr 2022',
            },
            {
              name: 'Triple-Octafinalist in Novice Public Forum Debate',
              institution: 'Harvard National Forensics Tournament',
              year: 'Feb 2022',
            },
            {
              name: 'Broadcom MASTERS Nominee',
              institution: 'Society for Science',
              year: 'Jun 2021',
            },
            {
              name: '3rd Place in Mathematics',
              institution: 'Texas Science and Engineering Fair',
              year: 'Apr 2021',
            },
            {
              name: '1st Place in Mathematics',
              institution: 'Dallas Regional Science and Engineering Fair',
              year: 'Feb 2021',
            },
            {
              name: 'Award for Statistical Excellence',
              institution: 'American Statistical Association',
              year: 'Feb 2021',
            },
            // Additional honors entries
          ],
        },
      },
      {
        id: 'projects',
        name: 'News.txt',
        icon: 'progman_25',
        
        content: {
          projects: [
              {
                  title: 'Walivest',
                  links: [
                    { url: 'https://youtu.be/QtHWnOTkAOw', text: 'Bangla TV' },
                    { url: 'https://www.daily-bangladesh.com/english/country/86278', text: 'Daily Bangladesh' },
                    { url: 'https://youtu.be/WVgE9_n8gKI?feature=shared', text: 'World Bangla News' },
                    { url: 'https://www.youtube.com/watch?v=mDvZlsdmGqk&ab_channel=Bhola24News', text: 'Bhola 24 News' },
                    { url: 'https://www.sunnews24x7.com/news/article/bangladesh/89641', text: 'Sun News' },
                    { url: 'https://www.ajkerbhola.com/30435', text: 'Ajker Bhola' },
                ]
              },
              {
                  title: 'StockSense',
                  links: [
                    { url: 'https://www.boston25news.com/news/we-dont-get-taught-personal-finance-local-students-push-more-education-money-matters/958ab9d2-9238-4985-b72b-a6f39815025d/', text: 'Boston 25' },
                    { url: 'https://youtu.be/-MmML9VS6m8?si=t6ChTwOgjWBvphWs', text: 'CBS News Boston' },
                    { url: 'https://www.bizjournals.com/boston/inno/stories/news/2024/01/17/milton-academy-financial-app-teens.html', text: 'Boston Business Journal' },
                    { url: 'https://wbznewsradio.iheart.com/content/milton-academy-students-create-stocksense-app-for-youth-financial-literacy', text: 'WBZ News Radio 1030' },
                    { url: 'https://kiss108.iheart.com/content/milton-academy-students-create-stocksense-app-for-youth-financial-literacy/', text: 'Kiss 108' },
                    { url: 'https://www.milton.edu/financial-literacy/', text: 'Milton Academy' },
                    { url: 'https://thestocksense.org/wp-content/uploads/2024/02/MiltonTimes_20240208-1-1.pdf', text: 'Milton Times' },
                    { url: 'https://themiltonpaper.com/opinion/2024/9/29/milton-should-have-a-financial-literacy-course', text: 'Milton Paper' }
                ]
              },
              {
                title: 'Boys Nation',
                links: [
                  { url: 'https://www.milton.edu/milton-senior-elected-boys-nation-senator/', text: 'Milton Academy' },
                  { url: 'https://en.wikipedia.org/wiki/Boys_Nation', text: 'Wikipedia' },
                  { url: 'https://register.legion.org/sites/legion.org/modules/custom/boysnation/bn_registration/bn_docs/2024/legislative/2024_ma_res_farruqui_simon_1609.pdf', text: 'American Legion' },
              ]
            },
          ],
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'Feel free to contact me via email at',
          email: ' simonfarruqui25@gmail.com',
          socialText: 'Or you can reach me through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/simonfarruqui/',
            },
            {
              name: 'FaTwitter',
              link: 'https://x.com/SimonFarruqui',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/simonfarruqui/',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}