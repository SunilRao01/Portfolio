
var parallaxContainer_1, parallaxCamera_1, parallaxRenderer_1;
var parallaxScene_1;


initializeParallaxBackground_1();

animateParallax_1();

function initializeParallaxBackground_1()
{
	parallaxContainer_1 = document.getElementById('parallaxAnimation1');
	parallaxScene_1 = new THREE.Scene();
	parallaxScene_1.background = new THREE.Color(0x620000);
	parallaxCamera_1 = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2
				, window.innerHeight / 2, (window.innerHeight / -2), 1, 1000);

	parallaxCamera_1.position.z = 100;
	parallaxRenderer_1 = new THREE.WebGLRenderer();
	parallaxRenderer_1.setPixelRatio(window.devicePixelRatio);
	parallaxRenderer_1.setSize(window.innerWidth, (window.innerHeight/6));
	parallaxRenderer_1.sortObjects = false;
	parallaxContainer_1.appendChild(parallaxRenderer_1.domElement);

	document.body.appendChild(parallaxContainer_1);

	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize( event ) 
{
	SCREEN_WIDTH = window.innerWidth;
	SCREEN_HEIGHT = window.innerHeight;

	aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
	parallaxRenderer_1.setSize( SCREEN_WIDTH, SCREEN_HEIGHT/6 );

	parallaxCamera_1.aspect = 0.5 * aspect;
	parallaxAnimation1.updateProjectionMatrix();

	cameraPerspective.aspect = 0.5 * aspect;
	cameraPerspective.updateProjectionMatrix();

	cameraOrtho.left   =  -0.5 * frustumSize * aspect / 2;
	cameraOrtho.right  =   0.5 * frustumSize * aspect / 2;
	cameraOrtho.top    =   frustumSize / 2;
	cameraOrtho.bottom =  -frustumSize / 2;

	cameraOrtho.updateProjectionMatrix();
}

function animateParallax_1()
{
	requestAnimationFrame(animateParallax_1);	

	renderParallax_1();
}

function renderParallax_1()
{
	parallaxCamera_1.updateMatrixWorld();

	parallaxRenderer_1.render(parallaxScene_1, parallaxCamera_1);
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