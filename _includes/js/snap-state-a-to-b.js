function morphBetween( pathA, pathB ) {
    // var svgAnimate = {
    //     selector: '.svg-out',
    //     svg:'<svg viewBox="0 0 100 100" stroke="rgb(216, 158, 51)" stroke-width="1" fill="rgb(216, 158, 51)"><path class="cls-1" d=" ' + pathA + '"></path></svg>',
    //     transitionTime: 100,
    //     states: {
    //         toPathB: [ 
    //             { id:"expand", element: ".cls-1", attr: { d: pathB } }
    //         ],
    //         returnToPathA: [
    //             { id: "reset", element: ".cls-1", attr: { d: pathA } }
    //         ]
    //     },
    //     events: [
    //         { event: "load", state: "toPathB" }
    //     ]
    // };
    
    // SnapStates(svgAnimate);

    var s = Snap("#wave-svg");
    var wave = s.select("#final-path");
    wave.animate(
        {
            d: pathB
        },
        200,
        mina.easeinout
    );

};