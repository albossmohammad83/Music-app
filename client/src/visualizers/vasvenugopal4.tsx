import P5 from 'p5';
import * as Tone from 'tone';
import { Visualizer } from '../Visualizers';

export const vasvenugopal4Visualizer = new Visualizer(
    'vasvenugopal4',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const dim = Math.min(width, height);

        p5.background(0, 0, 0, 255);

        p5.strokeWeight(dim * 0.01);
        p5.stroke(49, 115, 247);
        p5.noFill();
        p5.angleMode("degrees");
        p5.translate(width / 2.4 as number, height / 4);
        const values = analyzer.getValue();
        for (let t = -1; t <= 1; t += 2) {
            p5.beginShape();
            for (let i = 0; i <= 180; i++) {
                const index = p5.map(i, 0, 180, 0, values.length - 1);
                const r = p5.map(values[index] as number, -1, 1, 70, 270);
                const x = r * p5.sin(i) * t;
                const y = r * p5.cos(i);
                p5.vertex(x, y);
            }
            p5.endShape();
        }
    }
);