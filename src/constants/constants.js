export const projects = [
  
  
  {
    title: 'TaxCalculator REST API',
    description: "Created a Web API which calculates a persons tax according to their postal code,the API is secured using JWT Token Based Authentication which is role bassed,sign in is created for admin users,deployed using CI/CD piplines on Azure DevOps and Azure App service",
    image: '/images/taxcalcapi.png',
    tags: ['ASP .NET CORE',"C#", 'SQL Server','SQL','JWT','XUnit','Azure','CI/CD','Github','Azure Key Vualt','YML'],
    source: 'https://github.com/NduduzoN/TaxCalculator.git',
    visit: 'https://taxcalculatorapi.azurewebsites.net',
    id: 0,
  },
  {
    title: 'TaxCalculator MVC Web App',
    description: "Created client side application that connects to the Tax Calculator API I created to calculate a persons tax contribution,deployed using CI/CD piplines on Azure DevOps and Azure App service",
    image: '/images/taxCalcPic.png',
    tags: ['MVC',"C#", 'CSS','Bootstrap','JSON', 'HTML','CI/CD','Azure'],
    source: 'https://github.com/NduduzoN/TaxCalculator.git',
    visit: 'https://taxcalculatorwebapp.azurewebsites.net',
    id: 0,
  },
  {
    title: 'Portfolio Page',
    description: "I used react.js(Next.js) framework, CSS, and HTML to make smooth and responsive components",
    image: '/images/devportfoliopic.png',
    tags: ['Javascript', 'CSS', 'Next.js', 'HTML','React'],
    source: 'https://github.com/NduduzoN/Nduduzo-Gift-Ndabandaba-Software-Engineering-Portfolio',
    visit: 'https://nduduzo-gift-ndabandaba-software-engineering-portfolio.vercel.app/',
    id: 0,
  }
];

export const TimeLineData = [
  { year: 2015, text: 'Went to Tshwane University of Technology For Software Dev National Deploma', },
  { year: 2017, text: 'Worked for the Univeristy Health and Wellness department', },
  { year: 2018, text: 'Wrote my first ecommerce fullstack web application for a friends small business', },
  { year: 2020, text: 'Completed my studies at the Tshwane University of Technology and started my inservice training', },
  { year: 2021, text: 'Graduated for Software Dev National Deploma ,while working for Gold Valley Casinos as a CCTV Operator', },
  { year: 2022, text: 'Started a fullstack engineer Job at Payspace(Insight IT Solutions)', },
];