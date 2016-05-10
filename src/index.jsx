'use strict';

let addNextAfter = (data) => {
  if(data === "{" || data === "[" ||
     data === ",") {
    return true;
  }
  return false;
};

let addNextBefore = (data) => {
  if(data === "}" || data === "]") {
    return true;
  }
  return false;
};

let space = 0;
let addSpace = () => {
  let output = ""; 
  for(let i = 0; i < space; i++) {
    output += "    ";
  }
  return output;
};

let needAddSpace = false;
export default (data) => {
  let output = "";
  for(let i in data) {
    let now = data[i];
    let add_next_after = addNextAfter(now, data[i*1+1]);
    let add_next_before = addNextBefore(now);

    if(needAddSpace) output += addSpace();
    needAddSpace = false;
    if(now === "}" || now === "]") space = space - 1;

    output += add_next_after ? now+"\n" : add_next_before ? "\n"+addSpace()+now : now;
    output += now === ":" ? " " : "";

    if(add_next_after) {
      if(now === "{" || now === "[") space = space + 1;
      needAddSpace = true;
    }
  }
  return output;
};
