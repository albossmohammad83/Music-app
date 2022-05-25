import P5 from 'p5';
import * as Tone from 'tone';
// project imports
import { Visualizer } from '../Visualizers';


export const anthonyIbrahim = new Visualizer(
    'anthonyIbrahim',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;

        p5.background(0, 0, 0, 255);
        p5.noStroke()
        p5.noFill();

        const values = analyzer.getValue();

        p5.translate(width / 2, height / 2)

        p5.beginShape();
        for (let i = 0; i < values.length; i++) {
            p5.stroke(255);
            let r = p5.map(values[i] as number, 0, 1, 10, 300);
            let x = r * p5.cos(i);
            let y = r * p5.sin(i);
            p5.stroke(i, 255, 255)
            p5.circle(x, y, r);
            p5.vertex(x, y);
        }
        p5.endShape();
      },
)
