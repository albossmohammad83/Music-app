// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const MohammadVisualizer = new Visualizer(
  'albossmohammad83',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width/2, height/2);
    
    p5.translate(width/3, height/2);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    
    p5.noFill();

    const values = analyzer.getValue();
    p5.beginShape();

      const shuffleArray = (array: any) => {
        for (let i = 0; i < array.length; i++) {
          let j = Math.ceil(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      shuffleArray(values);
      
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const x = p5.map(i * 1.2, 120, values.length * 0.9, 20, width * 2.7);
        const y = height + amplitude * height * 10.6;
        p5.fill(1, 260, 250);
        p5.rect(x * 2, y / 5 , width / 25, height );
      }
      p5.endShape();
  },
);
