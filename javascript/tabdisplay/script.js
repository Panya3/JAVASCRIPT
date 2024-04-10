document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-btn"); // Select all buttons
  
    tabButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const activeTab = document.querySelector(".active"); // Get current active tab
        activeTab.classList.remove("active"); // Remove active class from previous tab
  
        button.classList.add("active"); // Add active class to clicked button
        const selectedTabId = button.getAttribute("onclick").split("'")[1]; // Extract tab ID from onclick attribute
        const targetContent = document.getElementById(selectedTabId); // Get target content
  
        // Hide all content divs
        const tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach(content => content.style.display = "none");
  
        targetContent.style.display = "block"; // Show the clicked tab's content
      });
    });
  });
  