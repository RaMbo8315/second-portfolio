// if ( WEBGL.isWebGLAvailable() === false ) {
//     document.body.appendChild( WEBGL.getWebGLErrorMessage() );
// }
var renderer, scene, camera, stats;
var object, uniforms;
var loader = new THREE.FontLoader();
loader.load( '/js/fonts/optimer_regular.typeface.json', function ( font ) {
    init( font );
    animate();
} );
function init( font ) {
    camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 400;
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x668cff );
    uniforms = {
        amplitude: { value: 5.0 },
        opacity: { value: 0.3 },
        color: { value: new THREE.Color( 0x668cff ) }
    };
    var shaderMaterial = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexshader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true
    } );
    var geometry = new THREE.TextBufferGeometry( '       Henry Urena \n     Web Developer\n', {
        font: font,
        size: 23,
        height: 10,
        curveSegments: 10,
        bevelThickness: 5,
        bevelSize: 1.5,
        bevelEnabled: true,
        bevelSegments: 10,
    } );
    geometry.center();
    var count = geometry.attributes.position.count;
    var displacement = new THREE.Float32BufferAttribute( count * 3, 3 );
    geometry.addAttribute( 'displacement', displacement );
    var customColor = new THREE.Float32BufferAttribute( count * 3, 3 );
    geometry.addAttribute( 'customColor', customColor );
    var color = new THREE.Color( 0x668cff );
    for ( var i = 0, l = customColor.count; i < l; i ++ ) {
        color.setHSL( i / l, 0.1, 0.1 );
        color.toArray( customColor.array, i * customColor.itemSize );
    }
    object = new THREE.Line( geometry, shaderMaterial );
    object.rotation.x = 0.1;
    scene.add( object );
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth * 0.8, window.innerHeight * 0.8 );
    var container = document.getElementById( 'Landing' );
    container.appendChild( renderer.domElement );
    var element = container.getElementsByTagName('canvas')[0];
    element.style.position = 'absolute';
    element.style.top = '10%';
    element.style.left = '10%';
    //
    window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
    camera.aspect = window.innerWidth * 0.8/ window.innerHeight * 0.8;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth * 0.8, window.innerHeight * 0.8 );
}
function animate() {
    requestAnimationFrame( animate );
    render();
}
function render() {
    var time = Date.now() * 0.001;
    object.rotation.y = 0.3 * time;
    object.rotation.x = 0.3 * time;
    object.rotation.z = 0.3 * time;
    uniforms.amplitude.value = Math.sin( 0 );
    // uniforms.color.value.offsetHSL( 0.005, 0, 0 );
    var attributes = object.geometry.attributes;
    var array = attributes.displacement.array;
    for ( var i = 0, l = array.length; i < l; i += 3 ) {
        array[ i ] += 0.3 * ( 0.5 - Math.random() );
        array[ i + 1 ] += 0.3 * ( 0.5 - Math.random() );
        array[ i + 2 ] += 0.3 * ( 0.5 - Math.random() );
    }
    attributes.displacement.needsUpdate = true;
    renderer.render( scene, camera );
}
