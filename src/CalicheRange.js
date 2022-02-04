//This is a tool create for editor js

// Doc: https://editorjs.io/the-first-plugin
class CalicheRange {
  static get toolbox() {
    return {
      title: "Caliche Range",
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 11h-1.184a2.982 2.982 0 0 0-5.632 0H9.816a2.982 2.982 0 0 0-5.632 0H3a1 1 0 0 0 0 2h1.184a2.982 2.982 0 0 0 5.632 0h4.368a2.982 2.982 0 0 0 5.632 0H21a1 1 0 0 0 0-2zM7 13a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm10 0a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1z"/></svg>',
    };
  }
  // Is the method for show in the screen
  render() {
    // Creating the main div
    const mainDiv = document.createElement("div");
    mainDiv.className = "flex flex-col space-y-2 p-2 w-full	";
    // Creating the input range
    const input = document.createElement("input");
    input.type = "range";
    input.min = "0";
    input.max = "10";
    input.step = "1";
    input.className = "inputRange w-full z-20 bg-surface-100 rounded-full h-2	";
    // Creating the marks
    const ulMark = document.createElement("ul");
    ulMark.className = "flex justify-between w-full px-[10px] pb-5";

    for (let i = 0; i <= 10; i++) {
      const li = document.createElement("li");
      li.className = "flex justify-center relative";
      const span = document.createElement("span");

      if ((i === 0) | (i === 10)) {
        span.appendChild(document.createTextNode(" "));
      } else {
        span.className = "absolute -top-4 text-surface-200";
        span.appendChild(document.createTextNode("|"));
      }
      li.appendChild(span);
      ulMark.appendChild(li);
    }

    mainDiv.appendChild(input);
    mainDiv.appendChild(ulMark);
    // Creating the numeration
    const ulNum = document.createElement("ul");
    ulNum.className = "flex justify-between w-full px-[10px] pb-10";

    for (let i = 0; i <= 10; i++) {
      const li = document.createElement("li");
      li.className = "flex justify-center relative";
      const span = document.createElement("span");
      if ((i === 0) | (i === 10)) {
        span.className =
          "absolute bg-surface-950 text-white rounded-full w-7 text-center ";
      } else {
        span.className = "absolute";
      }

      span.appendChild(document.createTextNode(i));
      li.appendChild(span);
      ulNum.appendChild(li);
    }

    mainDiv.appendChild(ulNum);
    // Creating the titles
    const ulTitle = document.createElement("ul");
    ulTitle.className = "flex justify-between w-full px-[5px] pb-10";
    for (let i = 0; i <= 10; i++) {
      const li = document.createElement("li");
      li.className = "flex relative";
      const span = document.createElement("span");

      if (i === 0) {
        span.className = "absolute  text-center  md:-right-16 	";
        span.appendChild(
          document.createTextNode("Absolutamente en desacuerdo")
        );
      } else if (i === 10) {
        span.className =
          "absolute  text-center -left-24 md:-left-14 lg:-left-12	";
        span.appendChild(document.createTextNode("Absolutamente de acuerdo"));
      } else {
        span.className = "absolute";
      }

      li.appendChild(span);
      ulTitle.appendChild(li);
    }
    mainDiv.appendChild(ulTitle);

    return mainDiv;
  }
  // Is the method for save the block
  save(blockContent) {
    return {
      value: blockContent.children[0].value,
    };
  }
}

export default CalicheRange;
