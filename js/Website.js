
// Modal Image Gallery
function displayModal(element) 
{
  document.getElementById("modelImage").src = element.src;
  document.getElementById("modal_1").style.display = "block";

  var titleText = document.getElementById("title");
  titleText.textContent = element.title;

  var captionText = document.getElementById("caption");
  captionText.textContent = element.alt;

  var projectLink = document.getElementById("projectLink");
  if (element.dataset.projectLink)
  {
    projectLink.textContent = "Source Code";
    projectLink.href = element.dataset.projectLink;
    projectLink.target="_blank";
    projectLink.style.display = "block";
  }

  var playLink = document.getElementById("playLink");
  if (element.dataset.playLink)
  {
    playLink.textContent = "View";
    playLink.href = element.dataset.playLink;
    playLink.target="_blank";
    playLink.style.display = "block";
  }

  var blogLink = document.getElementById("blogLink");
  if (element.dataset.blogLink)
  {
    blogLink.textContent = "Blog";
    blogLink.href = element.dataset.blogLink;
    blogLink.target="_blank";
    blogLink.style.display = "block";
  }
}

function hideModal()
{
  document.getElementById("modal_1").style.display = "none";
  document.getElementById("playLink").style.display = "none";
  document.getElementById("projectLink").style.display = "none";
  document.getElementById("blogLink").style.display = "none";
  document.getElementById("reception").style.display = "none";
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() 
{
  var x = document.getElementById("navDemo");

  if (x.className.indexOf("w3-show") == -1) 
  {
      x.className += " w3-show"; // Display
  } 
  else 
  { 
      x.className = x.className.replace(" w3-show", ""); // Hide
  }
}