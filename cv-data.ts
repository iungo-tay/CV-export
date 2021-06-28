let rawdata = `[
  {
    "qualifications": [
      {
        "qualificationId": "qualifications/7567669",
        "qualificationRef": "100/5022/X",
        "name": "ILM Level 5 Certificate in Leadership",
        "startDate": "02/09/2019",
        "endDate": "31/03/2020",
        "provider":"Leadership School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7573344",
        "qualificationRef": "601/7870/X",
        "name": "CIPD Level 5 Certificate In Human Resource Management",
        "startDate": "02/09/2019",
        "endDate": "01/07/2020",
        "provider":"HR School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7592766",
        "qualificationRef": "UGBF510",
        "name": "Undergraduate Bachelors Degree - Astrophysics",
        "startDate": "21/09/2012",
        "endDate": "04/07/2015",
        "provider":"University",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7562129",
        "qualificationRef": "100/3602/7",
        "name": "City & Guilds Level 3 Certificate in Electrotechnical Technology",
        "startDate": "19/09/2012",
        "endDate": "19/09/2013",
        "provider":"Electronics School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7562156",
        "qualificationRef": "100/3569/2",
        "name": "City & Guilds Level 2 Certificate in Electrotechnical Technology",
        "startDate": "05/09/2012",
        "endDate": "16/07/2013",
        "provider":"Electronics School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7560654",
        "qualificationRef": "500/8097/0",
        "name": "Pearson BTEC Level 3 Extended Diploma in Electrical/Electronic Engineering (QCF)",
        "startDate": "03/09/2012",
        "endDate": "30/06/2014",
        "provider":"Electronics School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7570052",
        "qualificationRef": "500/4182/4",
        "name": "WJEC Level 3 Extended Project",
        "startDate": "06/09/2010",
        "endDate": "17/07/2012",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7570204",
        "qualificationRef": "100/3831/0",
        "name": "WJEC Level 3 Key Skills in Improving Own Learning and Performance",
        "startDate": "05/09/2010",
        "endDate": "20/07/2012",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7570163",
        "qualificationRef": "500/6844/1",
        "name": "WJEC Level 3 Essential Skills Wales  in Communication",
        "startDate": "05/09/2010",
        "endDate": "20/07/2012",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7570208",
        "qualificationRef": "100/3835/8",
        "name": "WJEC Level 3 Key Skills in Problem Solving",
        "startDate": "05/09/2010",
        "endDate": "20/07/2012",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7545270",
        "qualificationRef": "603/1977/X",
        "name": "WJEC Level 3 Advanced GCE in Mathematics",
        "startDate": "05/09/2010",
        "endDate": "20/07/2012",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7570152",
        "qualificationRef": "500/1804/8",
        "name": "WJEC Level 3 Welsh Baccalaureate Advanced Diploma",
        "startDate": "05/09/2010",
        "endDate": "05/07/2012",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7562175",
        "qualificationRef": "100/4339/1",
        "name": "City & Guilds Level 3 Certificate for the Inspection and Testing of Electrical Equipment (Code of Practice for In-Service Inspection)",
        "startDate": "05/09/2010",
        "endDate": "08/07/2011",
        "provider":"Electronics School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7561098",
        "qualificationRef": "500/3451/0",
        "name": "City & Guilds Level 3 Certificate in the Requirements for Electrical Installations (BS 7671 June 2008)",
        "startDate": "05/09/2010",
        "endDate": "22/07/2011",
        "provider":"Electronics School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7562543",
        "qualificationRef": "100/2854/7",
        "name": "City & Guilds Level 3 NVQ in Electrotechnical Services",
        "startDate": "01/09/2010",
        "endDate": "04/11/2013",
        "provider":"Electronics School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7569987",
        "qualificationRef": "100/1123/7",
        "name": "WJEC Level 1/Level 2 GCSE in Electronics",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/9981452",
        "qualificationRef": "C00/1165/3",
        "name": "WJEC Level 1/Level 2 GCSE in Media Studies",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7569868",
        "qualificationRef": "500/7910/4",
        "name": "WJEC Level 1/Level 2 GCSE in English Language",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7570519",
        "qualificationRef": "600/9507/6",
        "name": "WJEC Level 1/Level 2 GCSE in English Literature",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/9981447",
        "qualificationRef": "C00/1152/0",
        "name": "WJEC Level 1/Level 2 GCSE in History",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7546008",
        "qualificationRef": "100/1150/X",
        "name": "EDEXCEL Level 1/Level 2 GCSE in Science: Single Award B",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7554404",
        "qualificationRef": "100/0904/8",
        "name": "OCR Level 1/Level 2 GCSE in Sociology",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7554243",
        "qualificationRef": "500/7764/8",
        "name": "OCR Level 1/Level 2 GCSE in Mathematics A",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7557028",
        "qualificationRef": "100/1136/5",
        "name": "AQA Level 1/Level 2 GCSE in Science: Single Award A",
        "startDate": "05/09/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      },
      {
        "qualificationId": "qualifications/7554324",
        "qualificationRef": "500/4545/3",
        "name": "OCR Level 1/Level 2 GCSE in Religious Studies B",
        "startDate": "05/02/2008",
        "endDate": "20/07/2010",
        "provider":"College / School",
        "grade":"A"
      }
    ],
    "apprenticeships": [
      {
        "apprenticeshipId": "apprenticeships/9976903",
        "name": "Electrotechnical",
        "startDate": "03/02/2021",
        "endDate": "03/02/2021",
        "Employer":"Apprenticeship",
        "grade":"A",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero."
      }
    ],
    "professionalRegistrations": [
      {
        "professionalRegistrationId": "professionalRegistrations/8899250",
        "name": "Chartered Quality Professional - Member of the Chartered Quality Institute",
        "startDate": "03/02/2021",
        "endDate": "03/02/2021"
      }
    ],
    "careerFrameworks": [
      {
        "careerFrameworkId": "careerFrameworks/8982183",
        "name": "Executive Manager",
        "personalJobTitle": "Co-Founder & Chief Executive Officer",
        "startDate": "21/01/2020",
        "endDate": "03/02/2021",
        "Employer":"iungo",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero. Curabitur vitae magna viverra lorem pharetra convallis. Mauris mauris arcu, tempor et pretium nec, fringilla eget orci. Donec iaculis lacus non elementum cursus. Donec mollis elementum purus in pulvinar. Suspendisse faucibus lobortis vehicula. Aenean laoreet commodo sapien, et congue dui lobortis non. In suscipit sodales tempor. Etiam nec ipsum et urna auctor tempor vitae ut nisl."
      },
      {
        "careerFrameworkId": "careerFrameworks/8982246",
        "name": "Production Manager",
        "personalJobTitle": "Operational Quality Manager",
        "startDate": "02/07/2018",
        "endDate": "13/07/2020",
        "Employer":"Sony",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero. Curabitur vitae magna viverra lorem pharetra convallis. Mauris mauris arcu, tempor et pretium nec, fringilla eget orci. Donec iaculis lacus non elementum cursus. Donec mollis elementum purus in pulvinar. Suspendisse faucibus lobortis vehicula. Aenean laoreet commodo sapien, et congue dui lobortis non. In suscipit sodales tempor. Etiam nec ipsum et urna auctor tempor vitae ut nisl."
      },
      {
        "careerFrameworkId": "careerFrameworks/8982812",
        "name": "Data Analytics Digital Engineer",
        "personalJobTitle": "Industry 4.0 Engineer",
        "startDate": "05/01/2016",
        "endDate": "01/07/2018",
        "Employer":"Sony",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero. Curabitur vitae magna viverra lorem pharetra convallis. Mauris mauris arcu, tempor et pretium nec, fringilla eget orci. Donec iaculis lacus non elementum cursus. Donec mollis elementum purus in pulvinar. Suspendisse faucibus lobortis vehicula. Aenean laoreet commodo sapien, et congue dui lobortis non. In suscipit sodales tempor. Etiam nec ipsum et urna auctor tempor vitae ut nisl."
      }
    ]
  }
]`;
let data = JSON.parse(rawdata);
// console.log(data[0].qualifications);
export const providers = groupQuals(data[0].qualifications);
// console.log(quals);
export const apprentice = data[0].apprenticeships;
export const profReg = data[0].professionalRegistrations;
export const workExperience = groupWork(data[0].careerFrameworks);
const personalStatement = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero. Curabitur vitae magna viverra lorem pharetra convallis. Mauris mauris arcu, tempor et pretium nec, fringilla eget orci. Donec iaculis lacus non elementum cursus. Donec mollis elementum purus in pulvinar. Suspendisse faucibus lobortis vehicula. Aenean laoreet commodo sapien, et congue dui lobortis non. In suscipit sodales tempor. Etiam nec ipsum et urna auctor tempor vitae ut nisl.`;

export const hobies_interests = [
  {
    name: 'hobby 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero.`
  },
  {
    name: 'hobby 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero.`
  },
  {
    name: 'hobby 3',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit ipsum, convallis in auctor sed, dapibus non justo. Fusce malesuada, ligula eu eleifend iaculis, enim risus mollis arcu, id blandit massa risus quis libero.`
  }
];
export const skills = [
  'maths',
  'science',
  'engineering',
  'leadership',
  'electrics',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc',
  'etc etc'
];

export const profile = {
  PHONE_NUMBER: '00000 000000',
  PROFILE_URL: 'linkdin.linkdin',
  EMAIL: 'email@email.com',
  NAME: 'name name',
  ADDRESS: ' 1 road road, London, XX XXX, UK',
  PERSONAL_STATEMENT: personalStatement,
  HOBBIES: hobies_interests,
  SKILLS: skills
};

function dateRemoveDay(date) {
  let dates = date.split('/');
  return dates[1] + '/' + dates[2];
}

function groupQuals(qualify) {
  let list = [];
  for (let qual of qualify) {
    // console.log(qual);
    let found = 0;
    for (let place of list) {
      if (place.name == qual.provider) {
        for (let dates of place.dates) {
          if (
            dates.startDate == dateRemoveDay(qual.startDate) &&
            dates.endDate == dateRemoveDay(qual.endDate)
          ) {
            dates.qualifications.push(qual);
            found = 1;
          }
        }
        if (found == 0) {
          place.dates.push({
            startDate: dateRemoveDay(qual.startDate),
            endDate: dateRemoveDay(qual.endDate),
            qualifications: [qual]
          });
          found = 1;
        }
      }
    }
    // console.log(found);
    if (found == 0) {
      list.push({
        name: qual.provider,
        dates: [
          {
            startDate: dateRemoveDay(qual.startDate),
            endDate: dateRemoveDay(qual.endDate),
            qualifications: [qual]
          }
        ]
      });
    }
  }
  // console.log(list);
  return list;
}

function groupWork(jobs) {
  let list = [];
  for (let job of jobs) {
    let found = 0;
    for (let place of list) {
      if (place.Employer == job.Employer) {
        place.jobs.push(job);
        found = 1;
      }
    }
    if (found == 0) {
      list.push({
        Employer: job.Employer,
        jobs: [job]
      });
    }
  }
  return list;
}
