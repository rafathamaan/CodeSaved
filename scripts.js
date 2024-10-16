// Function to open tabs
function openTab(evt, subjectName) {
    var i, tabcontent, tablinks;
  
    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the 'active' class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the selected tab and add 'active' class to clicked tablink
    document.getElementById(subjectName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Function to copy code and display message
  function copyCode(id, button) {
    const codeElement = document.getElementById(id);
    const text = codeElement.innerText;
  
    navigator.clipboard.writeText(text).then(() => {
      const message = button.nextElementSibling;
      message.innerText = "Copied!";
      message.style.display = "inline-block";
      message.style.opacity = 1;
  
      setTimeout(() => {
        message.style.opacity = 0;
        message.style.display = "none";
      }, 2000); // Fade out after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
  
  // Add functionality to collapsible buttons
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  // Function to switch between dark and light modes
function toggleMode() {
    const body = document.body;
    const modeButton = document.getElementById("modeToggle");
  
    // Check current mode and switch
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      modeButton.innerText = "Switch to Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      modeButton.innerText = "Switch to Light Mode";
      localStorage.setItem("theme", "dark");
    }
  }
  
  // Function to load saved theme from localStorage
  function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const modeButton = document.getElementById("modeToggle");
  
    if (savedTheme === "light") {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      modeButton.innerText = "Switch to Dark Mode";
    } else {
      body.classList.add("dark-mode");
      modeButton.innerText = "Switch to Light Mode";
    }
  }
  
  // Event listener for toggle button
  document.getElementById("modeToggle").addEventListener("click", toggleMode);
  
  // Load the saved theme on page load
  window.onload = loadTheme;
  