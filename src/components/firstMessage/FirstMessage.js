import FirstMessage from "./style";

function FirstMessageComponent({ staticProps }) {
  return (
    <FirstMessage>
      <p>{staticProps.authorName}</p>
      <h1>{staticProps.h1Title}</h1>
      <p>{staticProps.description}</p>
      <div className="social-links">
        <a href="">Linkedin</a>
        <a href="">Email</a>
        <a href="">Github</a>
        <a href="">Behance</a>
        <a href="">About me</a>
      </div>
    </FirstMessage>
  );
}

export default FirstMessageComponent;
