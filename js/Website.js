
var imageIndex = 1;
var imageCount = 1;
var imagesString;

// Modal Image Gallery
function displayModal(element) 
{
  // Clear previous modal images


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
  var modalImageCenter = document.getElementById("modalImageCenter");
  var modalImageLeft = document.getElementById("modalImageLeft");
  var modalImageRight = document.getElementById("modalImageRight");
  modalImageCenter.src = "";
  modalImageLeft.src = "";
  modalImageRight.src = "";

  imageIndex = 1;

  imagesString = element.dataset.images.toString().split(",");
  imageCount = imagesString.length;
  console.log("Image Count: " + imageCount);
  // Either 1 image, or 3+
  if (imageCount == 1)
  {
    imageIndex = 0;

    modalImageCenter.src = imagesString;
  }
  else
  {
    imageIndex = 1;

    modalImageLeft.src = imagesString[imageIndex-1];
    modalImageCenter.src = imagesString[imageIndex];
    modalImageRight.src = imagesString[imageIndex+1];

    console.log("Left Image Height: " + modalImageLeft.height);
    console.log("Center Image Height: " + modalImageCenter.height);

    var leftPosition =  (modalImageCenter.height/2) - (modalImageLeft.height/2);
    var rightPosition = (modalImageCenter.height/2) - (modalImageRight.height/2);
    modalImageLeft.style = "margin-top:" + leftPosition + "px";
    modalImageRight.style = "margin-top:" + rightPosition + "px";
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

function updateModalImage(order)
{
  if (order < 0)
  {
    
  }
  else
  {
    
  }
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