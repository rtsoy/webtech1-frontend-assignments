// Create bubble with information above person's name
function showUserInfo(clickedElement, name, content) {
    const bubble = document.getElementById("user-info-bubble");
    const bubbleContent = document.getElementById("bubble-content");

    // Update the bubble content with the provided name and content
    bubbleContent.innerHTML = `<strong>${name}</strong><br>${content}`;

    // Get the position of the clickedElement
    const rect = clickedElement.getBoundingClientRect();
    const bubbleTop = rect.top - bubble.clientHeight + 20;
    const bubbleLeft = rect.left;

    // Set the position of the user-info-bubble
    bubble.style.top = bubbleTop + 5 + "px";
    bubble.style.left = bubbleLeft + 5 + "px";
    bubble.style.display = "block";

    // Add an event listener to close the bubble when a click event occurs anywhere on the document
    const closeBubble = function(event) {
        if (event.target !== clickedElement && event.target !== bubble) {
            bubble.style.display = "none";
            document.removeEventListener("click", closeBubble);
        }
    };
    document.addEventListener("click", closeBubble);
}

// Switch between tabs and display content
function showTab(tabId) {
    var tabs = document.querySelectorAll(".nav-link");

    // Remove the "active" class from all tabs to reset their appearance
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Add the "active" class to the tab corresponding to the provided tabId
    document.querySelector('[href="#' + tabId + '"]').classList.add("active");

    var tabPanes = document.querySelectorAll(".tab-pane");

    // Hide all tab content panes by setting their display style to "none"
    for (var i = 0; i < tabPanes.length; i++) {
        tabPanes[i].style.display = "none";
    }

    document.getElementById(tabId).style.display = "block";
}