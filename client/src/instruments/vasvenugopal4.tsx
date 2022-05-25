import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';
import A2 from './guitar-acoustic/A2.mp3';
import A3 from './guitar-acoustic/A3.mp3';
import A4 from './guitar-acoustic/A4.mp3';
import As2 from './guitar-acoustic/As2.mp3';
import As3 from './guitar-acoustic/As3.mp3';
import As4 from './guitar-acoustic/As4.mp3';
import B2 from './guitar-acoustic/B2.mp3';
import B3 from './guitar-acoustic/B3.mp3';
import B4 from './guitar-acoustic/B4.mp3';
import C3 from './guitar-acoustic/C3.mp3';
import C4 from './guitar-acoustic/C4.mp3';
import C5 from './guitar-acoustic/C5.mp3';
import Cs3 from './guitar-acoustic/Cs3.mp3';
import Cs4 from './guitar-acoustic/Cs4.mp3';
import Cs5 from './guitar-acoustic/Cs5.mp3';
import D2 from './guitar-acoustic/D2.mp3';
import D3 from './guitar-acoustic/D3.mp3';
import D4 from './guitar-acoustic/D4.mp3';
import D5 from './guitar-acoustic/D5.mp3';
import Ds2 from './guitar-acoustic/Ds2.mp3';
import Ds3 from './guitar-acoustic/Ds3.mp3';
import Ds4 from './guitar-acoustic/Ds4.mp3';
import E2 from './guitar-acoustic/E2.mp3';
import E3 from './guitar-acoustic/E3.mp3';
import E4 from './guitar-acoustic/E4.mp3';
import F2 from './guitar-acoustic/F2.mp3';
import F3 from './guitar-acoustic/F3.mp3';
import F4 from './guitar-acoustic/F4.mp3';
import Fs2 from './guitar-acoustic/Fs2.mp3';
import Fs3 from './guitar-acoustic/Fs3.mp3';
import Fs4 from './guitar-acoustic/Fs4.mp3';
import G2 from './guitar-acoustic/G2.mp3';
import G3 from './guitar-acoustic/G3.mp3';
import G4 from './guitar-acoustic/G4.mp3';
import Gs2 from './guitar-acoustic/Gs2.mp3';
import Gs3 from './guitar-acoustic/Gs3.mp3';
import Gs4 from './guitar-acoustic/Gs4.mp3';
import { Instrument } from '../Instruments';

interface GuitarStringProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.Sampler; // Contains library code for making sound
    sharp?: boolean;
    index: number; // octave + index together give a location for the piano key
};

export function GuitarString({
    note,
    synth,
    sharp,
    index
}: GuitarStringProps): JSX.Element {
    return (
        <div
            onMouseDown={() => synth?.triggerAttack(`${note}`)}
            onMouseUp={() => synth?.triggerRelease('+0.25')}
            className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
                'b--black black': sharp, // minor keys are black
                'gray b--light-gray': !sharp, // major keys are white
            })}
            style={{
                top: 0,
                left: `${index * 2}rem`,
                zIndex: sharp ? 1 : 0,
                width: sharp ? '1.5rem' : '2rem',
                marginLeft: sharp ? '0.25rem' : 0,
              }}
        ></div>
    )
}

function Guitar(): JSX.Element {
    const synth = new Tone.Sampler({
        urls: {
          "A2": A2,
          "A3": A3,
          "A4": A4,
          "A#2": As2,
          "A#3": As3,
          "A#4": As4,
          "B2": B2,
          "B3": B3,
          "B4": B4,
          "C3": C3,
          "C4": C4,
          "C5": C5,
          "C#3": Cs3,
          "C#4": Cs4,
          "C#5": Cs5,
          "D2": D2,
          "D3": D3,
          "D4": D4,
          "D5": D5,
          "D#2": Ds2,
          "D#3": Ds3,
          "D#4": Ds4,
          "E2": E2,
          "E3": E3,
          "E4": E4,
          "F2": F2,
          "F3": F3,
          "F4": F4,
          "F#2": Fs2,
          "F#3": Fs3,
          "F#4": Fs4,
          "G2": G2,
          "G3": G3,
          "G4": G4,
          "G#2": Gs2,
          "G#3": Gs3,
          "G#4": Gs4
        },
        onload: () => {
            return console.log("Loaded");
        }
        }).toDestination();
    const strings = List([
        {note: 'A2'},
        {note: 'A3'},
        {note: 'A4'},
        {note: 'A#2'},
        {note: 'A#3'},
        {note: 'A#4'},
        {note: 'B2'},
        {note: 'B3'},
        {note: 'B4'},
        {note: 'C3'},
        {note: 'C4'},
        {note: 'C5'},
        {note: 'C#3'},
        {note: 'C#4'},
        {note: 'C#5'},
        {note: 'D2'},
        {note: 'D3'},
        {note: 'D4'},
        {note: 'D5'},
        {note: 'D#2'},
        {note: 'D#3'},
        {note: 'D#4'},
        {note: 'E2'},
        {note: 'E3'},
        {note: 'E4'},
        {note: 'F2'},
        {note: 'F3'},
        {note: 'F4'},
        {note: 'F#2'},
        {note: 'F#3'},
        {note: 'F#4'},
        {note: 'G2'},
        {note: 'G3'},
        {note: 'G4'},
        {note: 'G#2'},
        {note: 'G#3'},
        {note: 'G#4'}
    ]);

    return (
    <div className="pv4">
        <div className="relative dib h4 w-100 ml4 flex-column">
        {/* {Range(1, 5).map(octave =>
            strings.map(string => {
            const isSharp = string.note.indexOf('#') !== -1;
            const note = `${string.note}${octave}`;
            return (
                <GuitarString
                key={note} //react key
                note={note}
                synth={synth}
                sharp={isSharp}
                index={(octave - 2) * 7}
                />
            );
            }),
        )} */}
        {
            strings.map((string, index) => {
                return (
                    <div
                        onMouseDown={() => synth?.triggerAttack(`${string.note}`)}
                        onMouseUp={() => synth?.triggerRelease('+0.25')}
                        className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
                            'b--black black': false, // minor keys are black
                            'gray b--light-gray': false, // major keys are white
                        })}
                        style={{
                            top: 0,
                            left: `${index * 2}rem`,
                            width:'1.5rem',
                            marginLeft:'0.25rem',
                          }}
                    ></div>
                )
            })
        }
        </div>
    </div>
    );
}

export const vasvenugopal4Instrument = new Instrument('vasvenugopal4', Guitar);