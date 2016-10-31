
var parallaxContainer_2, parallaxCamera_2, parallaxRenderer_2;
var parallaxScene_2;
var uniforms;

initializeParallaxBackground_2();

animateParallax_2();

function initializeParallaxBackground_2()
{
	parallaxContainer_2 = document.getElementById('parallaxAnimation2');
	
	parallaxCamera_2 = new THREE.Camera();
	parallaxCamera_2.position.z = 1;

	parallaxScene_2 = new THREE.Scene();
	
	var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
	uniforms = 
	{
		time:       { value: 1.0 },
		resolution: { value: new THREE.Vector2() }
	};
	
	var material = new THREE.ShaderMaterial
	( {
		uniforms: uniforms,
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent
	} );

	var mesh = new THREE.Mesh( geometry, material );
	parallaxScene_2.add( mesh );

	parallaxRenderer_2 = new THREE.WebGLRenderer();
	parallaxRenderer_2.setPixelRatio(window.devicePixelRatio);
	parallaxRenderer_2.setSize(window.innerWidth, (window.innerHeight/6));	
	parallaxContainer_2.appendChild(parallaxRenderer_2.domElement);

	document.body.appendChild(parallaxContainer_2);
	
	uniforms.resolution.value.x = renderer.domElement.width;
	uniforms.resolution.value.y = renderer.domElement.height;

	window.addEventListener('resize', onWindowResize, false );
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

	uniforms.time.value += 0.05;

	parallaxRenderer_2.render(parallaxScene_2, parallaxCamera_2);
}