import FirstMessageComponent from "../src/components/firstMessage/FirstMessage";
import ThemeSwitcherComponent from "../src/components/themeSwitcher/ThemeSwitcher";

export function HomePage(props) {
  return (
    <>
      <FirstMessageComponent staticProps={props} />
      <ThemeSwitcherComponent />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "FRONTEND & UX/UI DESIGNER",
      authorName: "Gabriel Lamas",
      description:
        "Here you can see digital products I helped to build, my contacts, and some code projects",
    }, // will be passed to the page component as props
  };
}

export default HomePage;
