import React from 'react'
import "./footer.css"
import Contactlink from "../Contactlink/Contactlink";
export default function Footer(){
  const linkArray = [
    {
      link: "https://www.linkedin.com/in/krjani",
      class: "fab fa-linkedin-in",
    },
    {
      link: "https://github.com/kja-axelor",
      class: "fab fa-github",
    },
    {
      link: "mailto:krjani1213@gmail.com",
      class: "fas fa-address-card",
    },
    {
      link: "https://github.com/kja-axelor",
      class: "fab fa-instagram",
    },
  ];
    return (
        <div className="footer">
          <p>
            &copy;{new Date().getFullYear()} KISHAN R. JANI | All right reserved
            | Terms Of Service | Privacy
          </p>
          <ul className="links">
            {linkArray.map((link) => {
              return <Contactlink link={link.link} class={link.class} />;
            })}
          </ul>
        </div>
    );
}