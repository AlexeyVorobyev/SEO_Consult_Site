const hamburgerButton = document.getElementsByClassName("mobileNavigation")[0];
const panelCloseButton = document.getElementsByClassName("panel__closeButton")[0]
const panel = document.getElementsByClassName("panel")[0];

hamburgerButton.addEventListener("click", function ()  {panel.style.display = "flex";});
panelCloseButton.addEventListener("click",function () {panel.style.display = "none";});
