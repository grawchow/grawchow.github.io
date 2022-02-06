// var g = Snap("#home-blob"), 
//     rect= g.select('#glyph'), 
//     invisiblePath= g.select('#fill-path'), 
//     lenPath = Snap.path.getTotalLength(invisiblePath.attr("d")), 
//     path0Pos = invisiblePath.getPointAtLength(0);

// rect.attr({
//   transform: 't' + [path0Pos.x - 150, path0Pos.y - 450] +
//              'r' + (path0Pos.alpha - 0) +
//              's' + 0.1
// });

// $('#home-blob').on('click', function() {  
//   Snap.animate(0, lenPath, function(val) {
//     var pos = invisiblePath.getPointAtLength(val);
    
//     rect.attr({
//       transform: 't' + [(pos.x - 150), (pos.y - 450)] + 
//                  'r' + (pos.alpha - 0) +
//                  's' + 0.1
//     });
//   }, 50000, mina.easeinout);
// });

// var pathEls = document.documentElement.getElementsByTagName("path");
//   for (var p = 0, pLen = pathEls.length; pLen > p; p++) {
//     var eachPath = pathEls[ p ];
//     parsePath( eachPath );
//   }



var second = new Date().getTime();
second = String(second);
second = second.substring(second.length-1)/10;


var initial_path = calculatePath(second);
$('#final-path').attr("d", initial_path);
// var first_update = updatePath(initial_path, second);
// var first_path = first_update[0];
// var first_path_x = first_update[1];



function calculatePath (t) {
  var seconds = [...Array(100).keys()];
  var my_points = '';
  var i = 1;
  for (const s of seconds) {
    var raw_s = 10 * Math.sin(Math.sin(t/6)*Math.sin(t/6)*s*0.06 + t) + 20
    my_points = my_points + i + ',' + raw_s + ' '
    i = i + 1;
  };
  var lenPath = my_points.split(/[,\s]/).length;
  var first_point = my_points.split(/[,\s]/)[0] + ',' + my_points.split(/[,\s]/)[1];
  var bottom_corner = my_points.split(/[,\s]/)[lenPath-3] + ',200';
  var new_export_points = 'm 0,200 L' + first_point + ' ' + catmullRom2bezier(my_points) + 'L' + bottom_corner + ' Z';

  return new_export_points;
};




function updatePath ( old_export_points, x0 ) {
  var new_export_points = calculatePath(x0);
  morphBetween(old_export_points, new_export_points);
  var x1 = x0 + 0.1;
  return [new_export_points, x1];
};




function myLoop( path, x0 ) {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    var oldPath = path;
    // document.write(oldPath);
    var updatedPath = updatePath(path, x0);             //  your code here
    oldPath = updatedPath[0];
    var x1 = updatedPath[1];
    // document.write('***********' + i +':           ');
    i++;                    //  increment the counter
    if (i > 0) {           //  if the counter < 10, call the loop function
      myLoop(oldPath, x1);             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 100)
}

var i = 1;                  //  set your counter to 1
myLoop(initial_path, second);                   //  start the loop