// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const MarwanVisualizer = new Visualizer(
    'marwanalnounou',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);

        p5.background(0, 0, 145, 255);
        p5.translate(width/2, height/2);
        p5.strokeWeight(dim * 0.01);
        p5.stroke(2550, 255, 0, 255);
        p5.noFill();
        const values = analyzer.getValue();
        for (let inverse = 1; inverse >= -2; inverse -= 2){
            p5.beginShape();
            for (let i = 0; i <= 270; i++) {
                const index = p5.floor(p5.map(i, 0, 270, 180, values.length-1));
                const amplitude = values[index] as number;
                const r = p5.map(amplitude, -1, 1, 20, 450);
                const x = r * p5.sin(i) / inverse;
                const y = r * p5.cos(i);
                p5.circle(x, y, 5);
            }
            p5.endShape();
            p5.beginShape();
            for (let i = 0; i <= 180; i++) {
                const index = p5.floor(p5.map(i, 0, 180, 180, values.length-1));
                const amplitude = values[index] as number;
                const r = p5.map(amplitude, 5, -1, -9, 150);
                const x = r * p5.sin(i) * inverse;
                const y = r * p5.cos(i);
                p5.circle(x, y, 5);
            }
            p5.endShape();
        }
    },
);


