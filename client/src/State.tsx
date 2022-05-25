// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { marwanXylophone } from './instruments/marwanalnounou';
import { MohammadDrumInstrument } from './instruments/albossmohammad83';
import { anthonyIbrahimInstrument } from './instruments/anthonyIbrahim/anthonyIbrahim';

import { MarwanVisualizer } from './visualizers/marwanalnounou';
import { MohammadVisualizer} from './visualizers/albossmohammad83';
import { anthonyIbrahim } from './visualizers/anthonyIbrahim';
import { WaveformVisualizer } from './visualizers/Waveform';
import { vasvenugopal4Visualizer } from './visualizers/vasvenugopal4';
import { vasvenugopal4Instrument } from './instruments/vasvenugopal4';




/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */


const instruments = List([PianoInstrument, MohammadDrumInstrument, anthonyIbrahimInstrument, marwanXylophone, vasvenugopal4Instrument]);                  // similar to Instrument[]


/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
 const visualizers = List([WaveformVisualizer, MohammadVisualizer, anthonyIbrahim, MarwanVisualizer, vasvenugopal4Visualizer]);    // similar to Visualizer[]



/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});
