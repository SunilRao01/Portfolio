// Modal Image Gallery
function displayModal(element) 
{
  // Clear previous modal images
  var modalImagesParent = document.getElementById("modalImages");

  while (modalImagesParent.firstChild)
  {
    modalImagesParent.removeChild(modalImagesParent.firstChild);
  }

  document.getElementById("modal_1").style.display = "block";

  // Set modal title
  var titleText = document.getElementById("title");
  titleText.textContent = element.title;

  // Set modal description
  var captionText = document.getElementById("caption");
  captionText.textContent = element.alt;

  // Set hyperlinks
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

  // Set modal images
  imagesString = element.dataset.images.toString().split(",");
  imageCount = imagesString.length;

  // Either 1 image, or 3+
  for (var i = 0; i < imageCount; i++)
  {
    var img = document.createElement("img");
    img.src = imagesString[i];
    img.style.width = "50%";
    //img.style.height = "240px";
    modalImagesParent.appendChild(img);
    modalImagesParent.appendChild(document.createElement("br"));
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