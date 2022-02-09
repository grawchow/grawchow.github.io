
function createWave ( svgTag, pathTag, t0, offset_t, a, offset_y ) {
  var initial_path = calculatePath(t0, offset_t, a, offset_y);
  $(pathTag).attr("d", initial_path);

  pathLoop(initial_path, second, 1, svgTag, pathTag, offset_t, a, offset_y);
};

function calculatePath (t, offset_t, a, offset_y) {
  var seconds = [...Array(100).keys()];
  var my_points = '';
  var i = 1;
  for (const s of seconds) {
    var raw_s = a * Math.sin(Math.sin(t/6)*Math.sin(t/6)*s*0.06 + offset_t*t) + offset_y
    my_points = my_points + i + ',' + raw_s + ' '
    i = i + 1;
  };
  var lenPath = my_points.split(/[,\s]/).length;
  var first_point = my_points.split(/[,\s]/)[0] + ',' + my_points.split(/[,\s]/)[1];
  var bottom_corner = my_points.split(/[,\s]/)[lenPath-3] + ',200';
  var new_export_points = 'm 0,200 L' + first_point + ' ' + catmullRom2bezier(my_points) + 'V' + bottom_corner + ' Z';

  return new_export_points;
};


function updatePath ( x0, svgTag, pathTag, offset_t, a, offset_y ) {
  var new_export_points = calculatePath(x0, offset_t, a, offset_y);
  morphToNew(new_export_points, svgTag, pathTag);
  var x1 = x0 + 0.1;
  return [new_export_points, x1];
};

function pathLoop( path, x0, i, svgTag, pathTag, offset_t, a, offset_y ) { 
  setTimeout(function() {   
    var oldPath = path;
    var updatedPath = updatePath(x0, svgTag, pathTag, offset_t, a, offset_y);       
    oldPath = updatedPath[0];
    var x1 = updatedPath[1];
    var offset_x = -20;
    textWave('#wave-svg', "#svg-title-g", x0, 30 + offset_x, 1.1, 5, 32, 0);
    textWave('#wave-svg', "#svg-title-r", x0, 33 + offset_x, 1.1, 5, 32, 0);
    textWave('#wave-svg', "#svg-title-a", x0, 36.5 + offset_x, 1.1, 5, 32, 0);
    textWave('#wave-svg', "#svg-title-w", x0, 40.7 + offset_x, 1.1, 5, 32, 0);
    textWave('#wave-svg', "#svg-title-c", x0, 46.2 + offset_x, 1.1, 5, 32, 0);
    textWave('#wave-svg', "#svg-title-h", x0, 49.2 + offset_x, 1.1, 5, 32, 0);
    textWave('#wave-svg', "#svg-title-o", x0, 53 + offset_x, 1.1, 5, 32, 0);
    textWave('#wave-svg', "#svg-title-w2", x0, 55.7 + offset_x, 1.1, 5, 32, 0);
    i++;                    
    if (i > 0) {           
      pathLoop(path, x1, i, svgTag, pathTag, offset_t, a, offset_y);           
    }                   
  }, 100)
  return i;
};

function textWave (svgTag, textTag, t, x, offset_t, a, offset_y, offset_x) {
  var y = a * Math.sin(Math.sin(t/6)*Math.sin(t/6)*x*0.06 + offset_t*t) + offset_y;
  morphToNewPosition(x + offset_x, y, svgTag, textTag);
};

// textWave('#wave-svg', "#svg-title-text", 10, 1.1, 5, 30);


var second = new Date().getTime();
second = String(second);
second = second.substring(second.length-1)/10;

createWave('#wave-svg', '#final-path', second, 1.1, 5, 30);

second = String(second + 100);
second = second.substring(second.length-1)/10;

createWave('#wave-svg', '#final-path-2', second, 1, 8, 15);

second = String(second + 100);
second = second.substring(second.length-1)/10;

createWave('#wave-svg', '#final-path-3', second, 0.6, 10, 16);
createWave('#wave-svg', '#final-path-4', second, 1.2, 11, 20);

// createTitle();

function createTitle () {
  var wavesElement = $("#wave-svg").first();
  var wavesElementBottom = parseInt(wavesElement.css("height")) - wavesElement.position().top;
  var homeTitle = $(".home-title").first();
  homeTitle.css("top",wavesElement.position().top + parseInt(wavesElement.css("height"))*0.25);
};

// Update dynamic font sizes
// run on window resize (w/ debounce)
var _timer;
$(window).on('resize', function(){
  clearTimeout(_timer);
  timer = setTimeout(createTitle,100);
});


