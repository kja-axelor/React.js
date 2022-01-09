import Logo from '../Logo/Logo'
import './body.css'
export default function Body(){
    return (
      <div className="body">
        <Logo />
        <h1>Hello, I'm Kishan R. Jani!</h1>
        <p className="para">
          Hello visitors! My name is <mark>Kishan Jani</mark>. I am Interested in Front-end Technologies like React.JS library,HTML, CSS, JavaScript and other frameworks.
        </p>
      </div>
    );
}