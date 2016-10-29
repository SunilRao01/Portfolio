
var parallaxContainer_2, parallaxCamera_2, parallaxRenderer_2;
var parallaxScene_2;


initializeParallaxBackground_2();

animateParallax_2();

function initializeParallaxBackground_2()
{
	parallaxContainer_2 = document.getElementById('parallaxAnimation2');
	parallaxScene_2 = new THREE.Scene();
	parallaxScene_2.background = new THREE.Color(0x000066);
	parallaxCamera_2 = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2
				, window.innerHeight / 2, (window.innerHeight / -2), 1, 1000);

	parallaxCamera_2.position.z = 100;
	parallaxRenderer_2 = new THREE.WebGLRenderer();
	parallaxRenderer_2.setPixelRatio(window.devicePixelRatio);
	parallaxRenderer_2.setSize(window.innerWidth, (window.innerHeight/6));
	parallaxRenderer_2.sortObjects = false;
	parallaxContainer_2.appendChild(parallaxRenderer_2.domElement);

	document.body.appendChild(parallaxContainer_2);
	
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize( event ) 
{
	SCREEN_WIDTH = window.innerWidth;
	SCREEN_HEIGHT = window.innerHeight;

	aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
	parallaxRenderer_2.setSize( SCREEN_WIDTH, SCREEN_HEIGHT/6 );

	parallaxCamera_2.aspect = 0.5 * aspect;
	parallaxAnimation1.updateProjectionMatrix();

	cameraPerspective.aspect = 0.5 * aspect;
	cameraPerspective.updateProjectionMatrix();

	cameraOrtho.left   =  -0.5 * frustumSize * aspect / 2;
	cameraOrtho.right  =   0.5 * frustumSize * aspect / 2;
	cameraOrtho.top    =   frustumSize / 2;
	cameraOrtho.bottom =  -frustumSize / 2;
	
	cameraOrtho.updateProjectionMatrix();
}

function animateParallax_2()
{
	requestAnimationFrame(animateParallax_2);	

	renderParallax_2();
}

function renderParallax_2()
{
	parallaxCamera_2.updateMatrixWorld();

	parallaxRenderer_2.render(parallaxScene_2, parallaxCamera_2);
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