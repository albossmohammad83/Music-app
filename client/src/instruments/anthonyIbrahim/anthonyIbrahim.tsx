import { List } from 'immutable';
import React from 'react';
import * as Tone from 'tone';
// project imports
import { Instrument } from '../../Instruments';
import A2 from './cello/A2.mp3';
import A3 from './cello/A3.mp3';
import A4 from './cello/A4.mp3';
import As2 from './cello/As2.mp3';
import As3 from './cello/As3.mp3';
import As4 from './cello/As4.mp3';
import B2 from './cello/B2.mp3';
import B3 from './cello/B3.mp3';
import B4 from './cello/B4.mp3';
import C2 from './cello/C2.mp3';
import C3 from './cello/C3.mp3';
import C4 from './cello/C4.mp3';
import C5 from './cello/C5.mp3';
import Cs3 from './cello/Cs3.mp3';
import Cs4 from './cello/Cs4.mp3';
import D2 from './cello/D2.mp3';
import D3 from './cello/D3.mp3';
import D4 from './cello/D4.mp3';
import Ds2 from './cello/Ds2.mp3';
import Ds3 from './cello/Ds3.mp3';
import Ds4 from './cello/Ds4.mp3';
import E2 from './cello/E2.mp3';
import E3 from './cello/E3.mp3';
import E4 from './cello/E4.mp3';
import F2 from './cello/F2.mp3';
import F3 from './cello/F3.mp3';
import F4 from './cello/F4.mp3';
import Fs3 from './cello/Fs3.mp3';
import Fs4 from './cello/Fs4.mp3';
import G2 from './cello/G2.mp3';
import G3 from './cello/G3.mp3';
import G4 from './cello/G4.mp3';
import Gs2 from './cello/Gs2.mp3';
import Gs3 from './cello/Gs3.mp3';
import Gs4 from './cello/Gs4.mp3';

interface CelloStringProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export function CelloString({
    children,
    onClick,
    disabled,
}: CelloStringProps): JSX.Element {
    return (
        <>
        <div
            style={{
                width: '100px',
                height: '100px',
                float: 'left',
                margin: '1px',
            }}
        >
            <button
                style={{
                    width: '80px',
                }}
                className='b--transparent br-100 shadow-4'
                onClick={onClick}
                disabled={disabled}
            >
            {children}
            </button>
        </div>
        </>
    )
}

function Cello(): JSX.Element {

    const chords = List([
        {note:'E3'},
        {note:'E4'},
        {note:'F2'},
        {note:'F3'},
        {note:'F4'},
        {note:'F#3'},
        {note:'F#4'},
        {note:'G2'},
        {note:'G3'},
        {note:'G4'},
        {note:'G#2'},
        {note:'G#3'},
        {note:'G#4'},
        {note:'A2'},
        {note:'A3'},
        {note:'A4'},
        {note:'A#2'},
        {note:'A#3'},
        {note:'A#4'},
        {note:'B2'},
        {note:'B3'},
        {note:'B4'},
        {note:'C2'},
        {note:'C3'},
        {note:'C4'},
        {note:'C5'},
        {note:'C#3'},
        {note:'C#4'},
        {note:'D2'},
        {note:'D3'},
        {note:'D4'},
        {note:'D#2'},
        {note:'D#3'},
        {note:'D#4'},
        {note:'E2'},
    ])

    const sampler = new Tone.Sampler({
        urls: {
            'A2': A2,
            'A#2': As2,
            'A3': A3,
            'A#3': As3,
            'A4': A4,
            'A#4': As4,
            'B2': B2,
            'B3': B3,
            'B4': B4,
            'C2': C2,
            'C3': C3,
            'C#3': Cs3,
            'C4': C4,
            'C#4': Cs4,
            'C5': C5,
            'D2': D2,
            'D#2': Ds2,
            'D3': D3,
            'D#3': Ds3,
            'D4': D4,
            'D#4': Ds4,
            'E2': E2,
            'E3': E3,
            'E4': E4,
            'F2': F2,
            'F3': F3,
            'F#3': Fs3,
            'F4': F4,
            'F#4': Fs4,
            'G2': G2,
            'G#2': Gs2,
            'G3': G3,
            'G#3': Gs3,
            'G4': G4,
            'G#4': Gs4,
        },
        onload: () => {
            document.querySelector('button')?.removeAttribute('disabled')
            console.log('loaded')
        },
        onerror: (error) =>  console.log(error)
    }).toDestination();

    const handleClick = (id: string) =>  {
        sampler.triggerAttackRelease(id, '1')
    }

    return (
        <div className="pv4">
            <div className="relative dib h4 w-100 ml4 ">
                {
                    chords.map((note) => {
                        return (
                            <div key={note.note}>
                                <CelloString
                                onClick={() => handleClick(note.note)}
                                > {note.note} </CelloString>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}


export const anthonyIbrahimInstrument = new Instrument('anthonyIbrahim', Cello);
