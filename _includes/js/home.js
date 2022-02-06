
function createWave ( svgTag, pathTag, t0, offset_t ) {
  var initial_path = calculatePath(t0, offset_t);
  $(pathTag).attr("d", initial_path);

  myLoop(initial_path, second, 1, svgTag, pathTag, offset_t);
};





function calculatePath (t, offset_t) {
  var seconds = [...Array(100).keys()];
  var my_points = '';
  var i = 1;
  for (const s of seconds) {
    var raw_s = 10 * Math.sin(Math.sin(t/6)*Math.sin(t/6)*s*0.06 + offset_t*t) + 20
    my_points = my_points + i + ',' + raw_s + ' '
    i = i + 1;
  };
  var lenPath = my_points.split(/[,\s]/).length;
  var first_point = my_points.split(/[,\s]/)[0] + ',' + my_points.split(/[,\s]/)[1];
  var bottom_corner = my_points.split(/[,\s]/)[lenPath-3] + ',200';
  var new_export_points = 'm 0,200 L' + first_point + ' ' + catmullRom2bezier(my_points) + 'V' + bottom_corner + ' Z';

  return new_export_points;
};


function updatePath ( x0, svgTag, pathTag, offset_t ) {
  console.log(svgTag + ' - ' + pathTag + ': ' + x0);
  var new_export_points = calculatePath(x0, offset_t);
  morphToNew(new_export_points, svgTag, pathTag);
  var x1 = x0 + 0.1;
  return [new_export_points, x1];
};

function myLoop( path, x0, i, svgTag, pathTag, offset_t ) {         //  create a loop function
  setTimeout(function() {   
    var oldPath = path;
    var updatedPath = updatePath(x0, svgTag, pathTag, offset_t);             
    oldPath = updatedPath[0];
    var x1 = updatedPath[1];
    i++;                    
    if (i > 0) {           
      myLoop(path, x1, i, svgTag, pathTag, offset_t);           
    }                   
  }, 100)
  return i;
};


var second = new Date().getTime();
second = String(second);
second = second.substring(second.length-1)/10;

createWave('#wave-svg', '#final-path', second, 1.1);

second = String(second + 100);
second = second.substring(second.length-1)/10;

createWave('#wave-svg', '#final-path-2', second, 1);

second = String(second + 100);
second = second.substring(second.length-1)/10;

createWave('#wave-svg', '#final-path-3', second, 0.6);
createWave('#wave-svg', '#final-path-4', second, 1.2);