// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';

// project imports
import { Instrument } from '../Instruments';
import cymbalPNG from '../img/cymbal.png';
import kickDrumPNG from '../img/kickDrum.png';
import snareDrumPNG from '../img/snareDrum.png';
import tomDrumPNG from '../img/tomDrum.png';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for drum.
 ** ------------------------------------------------------------------------ */

 window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; 
  }

  switch (event.key) { 
    case "1":
      const synth1 = new Tone.MetalSynth().toDestination();
      synth1.triggerAttackRelease("E2", "2n");
      break;
    case "2":
      const synth2 = new Tone.MembraneSynth().toDestination();
      synth2.triggerAttackRelease("G1", "2n");
      break; 
    case "3":
      const synth3 = new Tone.MetalSynth().toDestination();
      synth3.triggerAttackRelease("G6", "2n");
      break;
    case "4":
      const synth4 = new Tone.MembraneSynth({
        pitchDecay: 0.01,
        octaves: 1,
        oscillator: {
            phase: 100,
            modulationType: "sine",
            modulationIndex: 0.01,
            partials: [0] 
        },
        envelope: {
            attack: 0.01,
            decay: 0.74,
            sustain: 0.71,
            release: 0.05,
            attackCurve: "exponential"
        }
    
      }).toDestination();
      synth4.triggerAttackRelease("C1", "2n");
      break;
    default:
      return; 
  }
  event.preventDefault();
}, true);



 interface CymbalProps {
  note: string; 
  synth?: Tone.MetalSynth; 
}

export function Cymbal({
  note,
  synth,
}: CymbalProps): JSX.Element {

  return (
    <div>
     <p> cymbal Press 1 on keyboard to play</p>
      <img src={cymbalPNG} alt="cymbalPNG"
        onMouseDown={() => synth?.triggerAttackRelease(`${note}`, "2n")}
        onMouseUp={() => synth?.triggerRelease('+0.80')}
        className={classNames('cymbal')}
        style={{ width: 200, height: 200}}
      />
    </div>
  );
}

interface KickProps {
  note: string;
  synth?: Tone.MembraneSynth; 
}

export function KickDrum({
  note,
  synth,
}: KickProps): JSX.Element {

  return (
    <div>
     <p> KickDrum Press 2 on keyboard to play</p>
      <img src={kickDrumPNG} alt="kickDrumPNG"
        onMouseDown={() => synth?.triggerAttackRelease(`${note}`, "2n")}
        onMouseUp={() => synth?.triggerRelease('+0.80')}
        className={classNames('KickDrum')}
        style={{ width: 200, height: 200}}
      />
    </div>
  );
}

interface SnareProps {
  note: string;
  synth?: Tone.NoiseSynth;
}

export function SnareDrum({ synth }: SnareProps): JSX.Element {
  return (
    <div>
      <p>SnareDrum Press 3 on keyboard to play</p>
      <img src={snareDrumPNG} alt="snareDrumPNG"
        onMouseDown={() => synth?.triggerAttackRelease(0.01)}
        onMouseUp={() => synth?.triggerRelease('+0.80')}
        className={classNames('SnareDrum')}
        style={{ width: 125, height: 125}}
      />
    </div>
  );
}


export function TomDrum({
  note,
 synth,
}: KickProps): JSX.Element {

  return (
    <div>
      <p>TomDrum Press 4 on keyboard to play</p>
      <img src={tomDrumPNG} alt="tomDrumPNG"
        onMouseDown={() => synth?.triggerAttackRelease(`${note}`, "2n")}
        onMouseUp={() => synth?.triggerRelease('+0.25')}
        className={classNames('TomDrum')}
        style={{ width: 125, height: 125}}
      />
    </div>
  );
}

function Drum(): JSX.Element {
    const cymbalNote = `${'E'}${2}`;
    const KickDrumNote = `${'C'}${1}`;
    const SnareDrumNote = `${'B'}${4}`;
    const TomDrumNote = `${'F'}${2}`;
    
  const CymbalDrumSynth = new Tone.MetalSynth().toDestination();

  const TomDrumSynth = new Tone.MembraneSynth({
      pitchDecay: 0.01,
      octaves: 1,
      oscillator: {
          phase: 100,
          modulationType: "sine",
          modulationIndex: 0.01,
          partials: [0] 
      },
      envelope: {
          attack: 0.01,
          decay: 0.74,
          sustain: 0.71,
          release: 0.05,
          attackCurve: "exponential"
      }
  
    }).toDestination();

  const KickDrumSynth = new Tone.MembraneSynth({
        pitchDecay: 0.05,
        octaves: 4,
        oscillator: {
            phase: 140,
            modulationType: "sine",
            modulationIndex: 0.8,
            partials: [1] 
        },
        envelope: {
            attack: 0.01,
            decay: 0.74,
            sustain: 0.71,
            release: 0.05,
            attackCurve: "exponential"
        }
    
      }).toDestination();

  const SnareDrumSynth = new Tone.NoiseSynth().connect(new Tone.Freeverb().toDestination());

  return (
    <div className="pv4"
        style={{
                margin: "auto",
                display: "grid",
                gridTemplate: " 50px 50px 50px 100px  / 50px 50px 50px 80px ",
            }}>
              
      <div className="Cymbal-Container"
                style={{
                    cursor: "pointer",
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    gridColumnStart: "1",
                    gridColumnEnd: "5"
                }}>
          <Cymbal
            key={cymbalNote} 
            note={cymbalNote}
            synth={CymbalDrumSynth}
          />
        </div>
        <div className="KickDrum-Container"
         style={{
          cursor: "pointer",
          gridRowStart: "1",
          gridRowEnd: "1",
          gridColumnStart: "6",
          gridColumnEnd: "6"
      }}>
          <KickDrum
            key={KickDrumNote} 
            note={KickDrumNote}
            synth={KickDrumSynth}
          />
        </div>
        <div className="SnareDrum-Container"
         style={{
          cursor: "pointer",
          gridRowStart: "7",
          gridRowEnd: "7",
          gridColumnStart: "1",
          gridColumnEnd: "6"
      }}>
          <SnareDrum
            key={SnareDrumNote} 
            note={SnareDrumNote}
            synth={SnareDrumSynth}
          />
        </div>
        <div className="TomDrum-Container"
         style={{
          cursor: "pointer",
          gridRowStart: "7",
          gridRowEnd: "7",
          gridColumnStart: "6",
          gridColumnEnd: "6"
      }}>
          <TomDrum
            key={TomDrumNote} 
            note={TomDrumNote}
            synth={TomDrumSynth}
          />
        </div>
      </div>
  );
}

export const MohammadDrumInstrument = new Instrument('albossmohammad83', Drum);
