var animations = ['rejection'];
var i, len = animations.length;
for (i = 0; i < len; i += 1) {
    var anim;
var elem = document.getElementById(animations[i]);
var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    rendererSettings: {
        progressiveLoad: true,
        preserveAspectRatio: 'XMidYMid meet'
    },
    path: 'http://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/' + animations[i] + '.json'
  };
  anim = lottie.loadAnimation(animData);
  anim.setSubframe(false);
}