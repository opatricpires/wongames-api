import React from "react";
import { PropTypes } from "prop-types";

import Wrapper from "./Wrapper";

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        Powerd by &nbsp;
        <a
          href={`https://reactavancado.com.br/`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
