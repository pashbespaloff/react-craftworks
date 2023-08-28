import React from "react";
import Intro from "../../Intro";
import State from "../../State";
import ReducerAndContext from "../../ReducerAndContext";

const sections = {
  Intro: { 
    component: <Intro /> 
  },
  State: { 
    component: <State />
  },
  ReducerAndContext: { 
    component: <ReducerAndContext /> 
  },
  Refs: { 
    component: "Refs" 
  },
  Effect: { 
    component: "Effect" 
  },
  Routing: { 
    component: "Routing" 
  }
};

export default sections;