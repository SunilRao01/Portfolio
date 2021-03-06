var container, scene, camera, renderer;

var cube;
var line;
var lines = [];
var amplitude = 20;
var yMax;
var yMin;
var newYPositions = [];
var oscillateDelay = 10;


var numLines = 10;
var divisionSpace = 150;

var theta = 20;
var thetaRate = 0.001;

var alpha = 10;
var beta = 10;


initializeBackground();

animate();

function initializeBackground()
{
	container = document.getElementById('bgAnimation');
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2
				, window.innerHeight / 2, (window.innerHeight / -2), 1, 1000);

	camera.position.z = 100;
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, (window.innerHeight/2));
	renderer.sortObjects = false;
	container.appendChild(renderer.domElement);

	document.body.appendChild(container);

	var material = new THREE.LineBasicMaterial(
	{
		color: 0xffffff,
		linewidth: 2
	});

	// Create initial lines
	
	for (var j = 0; j < numLines; j++)
	{
		var geometry = new THREE.Geometry();
		var yPos = 500 - (j * divisionSpace);
		var minX = -1200;
		var maxX = 1200;
		var subdivisions = 50;
		var subUnit = (maxX - minX) / subdivisions;

		for (var i = 0; i < subdivisions; i++)
		{
			if (i == 0)
			{
				geometry.vertices.push(new THREE.Vector3(minX, yPos, 0));
			}
			else
			{
				var xPosition = minX + (subUnit * i);
				geometry.vertices.push(new THREE.Vector3(xPosition, yPos, 0));
			}
		}
		
		line = new THREE.Line(geometry, material);
		line.originalYPosition = (yPos - 20);
		lines.push(line);

		scene.add(line);

	}
	window.addEventListener( 'resize', onWindowResize, false );
}

			function onWindowResize( event ) {
				SCREEN_WIDTH = window.innerWidth;
				SCREEN_HEIGHT = window.innerHeight;
				aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT/2 );
				camera.aspect = 0.5 * aspect;
				camera.updateProjectionMatrix();
				cameraPerspective.aspect = 0.5 * aspect;
				cameraPerspective.updateProjectionMatrix();
				cameraOrtho.left   = - 0.5 * frustumSize * aspect / 2;
				cameraOrtho.right  =   0.5 * frustumSize * aspect / 2;
				cameraOrtho.top    =   frustumSize / 2;
				cameraOrtho.bottom = - frustumSize / 2;
				cameraOrtho.updateProjectionMatrix();
			}

function animate()
{
	requestAnimationFrame(animate);	

	render();
}

function render()
{
	for (var i = 0; i < lines.length; i++)
	{
		if (i % 2 == 0)
		{
			animateLine(lines[i], false);
		}
		else
		{
			animateLine(lines[i], true);
		}
	}

	camera.updateMatrixWorld();

	renderer.render(scene, camera);
}

function getRandomArbitrary(min, max) 
{
  return Math.round(Math.random() * (max - min) + min);
}

var calculatedNewPositions = false;

function animateLine(currentLine, neg)
{
	for (var i = 0; i < currentLine.geometry.vertices.length; i++)
	{
		if (!neg)
		{
			currentLine.geometry.vertices[i].y = (Math.sin((i + theta) * alpha) * beta) + currentLine.originalYPosition;
		}
		else
		{
			currentLine.geometry.vertices[i].y = (Math.sin((i + theta) * alpha) * -beta) + currentLine.originalYPosition;
		}

		currentLine.geometry.verticesNeedUpdate = true;
	}

	theta += thetaRate;
}