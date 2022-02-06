function morphToNew( pathB, svgTag, pathTag ) {
    var s = Snap(svgTag);
    var wave = s.select(pathTag);
    wave.animate(
        {
            d: pathB
        },
        200,
        mina.easeinout
    );
};