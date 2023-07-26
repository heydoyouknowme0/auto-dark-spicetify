function waitForElement(els, func, timeout = 100) {
    const queries = els.map((el) => document.querySelector(el));
    if (queries.every((a) => a)) {
        func(queries);
    } else if (timeout > 0) {
        setTimeout(waitForElement, 300, els, func, --timeout);
    }
}
function setThemeByTime() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 18) {
    lighthm();
  }
}
function lighthm() {
  document.documentElement.style.setProperty("--spice-text", "#363636");
  document.documentElement.style.setProperty("--spice-subtext", "#3D3D3D");
  document.documentElement.style.setProperty("--spice-sidebar-text", "#FFF9F4");
  document.documentElement.style.setProperty("--spice-main", "#FFF9F4");
  document.documentElement.style.setProperty("--spice-sidebar", "#FFA789");
  document.documentElement.style.setProperty("--spice-player", "#FFF9F4");
  document.documentElement.style.setProperty("--spice-card", "#FFF9F4");
  document.documentElement.style.setProperty("--spice-shadow", "#D3D3D3");
  document.documentElement.style.setProperty("--spice-selected-row", "#6D6D6D");
  document.documentElement.style.setProperty("--spice-button", "#FF8367");
  document.documentElement.style.setProperty("--spice-button-active", "#FF8367");
  document.documentElement.style.setProperty("--spice-button-disabled", "#535353");
  document.documentElement.style.setProperty("--spice-tab-active", "#FFDACE");
  document.documentElement.style.setProperty("--spice-notification", "#FFA789");
  document.documentElement.style.setProperty("--spice-notification-error", "#E22134");
  document.documentElement.style.setProperty("--spice-misc", "#BFBFBF");
}
function darkthm() {
  document.documentElement.style.setProperty("--spice-text", "#FFFFFF");
  document.documentElement.style.setProperty("--spice-subtext", "#F0F0F0");
  document.documentElement.style.setProperty("--spice-sidebar-text", "#FFFFFF");
  document.documentElement.style.setProperty("--spice-main", "#000000");
  document.documentElement.style.setProperty("--spice-sidebar", "#1ED760");
  document.documentElement.style.setProperty("--spice-player", "#000000");
  document.documentElement.style.setProperty("--spice-card", "#000000");
  document.documentElement.style.setProperty("--spice-shadow", "#202020");
  document.documentElement.style.setProperty("--spice-selected-row", "#797979");
  document.documentElement.style.setProperty("--spice-button", "#1ED760");
  document.documentElement.style.setProperty("--spice-button-active", "#1ED760");
  document.documentElement.style.setProperty("--spice-button-disabled", "#535353");
  document.documentElement.style.setProperty("--spice-tab-active", "#166632");
  document.documentElement.style.setProperty("--spice-notification", "#1DB954");
  document.documentElement.style.setProperty("--spice-notification-error", "#E22134");
  document.documentElement.style.setProperty("--spice-misc", "#BFBFBF");
}
function toggleTheme() {
    const currentTheme = document.documentElement.style.getPropertyValue("--spice-main");

    if (currentTheme === "#000000") {
        lighthm();
    } else {
        darkthm();
    }
}



// Call the setThemeByTime function whenever you need to change the theme.
setThemeByTime();

waitForElement([".main-topBar-container"], (queries) => {
    // Add activator on top bar
    const div = document.createElement("div");
    div.id = "main-topBar-moon-div";
    queries[0].insertBefore(div, queries[0].querySelector(".main-userWidget-box"));

    const button = document.createElement("button");
    button.id = "main-topBar-moon-button";
    button.classList.add("main-topBar-buddyFeed");
    button.setAttribute("title", "Light/Dark");
    button.onclick = toggleTheme;
    button.innerHTML = `<svg role="img" viewBox="0 0 16 16" height="16" width="16"><path fill="currentColor" d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"></path></svg>`;
    div.append(button);
});
