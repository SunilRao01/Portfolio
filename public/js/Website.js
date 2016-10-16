initialize();

function initialize()
{
	// Assign navigation button callback functions
	var navButtons = document.getElementsByName("navOption");
	console.log("nav buttons array length: " + navButtons.length);

	for (var i = 0; i < navButtons.length; i++)
	{
		var currentButton = navButtons[i];
		var label = navButtons[i].value;

		console.log(label);

		currentButton.onclick = (function(opt) 
								{ 
									return function() 
									{
						       			displayView(opt);
						    		};
								})(label);
	}

	// Make all views invisible, except 'Home' page
	document.getElementById("homeWindow").style.display = "block";
	document.getElementById("workWindow").style.display = "none";
	document.getElementById("resumeWindow").style.display = "none";
	document.getElementById("aboutWindow").style.display = "none";
}

function displayView(viewLabel)
{
	console.log("display " + viewLabel + " view");
}