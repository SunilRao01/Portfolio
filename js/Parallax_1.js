
var parallaxContainer_1, parallaxCamera_1, parallaxRenderer_1;
var parallaxScene_1;

var cubeParallax1, cubeParallax2, cubeParallax3;
var parallaxAnimationSpeed_1 = 0.01;

initializeParallaxBackground_1();

animateParallax_1();

function initializeParallaxBackground_1()
{
	parallaxContainer_1 = document.getElementById('parallaxAnimation1');
	parallaxScene_1 = new THREE.Scene();
	parallaxScene_1.background = new THREE.Color(0x000000);
	parallaxCamera_1 = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2
				, window.innerHeight / 2, (window.innerHeight / -2), 1, 2000);

	parallaxCamera_1.position.z = 150;
	


	var geometry, material;
	var size = 200;
	var cubeDistance = 50;
	var cubeFactor = 20;

	geometry = new THREE.BoxGeometry(size, size*11, size);
	material = new THREE.MeshBasicMaterial({wireframe:true});
	
	for (var i = 0; i < cubeFactor; i++)
	{
		var cubeParallax = new THREE.Mesh(geometry, material);
		cubeParallax.position.z = 10;
		cubeParallax.position.y = -280;
		var xPosition = 0;
		if (i != 0)
		{
			if (i % 2 == 0)
			{
				xPosition = (-i * cubeDistance)
			}
			else
			{
				xPosition = (i * cubeDistance)
			}
		}
		cubeParallax.position.x = xPosition;
		cubeParallax.rotation.x -= 1;

		parallaxScene_1.add(cubeParallax);
	}
	

	parallaxRenderer_1 = new THREE.WebGLRenderer();
	parallaxRenderer_1.setPixelRatio(window.devicePixelRatio);
	parallaxRenderer_1.setSize(window.innerWidth, (window.innerHeight/6));
	parallaxRenderer_1.sortObjects = false;
	parallaxContainer_1.appendChild(parallaxRenderer_1.domElement);
	document.body.appendChild(parallaxContainer_1);

	window.addEventListener('resize', onWindowResize, false );
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

	for (var i = 1; i < parallaxScene_1.children.length; i++)
	{
		var sceneObject = parallaxScene_1.children[i];

		if (sceneObject.position.x < 0)
		{
			sceneObject.rotation.y -= parallaxAnimationSpeed_1;
		}
		else
		{
			sceneObject.rotation.y += parallaxAnimationSpeed_1;
		}

		
	}

	renderParallax_1();
}

function renderParallax_1()
{
	parallaxCamera_1.updateMatrixWorld();

	parallaxRenderer_1.render(parallaxScene_1, parallaxCamera_1);
}
