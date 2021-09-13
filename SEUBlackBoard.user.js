// ==UserScript==
// @name        SEUBlackBoard-Ultra-shortcut - seu.edu.sa
// @namespace   Violentmonkey Scripts
// @match       https://lms.seu.edu.sa/*
// @grant       none
// @version     1.1
// @author      Nomad1414
// @description 02/02/2021, 15:52:38
// @updateURL   https://github.com/Nomad1414/Blackboard-Ultra/raw/main/SEUBlackBoard.user.js
// @downloadURL https://github.com/Nomad1414/Blackboard-Ultra/raw/main/SEUBlackBoard.user.js
// ==/UserScript==

const course = ["/webapps/collab-ultra/tool/collabultra?course_id=_94453_1", "/webapps/collab-ultra/tool/collabultra?course_id=_94005_1",
    "/webapps/collab-ultra/tool/collabultra?course_id=_94126_1"
];
const Names = ["--IT-270--", "--IT230--", "--IT340--"];

try {
    for (let j = 0; j <= 4; j++) {
        let a = document.createElement("a");
        a.textContent = Names[j];
        a.href = course[j];
        document.getElementsByClassName("collapsible")[0].append(a);
    }
} catch (error) {
    console.error(error);
}
try {
    for (let i = 4; i >= 0; i--) {
        let li = document.createElement("a");
        li.textContent = Names[i];
        li.href = course[i];
        document.getElementById("courseMenuPalette_contents").prepend(li);

    }
} catch (error) {
    console.error(error);
}
//test
//test
