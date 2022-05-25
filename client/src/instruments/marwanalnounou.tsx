// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface XylophoneKeyProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.MonoSynth; // Contains library code for making sound
    octave: number;
    index: number; // octave + index together give a location for the piano key
}

export function XylophoneKey({
    note,
    synth,
    index
}: XylophoneKeyProps): JSX.Element {
    /**
     * This React component corresponds to either a major or minor key in the piano.
     * See `PianoKeyWithoutJSX` for the React component without JSX.
     */

    return (
        // Observations:
        // 1. The JSX refers to the HTML-looking syntax within TypeScript.
        // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
        // 3. The curly braces `{` and `}` should remind you of string interpolation.
        <div
            onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
            onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
            className={classNames('ba pointer absolute dim', {
                'black bg-white h4': note,
            })}
            style={{
                left: `${index * 5}rem`,
                width: '2.3rem',
                background: `rgb(${index * 12}, ${index * 60}, ${index * 80})`
            }}
        >
        </div>
    );
}


function Xylophone({ }: InstrumentProps): JSX.Element {
    const keys = List([
        { note: 'C', idx: 0 },
        { note: 'D', idx: 1 },
        { note: 'E', idx: 2 },
        { note: 'F', idx: 3 },
        { note: 'G', idx: 4 },
        { note: 'A', idx: 5 },
        { note: 'B', idx: 6 },
    ]);

    const MarimbaSynth = new Tone.MonoSynth({
        "portamento": 0.02,
        "oscillator": {
            "type": "square"
        },
        "envelope": {
            "attack": 0.005,
            "decay": 0.2,
            "sustain": 0.4,
            "release": 1.4,
        },
        "filterEnvelope": {
            "attack": 0.005,
            "decay": 0.1,
            "sustain": 0.05,
            "release": 0.8,
            "baseFrequency": 300,
            "octaves": 4
        }
    }).toDestination();

    return (
        <div className="pv4">
            <div className="xylophone">
                {Range(2, 7).map(octave =>
                    keys.map(key => {
                        const note = `${key.note}${octave}`;
                        return (
                            <XylophoneKey
                                key={note}
                                note={note}
                                synth={MarimbaSynth}
                                octave={octave}
                                index={(octave - 2) * 7 + key.idx} 
                            />
                        );
                    }),
                )}
            </div>
        </div>

    );
}

export const marwanXylophone = new Instrument('marwanalnounou', Xylophone);