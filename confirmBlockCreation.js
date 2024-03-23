// This is a tampermonkey script that will confirm before clicking the Add button on 144block page, so I don't accidentally create blocks.

// ==UserScript==
// @name         Button Click Confirm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Confirm before clicking the Add button
// @author       You
// @match        https://144blocks.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  console.log("Running button click confirm");
  document.body.addEventListener("click", function (e) {
    const target = e.target;
    if (
      target.tagName === "BUTTON" &&
      target.classList.contains("ant-btn") &&
      target.innerText === "Add"
    ) {
      const blockElements = Array.from(document.querySelectorAll("b"));
      const blockElement = blockElements.find((el) =>
        el.innerText.includes("block")
      );
      const blockText = blockElement ? blockElement.innerText : "";
      const confirmMessage = `Are you sure? ${blockText}`;

      if (!window.confirm(confirmMessage)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  });
})();
