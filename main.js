var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";

$(document).ready(function () {
  $("#mainSplitter").jqxSplitter({
    width: 850,
    height: 850,
    orientation: "horizontal",
    panels: [{
      size: 300,
      collapsible: false
    }]
  });
  $("#firstNested").jqxSplitter({
    width: "100%",
    height: "100%",
    orientation: "vertical",
    panels: [{
      size: 300,
      collapsible: false
    }]
  });
  $("#secondNested").jqxSplitter({
    width: "100%", 
    height: "100%", 
    orientation: "horizontal",
    panels: [{ size: 150 }]
  });
  $("#thirdNested").jqxSplitter({
    width: "100%",
    height: "100%", 
    orientation: "horizontal",
    panels: [{
      size: 150,
      collapsible: false
    }]
  });
});
