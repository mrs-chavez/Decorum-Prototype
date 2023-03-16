(function(window, undefined) {
  var dictionary = {
    "b76a3afe-349c-4ccc-82f1-cfc746439cf9": "New Incident - Summary",
    "1ffc25cc-b5bd-4f4a-874f-7f76d31ae675": "Main Menu",
    "a415839b-2c3c-411d-b3bf-4811ad5e166f": "New Incident - Student Solution",
    "9b2767f0-b5c1-426e-afeb-e77e1e8015ca": "New Incident - Student List",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash Screen",
    "4513c2a2-c201-49a4-bb0b-a59c90fcdf0c": "New Incident - Student Response",
    "819a34fe-f521-42fb-8530-b417a628d65d": "New Incident - Student Reason",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);