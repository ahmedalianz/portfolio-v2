import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import Projects from "components/Projects/Projects";

const projects = [
  {
    id: 1,
    name: "Netflix Clone",
    image: "/assets/projects/netflix/1.png",
    link: "https://netflex-nine.vercel.app/",
    logo: "/assets/projects/netflix/netflixlogo.png",
    github: "https://github.com/ahmedalianz/netflix-Clone",
    techs: ["React", "SCSS", "i18next"],
    assets: [
      "/assets/projects/netflix/1.png",
      "/assets/projects/netflix/2.png",
      "/assets/projects/netflix/3.png",
      "/assets/projects/netflix/5.png",
      "/assets/projects/netflix/6.png",
      "/assets/projects/netflix/8.png",
    ],
    desc: "This Application Fetches the Popular Movies and Tv Shows From TMDB ,It's The Same Design Style As The Real Netflix , Manually Customized Components like Accordion & Floating Input Without any external Library , It Supports Two Languages (English & Arabic), It's Also Very responsive Design",
  },
  {
    id: 2,
    name: "Sprout Social",
    image: "/assets/projects/sprout/1.png",
    link: "https://sprout-social.vercel.app/",
    logo: "/assets/projects/sprout/sproutlogo.png",
    github: "https://github.com/ahmedalianz/social-React-Redux-MogoDb",
    techs: ["React", "Redux", "Node", "Express", "MongoDB", "Bootstrap"],
    assets: [
      "/assets/projects/sprout/1.png",
      "/assets/projects/sprout/2.png",
      "/assets/projects/sprout/3.png",
      "/assets/projects/sprout/4.png",
    ],
    desc: "In This Application You Can Sign up or login to your account , You can create a post , like it , comment on it ,search for people,view & Edit Your Profile , and more , It's also very responsive Design",
  },
  {
    id: 3,
    name: "Electronics Store",
    image: "/assets/projects/store/1.png",
    link: "https://electronicz-store.vercel.app/",
    logo: "/assets/projects/store/storelogo.png",
    github: "https://github.com/ahmedalianz/E-commerce-react-redux",
    techs: ["React", "Redux", "Node", "Express", "MongoDB", "Bootstrap"],
    assets: [
      "/assets/projects/store/1.png",
      "/assets/projects/store/2.png",
      "/assets/projects/store/3.png",
      "/assets/projects/store/4.png",
      "/assets/projects/store/5.png",
      "/assets/projects/store/6.png",
      "/assets/projects/store/7.png",
      "/assets/projects/store/8.png",
    ],
    desc: "In This Application You Can view all the products , add to cart , checkout , and more ,it Supports Arabic Language, It's also very responsive Design",
  },
  {
    id: 4,
    name: "Pizza Ordering App",
    image: "/assets/projects/pizza/1.png",
    link: "https://pizza-sooty.vercel.app/",
    github: "https://github.com/ahmedalianz/pizza",
    techs: ["React", "Redux", "Next JS", "Bootstrap", "i18next"],
    assets: [
      "/assets/projects/pizza/1.png",
      "/assets/projects/pizza/2.png",
      "/assets/projects/pizza/3.png",
      "/assets/projects/pizza/4.png",
      "/assets/projects/pizza/5.png",
      "/assets/projects/pizza/6.png",
      "/assets/projects/pizza/7.png",
      "/assets/projects/pizza/8.png",
      "/assets/projects/pizza/9.png",
      "/assets/projects/pizza/10.png",
      "/assets/projects/pizza/11.png",
    ],
    desc: "In This Application You Can Order Pizza , You can add Topping , Add To Cart , Checkout ,you can pay cash or via paypal,the admin can contol products & orders create new Pizzas and more , It Supports Two Languages (English & Arabic),  It's also very responsive Design",
  },
  {
    id: 22,
    name: "Kanban Board",
    image: "/assets/projects/kanban.png",
    github: "https://github.com/ahmedalianz/kanban-angular",
    link: "https://kanban-boardz.netlify.app/",
    techs: ["Angular"],
    assets: ["/assets/projects/kanban.png"],
    desc: "Its a Kanban Board to sort tasks",
  },

  {
    id: 18,
    name: "Agency",
    image: "/assets/projects/agency/1.png",
    link: "https://agency-beta.vercel.app/",
    github: "https://github.com/ahmedalianz/agency",
    techs: ["React", "Styled-Components"],
    assets: [
      "/assets/projects/agency/1.png",
      "/assets/projects/agency/2.png",
      "/assets/projects/agency/3.png",
      "/assets/projects/agency/4.png",
    ],
    desc: "Its a Landing Page",
  },
  {
    id: 17,
    name: "News Reader AI",
    image: "/assets/projects/news/1.png",
    link: "https://news-readerai.netlify.app/",
    github: "https://github.com/ahmedalianz/News-Reader--AI--React",
    techs: ["React", "AI"],
    assets: ["/assets/projects/news/1.png", "/assets/projects/news/2.png"],
    desc: "In This Application You Can Search for new by just saying the word and it will show you the news",
  },
  {
    id: 5,
    name: "Deer Fitness",
    image: "/assets/projects/deer/1.png",
    link: "https://deer-fitness.vercel.app/",
    github: "https://github.com/ahmedalianz/deer-fitness",
    techs: ["React", "Node", "Express", "MongoDB", "Bootstrap"],
    assets: [
      "/assets/projects/deer/1.png",
      "/assets/projects/deer/2.png",
      "/assets/projects/deer/3.png",
      "/assets/projects/deer/4.png",
    ],
    desc: "This Application is Made for a Gym so that it's participants can make reservations easily ,The Admin Can Control the reservation   , It Supports Arabic Languages,  It's also very responsive Design",
  },
  {
    id: 6,
    name: "Shareable To Do App",
    image: "/assets/projects/share/1.png",
    link: "https://sharable-to-do.vercel.app/",
    github: "https://github.com/ahmedalianz/sharable-ToDo",
    techs: ["React", "Firebase", "Bootstrap"],
    assets: [
      "/assets/projects/share/1.png",
      "/assets/projects/share/2.png",
      "/assets/projects/share/3.png",
      "/assets/projects/share/4.png",
      "/assets/projects/share/5.png",
    ],
    desc: "In This Application You Can you can create any user by just name so lists are just for your username, Every username has his own lists & able to : Create a New list,Add List Items,Navigate Between Lists,Share Any List By Several Means eg:facebook,whatsapp,direct link,  It's also very responsive Design",
  },
  {
    id: 19,
    name: "Manage",
    image: "/assets/projects/manage/1.png",
    link: "https://ahmedalianz.github.io/manage-landing-page/",
    github: "https://github.com/ahmedalianz/manage-landing-page",
    techs: ["Html", "Css", "Javascript"],
    assets: [
      "/assets/projects/manage/1.png",
      "/assets/projects/manage/2.png",
      "/assets/projects/manage/3.png",
    ],
    desc: "Its a Landing Page",
  },
  {
    id: 20,
    name: "EasyBank",
    image: "/assets/projects/easy/1.png",
    github: "https://github.com/ahmedalianz/easybank-landing-page",
    link: "https://ahmedalianz.github.io/easybank-landing-page/",
    techs: ["Html", "Css", "Javascript"],
    assets: [
      "/assets/projects/easy/1.png",
      "/assets/projects/easy/2.png",
      "/assets/projects/easy/3.png",
    ],
    desc: "Its a Landing Page",
  },
  {
    id: 21,
    name: "Huddle",
    image: "/assets/projects/huddle/1.png",
    link: "https://ahmedalianz.github.io/huddle-landing-page/",
    github: "https://github.com/ahmedalianz/huddle-landing-page",
    techs: ["Html", "Css", "Javascript"],
    assets: [
      "/assets/projects/huddle/1.png",
      "/assets/projects/huddle/2.png",
      "/assets/projects/huddle/3.png",
    ],
    desc: "Its a Landing Page",
  },

  {
    id: 23,
    name: "My Portfolio",
    image: "/assets/projects/portfolio/1.png",
    link: "https://ahmedalian.vercel.app/",
    github: "https://github.com/ahmedalianz/ahmedalian",
    techs: ["React", "SCSS"],
    assets: [
      "/assets/projects/portfolio/1.png",
      "/assets/projects/portfolio/2.png",
      "/assets/projects/portfolio/3.png",
    ],
    desc: "Its My Portfolio With Different Style",
  },
  {
    id: 7,
    name: "Bloger",
    image: "/assets/projects/bloger/1.png",
    github: "https://github.com/ahmedalianz/blogr",
    link: "https://ahmedalianz.github.io/blogr/",
    techs: ["Html", "Css", "Javascript"],
    assets: [
      "/assets/projects/bloger/1.png",
      "/assets/projects/bloger/2.png",
      "/assets/projects/bloger/3.png",
      "/assets/projects/bloger/1.png",
    ],
    desc: "Its a Landing Page",
  },
  {
    id: 8,
    name: "Lion",
    image: "/assets/projects/lion/1.png",
    link: "https://ahmedalianz.github.io/Lion-HTML-CSS/",
    github: "https://github.com/ahmedalianz/Lion-HTML-CSS",
    techs: ["Html", "Css"],
    assets: [
      "/assets/projects/lion/1.png",
      "/assets/projects/lion/2.png",
      "/assets/projects/lion/3.png",
      "/assets/projects/lion/4.png",
    ],
    desc: "Its a Landing Page",
  },
  {
    id: 9,
    name: "Studio VR",
    image: "/assets/projects/studio/1.png",
    link: "https://ahmedalianz.github.io/studio-vr/",
    github: "https://github.com/ahmedalianz/studio-vr",
    techs: ["Html", "Css"],
    assets: ["/assets/projects/studio/1.png", "/assets/projects/studio/2.png"],
    desc: "Its a Landing Page",
  },
  {
    id: 10,
    name: "ClipBoard",
    image: "/assets/projects/clipboard/1.png",
    link: "https://ahmedalianz.github.io/clipboard/",
    github: "https://github.com/ahmedalianz/clipboard",
    techs: ["Html", "Css"],
    assets: [
      "/assets/projects/clipboard/1.png",
      "/assets/projects/clipboard/2.png",
    ],
    desc: "Its a Landing Page",
  },
  {
    id: 11,
    name: "Breaking Bad Cast",
    image: "/assets/projects/breaking.png",
    link: "https://breaking-bad-castz.netlify.app/",
    techs: ["React"],
    assets: ["/assets/projects/breaking.png"],
    desc: "In This Application You Can view all the characters , Search for any one of these characters",
  },
  {
    id: 12,
    name: "Menu Mangment",
    image: "/assets/projects/cart/1.png",
    link: "https://shopping-cart22.netlify.app/",
    techs: ["React"],
    assets: ["/assets/projects/cart/1.png", "/assets/projects/cart/2.png"],
    desc: "In This Application You Can view all the products , add to cart , edit products , and more",
  },
  {
    id: 13,
    name: "My Reads",
    image: "/assets/projects/reads.png",
    link: "https://my-readsz1.netlify.app/",
    techs: ["React"],
    assets: ["/assets/projects/reads.png"],
    desc: "In This Application You Can Add Books to Your Reading list & search for any books by it's title or author",
  },
  {
    id: 14,
    name: "Calculator",
    image: "/assets/projects/calculator.png",
    link: "https://ahmedalianz.github.io/calculator-JS/",
    github: "https://github.com/ahmedalianz/calculator-JS",
    techs: ["Html", "Css", "Javascript"],
    assets: ["/assets/projects/calculator.png"],
    desc: "Its a simple Calculator",
  },
  {
    id: 15,
    name: "SunnySide",
    image: "/assets/projects/sunny.png",
    link: "https://ahmedalianz.github.io/sunnyside/",
    github: "https://github.com/ahmedalianz/sunnyside",
    techs: ["Html", "Css", "Javascript"],
    assets: ["/assets/projects/sunny.png"],
    desc: "Its a Landing Page",
  },
  {
    id: 16,
    name: "Expense Tracker",
    image: "/assets/projects/expense.png",
    link: "https://ahmedalianz.github.io/Expense-tracker-JS/",
    github: "https://github.com/ahmedalianz/Expense-tracker-JS",
    techs: ["Html", "Css", "Javascript"],
    assets: ["/assets/projects/expense.png"],
    desc: "In This Application You Can Add You Salary and expenses so you can track them",
  },
];
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main projects={projects} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route
          path="/projects/:id"
          element={<Projects projects={projects} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
