import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./prog.css";
import Asad from "../../IT/asad";

const Prog = () => {
  return (
    <div className="pro">
      <div className="prog">
        <div className="oo">
          <span>Workflow Automation</span>
          <span>85%</span>
        </div>
        <ProgressBar variant="danger" now={85} />
      </div>
      <div className="prog">
        <div className="oo">
          <span>Cloud Infrastructure Expertise</span>
          <span>58%</span>
        </div>
        <ProgressBar variant="danger" now={58} />
      </div>
      <div className="prog">
        <div className="oo">
          <span>FinTech Software Solutions</span>
          <span>75%</span>
        </div>
        <ProgressBar variant="danger" now={75} />
      </div>
      <div></div>
    </div>
  );
};

export default Prog;
