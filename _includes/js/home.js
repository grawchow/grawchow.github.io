var g= Snap("#home-blob"), 
    rect= g.select('#rect'), 
    invisiblePath= g.select('#fill-path'), 
    lenPath = Snap.path.getTotalLength(invisiblePath.attr("d")), 
    path0Pos = invisiblePath.getPointAtLength(0);

rect.attr({
  transform: 't' + [path0Pos.x, path0Pos.y] +
             'r' + (path0Pos.alpha - 90)
});

$('#home-blob').on('click', function() {  
  Snap.animate(0, lenPath, function(val) {
    var pos = invisiblePath.getPointAtLength(val);
    
    rect.attr({
      transform: 't' + [pos.x, pos.y] + 
                 'r' + (pos.alpha - 90)
    });
  }, 10000, mina.easeinout);
});
