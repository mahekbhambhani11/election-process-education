export const electionData = {
  us: {
    id: 'us',
    name: 'United States',
    description: 'The US presidential election is an indirect election in which citizens of the United States who are registered to vote in one of the fifty U.S. states or in Washington, D.C., cast ballots not directly for those offices, but instead for members of the Electoral College.',
    timeline: [
      {
        id: 'registration',
        title: 'Voter Registration',
        date: 'Varies by state (usually 15-30 days before election)',
        description: 'Ensure you are registered to vote in your state. Requirements vary, but generally, you must be a US citizen, a resident of the state, and 18 years old by Election Day.',
        icon: 'UserPlus',
        link: 'https://vote.gov/'
      },
      {
        id: 'primaries',
        title: 'Primaries and Caucuses',
        date: 'Spring/Summer',
        description: 'Voters choose their party\'s candidate for the general election. Primaries use secret ballots, while caucuses are local gatherings where voters decide openly.',
        icon: 'Users',
        link: 'https://www.usa.gov/primaries-caucuses'
      },
      {
        id: 'conventions',
        title: 'National Conventions',
        date: 'Late Summer',
        description: 'Political parties officially nominate their presidential and vice-presidential candidates.',
        icon: 'Flag',
        link: 'https://www.usa.gov/national-conventions'
      },
      {
        id: 'campaign',
        title: 'General Campaign',
        date: 'Fall',
        description: 'Candidates campaign nationwide, participate in debates, and outline their platforms.',
        icon: 'Megaphone',
        link: 'https://www.fec.gov/introduction-campaign-finance/understanding-ways-support-federal-candidates/'
      },
      {
        id: 'election-day',
        title: 'Election Day',
        date: 'First Tuesday after the first Monday in November',
        description: 'Voters cast their ballots. Many states also offer early voting or mail-in voting prior to this date.',
        icon: 'Vote',
        link: 'https://www.usa.gov/election-day'
      },
      {
        id: 'electoral-college',
        title: 'Electoral College Votes',
        date: 'Mid-December',
        description: 'Electors meet in their respective states to cast their official votes for President and Vice President.',
        icon: 'Landmark',
        link: 'https://www.archives.gov/electoral-college'
      }
    ],
    faqs: [
      {
        question: 'How do I register to vote?',
        answer: 'You can often register online, by mail, or in person at your local election office, DMV, or other designated locations. Check vote.gov for state-specific instructions.'
      },
      {
        question: 'Do I need an ID to vote?',
        answer: 'Voter ID laws vary by state. Some require a photo ID, some require non-photo ID, and others have no ID requirement at the polls. Always check your state\'s rules.'
      },
      {
        question: 'What is the Electoral College?',
        answer: 'It\'s a process where 538 electors cast the official votes for President. A candidate needs a majority of 270 electoral votes to win. Each state gets electors based on its congressional representation.'
      }
    ]
  },
  in: {
    id: 'in',
    name: 'India',
    description: 'India has a parliamentary system. Voters elect representatives to the Lok Sabha (lower house of parliament). The party or coalition with a majority forms the government, and its leader becomes the Prime Minister.',
    timeline: [
      {
        id: 'voter-roll',
        title: 'Electoral Roll Registration',
        date: 'Ongoing, special drives before elections',
        description: 'Citizens aged 18 and above must register on the electoral roll to obtain an Electors Photo Identity Card (EPIC) or Voter ID.',
        icon: 'UserPlus',
        link: 'https://voters.eci.gov.in/'
      },
      {
        id: 'announcement',
        title: 'Election Announcement',
        date: 'A few months before term ends',
        description: 'The Election Commission of India (ECI) announces the election schedule, activating the Model Code of Conduct.',
        icon: 'Calendar',
        link: 'https://eci.gov.in/elections/election/'
      },
      {
        id: 'nominations',
        title: 'Filing Nominations',
        date: 'As per ECI schedule',
        description: 'Candidates file their nomination papers, which are scrutinized by the Returning Officer.',
        icon: 'FileText',
        link: 'https://eci.gov.in/candidate-political-parties/'
      },
      {
        id: 'campaign',
        title: 'Campaigning',
        date: 'Ends 48 hours before polling',
        description: 'Candidates and parties campaign through rallies, door-to-door visits, and media.',
        icon: 'Megaphone',
        link: 'https://eci.gov.in/mcc/'
      },
      {
        id: 'polling',
        title: 'Polling Day(s)',
        date: 'Often in multiple phases',
        description: 'Voters cast their votes using Electronic Voting Machines (EVMs) equipped with VVPAT (Voter Verifiable Paper Audit Trail) at designated polling booths.',
        icon: 'Vote',
        link: 'https://eci.gov.in/evm/'
      },
      {
        id: 'results',
        title: 'Counting and Results',
        date: 'Usually a single day for all phases',
        description: 'Votes are counted, and results are declared. The party/coalition with over 272 seats in the Lok Sabha forms the government.',
        icon: 'Trophy',
        link: 'https://results.eci.gov.in/'
      }
    ],
    faqs: [
      {
        question: 'How do I get a Voter ID card?',
        answer: 'You can apply online via the National Voters\' Services Portal (NVSP) or the Voter Helpline App by filling Form 6.'
      },
      {
        question: 'What is an EVM?',
        answer: 'An Electronic Voting Machine (EVM) is a device used to record votes electronically, making the process faster and more secure compared to paper ballots.'
      },
      {
        question: 'What is the Model Code of Conduct?',
        answer: 'It\'s a set of guidelines issued by the ECI for political parties and candidates to ensure free and fair elections, preventing the ruling party from misusing its power.'
      }
    ]
  },
  uk: {
    id: 'uk',
    name: 'United Kingdom',
    description: 'The UK has a parliamentary democracy. Voters in local constituencies elect Members of Parliament (MPs) to the House of Commons. The leader of the party with the most MPs typically becomes Prime Minister.',
    timeline: [
      {
        id: 'registration',
        title: 'Electoral Register',
        date: 'Register by 12 working days before election',
        description: 'You must be on the electoral register to vote. You can register online if you are a British, Irish, or qualifying Commonwealth citizen residing in the UK and aged 18 or over.',
        icon: 'UserPlus',
        link: 'https://www.gov.uk/register-to-vote'
      },
      {
        id: 'dissolution',
        title: 'Dissolution of Parliament',
        date: '25 working days before election',
        description: 'Parliament is dissolved, and every seat in the House of Commons becomes vacant.',
        icon: 'Landmark',
        link: 'https://www.parliament.uk/about/how/elections-and-voting/general/'
      },
      {
        id: 'campaign',
        title: 'Election Campaign',
        date: '5-6 weeks',
        description: 'Candidates campaign locally, and party leaders campaign nationally, launching their manifestos.',
        icon: 'Megaphone',
        link: 'https://www.electoralcommission.org.uk/voting-and-elections'
      },
      {
        id: 'polling',
        title: 'Polling Day',
        date: 'Usually a Thursday, 7am to 10pm',
        description: 'Voters go to polling stations to vote for their local MP using a First-Past-The-Post system.',
        icon: 'Vote',
        link: 'https://www.gov.uk/how-to-vote'
      },
      {
        id: 'counting',
        title: 'Overnight Counting',
        date: 'Election night',
        description: 'Ballot boxes are taken to counting centres. Results for individual constituencies are declared throughout the night.',
        icon: 'Trophy',
        link: 'https://www.parliament.uk/about/how/elections-and-voting/general/results/'
      },
      {
        id: 'formation',
        title: 'Formation of Government',
        date: 'Day after election',
        description: 'If a party wins an absolute majority (326 seats), its leader is invited by the Monarch to form a government. Otherwise, a hung parliament results, leading to coalition talks.',
        icon: 'Crown',
        link: 'https://www.parliament.uk/about/how/role/parliament-government/'
      }
    ],
    faqs: [
      {
        question: 'Do I need photo ID to vote in the UK?',
        answer: 'Yes, as of recently, you need to show an accepted form of photo ID to vote in person at a polling station in UK parliamentary elections.'
      },
      {
        question: 'What is a hung parliament?',
        answer: 'A hung parliament occurs when no single political party wins an absolute majority of seats in the House of Commons.'
      },
      {
        question: 'Can I vote by post?',
        answer: 'Yes, anyone on the electoral register can apply for a postal vote, but you must apply before the specific deadline for the election.'
      }
    ]
  }
};
