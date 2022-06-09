import ass10 from '../../assets/ass-10.png';
import ass11 from '../../assets/ass-11.png';
import car from '../../assets/car.png';
import typing from '../../assets/typing.png';
import doctor from '../../assets/doctor.png';
export const ProjectData = [
    {
        id: 1,
        title: 'Eco-Electronics Warehouse Managment website',
        about: 'This is a Full Stack warehouse inventory system where after creating account with email or github, user can search inventory and add their products for store also can deliver and update them on their needs. It has  proper authentication and CRUD functionality with a responsive UI design of the warehouse website.',
        tags: ["ReactJS", "NodeJS", "HTML", "CSS", "React-Toast", "React-Font-Awesome", "Firebase", "MongoDB", "ExpressJS", "ReChart", "Heroku", "Bootstrap", "React-Helmet", "JWT token"],
        client:'https://github.com/mehedi-hasan-shuvon/assignment-11-client-side',
        server:'https://github.com/mehedi-hasan-shuvon/assignment-11-server',
        demo: 'https://assignment-11-eco-warehouse.web.app/',
        image: ass11,
    },
    {
        id: 5,
        title: 'Doctors Portal Management Website',
        about: 'This project have both night and day mode theme and can calculate typing speed in cwm, wpm.',
        tags: ["ReactJS", "NodeJS", "HTML", "CSS", "React-Toast", "React-Font-Awesome", "Firebase", "MongoDB", "ExpressJS", "Heroku", "Tailwind", "DaisyUI", "JWT token", "Stripe payment", "React-day-picker"],
        demo: 'https://typing-speed-tracker-js.netlify.app/',
        client:'https://github.com/mehedi-hasan-shuvon/doctors-portal-client-side',
        server:'https://github.com/mehedi-hasan-shuvon/doctors-portal-server',
        image: doctor,
    },
    {
        id: 3,
        title: 'Independent Service Provider website',
        about: 'This is a ReactJs project with react-bootstrap, Firebase, react-route,react-font awesome implemented.the main functionality. In this project personal service showcase with proper authentication system and verification.',
        tags: ["ReactJS", "React-Bootstrap", "React-Toast", "Firebase", "React-Font-Awesome", "HTML", "CSS"],
        github:'https://github.com/mehedi-hasan-shuvon/assignment-10-tutor',
        demo: 'https://assignment-10-tutor-master.web.app/',
        image: ass10,
    },
    {
        id: 2,
        title: 'Genius Car Services Project',
        about: 'This is a full-stack MERN project with MongoDB database and CURD operation.This website main purpose to give car service an add new service and also can order them with full CRUD functionality.',
        tags: ["ReactJS", "NodeJS", "HTML", "CSS", "Firebase", "MongoDB", "ExpressJS", "React-Toast", "ReChart", "React-Font-Awesome", "Heroku", "Bootstrap"],
        demo: 'https://genius-car-services-73cf1.web.app/',
        github: 'https://github.com/mehedi-hasan-shuvon/genius-car-services-react-project',
        image: car,
    },

    {
        id: 4,
        title: 'Typing Speed Tracker Project',
        about: 'a Full Stack website with a role-based authentication system (patient and admin)Patients can select a date and book their slot and from the dashboard can also pay with Stripe payment. Admin can assign doctors and manage users.',
        tags: ["HTML", "CSS", "Bootstarp", "JavaScript"],
        demo: 'https://typing-speed-tracker-js.netlify.app/',
        github: 'https://github.com/mehedi-hasan-shuvon/typing-test-project-javascript',
        image: typing,
    },

]