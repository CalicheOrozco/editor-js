//This is a tool create for editor js
// Doc: https://editorjs.io/the-first-plugin
class CalicheRange {
  static get toolbox() {
    return {
      title: "Caliche Range",
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11h-1.18427a2.98208 2.98208 0 0 0 -5.63146 0h-4.36854a2.98208 2.98208 0 0 0 -5.63146 0h-1.18427a1 1 0 0 0 0 2h1.18433a2.982 2.982 0 0 0 5.6314 0h4.3686a2.982 2.982 0 0 0 5.6314 0h1.18427a1 1 0 0 0 0-2zm-14 2a1 1 0 1 1 1-1 1.0013 1.0013 0 0 1 -1 1zm10 0a1 1 0 1 1 1-1 1.0013 1.0013 0 0 1 -1 1z"/></svg>',
    };
  }
  // Is the method for show in the screen
  render() {
    const input = document.createElement("input");
    input.type = "range";
    input.min = "1";
    input.max = "10";
    input.step = "1";
    input.value = "5";
    return input;
  }
  // Is the method for save the block
  save(blockContent) {
    return {
      value: blockContent.value,
    };
  }
}

export default CalicheRange;
