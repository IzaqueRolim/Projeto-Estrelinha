import GitHub from "../../Assets/GitHub.svg";
import GitHubWhite from "../../Assets/GitHubWhite.svg";
import { Div } from "./style";

function Credits({ dark }) {
  return (
    <Div>
      <a
        href="https://github.com/Rolinzinho48"
        rel="noreferrer"
        target="_blank"
      >
        {dark === true ? (
          <img src={GitHubWhite} alt="icone Git branco" />
        ) : (
          <img src={GitHub} alt="icone Git" />
        )}

        <span>Izaque Rolim</span>
      </a>
      <a href="https://github.com/raqueldesa" rel="noreferrer" target="_blank">
        {dark === true ? (
          <img src={GitHubWhite} alt="icone Git branco" />
        ) : (
          <img src={GitHub} alt="icone Git" />
        )}
        <span>Raquel De Sa</span>
      </a>
    </Div>
  );
}
export default Credits;
