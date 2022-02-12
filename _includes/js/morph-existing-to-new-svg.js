function morphToNew( pathB, svgTag, pathTag ) {
    var s = Snap(svgTag);
    var wave = s.select(pathTag);
    wave.animate(
        {
            d: pathB
        },
        600,
        mina.linear
    );
};



function morphToNewPosition( x, y, svgTag, textTag ) {
    var s = Snap(svgTag);
    var wave = s.select(textTag);
    wave.animate(
        {
            x: x,
            y: y
        },
        600,
        mina.linear
    );
};