(() => {
    var scene = document.getElementById('scene');
    particlesJS.load('particles', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
    console.log(scene);
    var parallax = new Parallax(scene);
})();