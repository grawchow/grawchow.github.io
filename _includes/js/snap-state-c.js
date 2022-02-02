var glyphC = {
    selector: '.glyph-c',
    svg:'<svg viewBox="0 0 350 350" version="1.1"><g id="C"><path class="cls-1" d="m 151.4,194.56 c 1.1,-22.87 2.9,-45.9 12.21,-67.58 1.47306,-3.51277 3.49866,-6.76724 6,-9.64 5.54,-6.15 13.05,-6.13 17.94,0.55 2.83,3.86 4.27,8.9 5.6,13.62 0.41,1.44 -0.72192,4.99421 -2.58,5.41 -1.57097,0.48616 -3.09,-2.52 -4,-4.14 -1.56,-2.91 -2.25,-6.31 -3.93,-9.13 -2.54,-4.29 -5.87,-4.61 -8.52,-0.41 -2.84188,4.47364 -5.04958,9.3198 -6.56,14.4 -6,20.41 -9.36,41.26 -7.91,62.59 0.86,12.63 2.69,25.17 8,36.9 0.58639,1.37198 1.25425,2.7077 2,4 4.45,7.47 7.75,8.81 15,4.19 7.09,-4.52 13.55,-10.07 20.07,-15.43 2.18,-1.79 4.08,-4.09 6.75,-1.69 2.67,2.4 1.5,5.2 -0.79,6.92 -8.72,6.59 -17.27,13.54 -26.61,19.14 -6.91,4.13 -15.09,0.66 -19.79,-6.55 -6.64,-10.17 -9,-21.76 -10.92,-33.44 -0.98,-6.39 -1.29,-12.9 -1.96,-19.71 z"></path></g></svg>',
    transitionTime: 250,
    states: {
        inhale: [ 
            { id:"move-right", element: "g", x: 50 }
        ],
        exhale: [
            { id: "move-left", element: "g", x:0 }
        ]
    },
    events: [
        { event: "mouseenter", state: "inhale" },
        { event: "mouseleave", state: "exhale" }
    ]
};

SnapStates(glyphC);