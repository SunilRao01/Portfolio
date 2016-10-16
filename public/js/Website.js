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
}

function displayView(viewLabel)
{
	console.log("display " + viewLabel + " view");
}