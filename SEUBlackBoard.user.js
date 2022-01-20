// ==UserScript==
// @name        SEUBlackBoard-Ultra-shortcut - seu.edu.sa
// @namespace   Violentmonkey Scripts
// @match       https://lms.seu.edu.sa/*
// @grant       none
// @version     1.3
// @author      Nomad1414
// @description 02/02/2021, 15:52:38
// @updateURL   https://github.com/Nomad1414/Blackboard-Ultra/raw/main/SEUBlackBoard.user.js
// @downloadURL https://github.com/Nomad1414/Blackboard-Ultra/raw/main/SEUBlackBoard.user.js
// @run-at document-end
// ==/UserScript==

const course = ["Blackboard","/webapps/collab-ultra/tool/collabultra?course_id=_101924_1", "/webapps/collab-ultra/tool/collabultra?course_id=_101901_1",
    "/webapps/collab-ultra/tool/collabultra?course_id=_101839_1","/webapps/collab-ultra/tool/collabultra?course_id=_101940_1"
];
const Names = ["Blackboard Ultra","--IT-448--", "--IT-446--", "--IT440--","--IT-490--"];

try {
    for (let j = 4; j >= 0; j--) {
        let a = document.createElement("a");
        var b = document.createElement("li");
        b.innerHTML = " <a href= " + course[j] +">"+ Names[j] + "</a>";
        document.getElementById("$fixedId").prepend(b);       
    }
  }

catch (error) {
    console.error(error);
}


try {
   for (let i = 4; i >= 0; i--) {
        let li = document.createElement("a");
        li.textContent = Names[i];
        li.href = course[i];
        document.getElementById("courseMenuPalette_contents").prepend(li);

    }
 }

catch (error) {
    console.error(error);
}


//test
//test
