import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
export default function Try() {
  return (
    <ul>
      <li>
        <FontAwesomeIcon icon={faHospital} />
      </li>
      <li>Cat</li>
      <li>mouse</li>
    </ul>
  );
}
