import React from 'react';
import style from "./Profile.module.css";
import H2 from "../helpers/Subheading";

const Profile = ({ person }) => {
  const defaultUserPhoto = "https://i.imgur.com/lb1E2CM.jpeg";
  
  if (person.name) return (
    <article className={style.profile}>
      <H2 text={person.name} />
      <img src={person.photoSource ? person.photoSource : defaultUserPhoto} alt={person.name} />

      <ul>
        <li><span>Profession: </span>{person.profession ? person.profession : "–"}</li>

        { person.awards &&
          <li><span>Awards: </span>{person.awards.length} ({String(person.awards).replaceAll(",", ", ")})</li>
        }

        { person.discoveries &&
          <li><span>Discovered: </span>{person.discoveries}</li>
        }
      </ul>
    </article>
  )
};

export default Profile;