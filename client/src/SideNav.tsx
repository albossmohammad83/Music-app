// 3rd party library imports
import classNames from 'classnames';
import { List } from 'immutable';
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  RadioButton20,
  RadioButtonChecked20,
  Music20,
  Music32,
  Stop20,
} from '@carbon/icons-react';


// project imports
import { DispatchAction } from './Reducer';
import { AppState } from './State';
import { Instrument } from './Instruments';
import { Visualizer } from './Visualizers';



/** ------------------------------------------------------------------------ **
 * SideNav component
 ** ------------------------------------------------------------------------ */

type SideNavProps = {
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
};

export function SideNav({ state, dispatch }: SideNavProps): JSX.Element {
  /**
   * 
   * SideNav
   * |-----------------|
   * | Nameless App    |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   |
   * |                 |
   * | InstrumentsNav  |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   | 
   * |                 |
   * | VisualizersNav  |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   |
   * |                 |
   * | SongsNav        |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   |
   * |                 |
   * |-----------------|
  */

  return (
    <div className="absolute top-0 left-0 bottom-0 w5 z-1 shadow-1 bg-white flex flex-column">
      <div className="h3 fw7 f5 flex items-center pl3 bb b--light-gray">
        Quad-Squad Music App
      </div>
      <div className="flex-auto">
        <InstrumentsNav state={state} dispatch={dispatch} />
        <VisualizersNav state={state} dispatch={dispatch} />
        <SongsNav state={state} dispatch={dispatch} />
        <AlbumsNav state={state} dispatch={dispatch} />
        {/* <SearchNav state={state} dispatch={dispatch} /> */}
      </div>
    </div>
  );
}


/** ------------------------------------------------------------------------ **
 * SideNav Sub-Components
 ** ------------------------------------------------------------------------ */

 function InstrumentsNav({ state }: SideNavProps): JSX.Element {
  /** 
   *  InstrumentsNav
   *  |-----------------|
   *  | Section         |
   *  | |-------------| |
   *  | | RadioButton | |
   *  | |-------------| | 
   *  | | RadioButton | |
   *  | |-------------| |
   *  |      ...        |
   *  |-----------------|
  */
  
  const instruments: List<Instrument> = state.get('instruments');
  const activeInstrument = state.get('instrument')?.name;
  const location = useLocation();

  return (
    <Section title="Instruments">
      {instruments.map(i => (
        <RadioButton
          key={i.name}
          to={`/${i.name}${location.search}`}
          text={i.name}
          active={i.name === activeInstrument}
          onClick={() => console.log(i.name)}
        />
      ))}
    </Section>
  );
}

function VisualizersNav({ state }: SideNavProps): JSX.Element {
  /** 
   *  VisualizersNav
   *  |-----------------|
   *  | Section         |
   *  | |-------------| |
   *  | | RadioButton | |
   *  | |-------------| | 
   *  | | RadioButton | |
   *  | |-------------| |
   *  |      ...        |
   *  |-----------------|
  */

  const visualizers: List<Visualizer> = state.get('visualizers');
  const activeVisualizer = state.get('visualizer')?.name;
  const location = useLocation();

  return (
    <Section title="Visualizers">
      {visualizers.map(v => (
        <RadioButton
        key={v.name}
        to={{
          pathname: location.pathname,
          search: `?visualizer=${v.name}`,
        }}
        text={v.name}
        active={v.name === activeVisualizer}
        onClick={() => console.log(v.name)}
        />
        ))}
    </Section>
  );
}



function SongsNav({ state, dispatch }: SideNavProps): JSX.Element {
  /** 
   * 
   *  SongsNav
   *  |-----------------|
   *  | Section         |
   *  | |-------------| |
   *  | | Music20     | |
   *  | |-------------| | 
   *  | | Music20     | |
   *  | |-------------| |
   *  |      ...        |
   *  |-----------------|
  */

  const songs: List<any> = state.get('songs', List());
  console.log("songs:",songs);
  const [search, setSearch] = useState('');
  console.log("search:", search);
  let filterd;
  console.log("filterd:", filterd);
  
  if(search.length !== 0){
    return (
      <Section title="Playlist">
          <div>
         <form>
     <label id="search">Search Songs</label>
     <input type="search" placeholder="song title" onChange={e => setSearch(e.target.value)} />
      </form>
   </div>
        
        <p hidden>{filterd = songs.filter(song => song.get('songTitle') === search )}</p>
         {filterd.map(song => (
          <div
            key={song.get('id')}
            className="f6 pointer underline flex items-center no-underline i dim"
            onClick={() =>
              dispatch(new DispatchAction('PLAY_SONG', { id: song.get('id') }))
            }
          >
            <Music20 className="mr1" />
            {song.get('songTitle')}
          </div>
        ))}
      </Section>
    );
  }
  else{
    return (
      <Section title="Playlist">
          <div>
         <form>
     <label id="search">Search Songs</label>
     <input type="search" placeholder="song title" onChange={e => setSearch(e.target.value)} />
      </form>
   </div>
        {songs.map(song => (
          <div
            key={song.get('id')}
            className="f6 pointer underline flex items-center no-underline i dim"
            onClick={() =>
              dispatch(new DispatchAction('PLAY_SONG', { id: song.get('id') }))
            }
          >
            <Music20 className="mr1" />
            {song.get('songTitle')}
          </div>
        ))}
      </Section>
    );

  }
  
  
}


function AlbumsNav({ state, dispatch }: SideNavProps): JSX.Element {
  /** 
   * 
   *  AlbumNav
   *  |-----------------|
   *  | Section         |
   *  | |-------------| |
   *  | | Music20     | |
   *  | |-------------| | 
   *  | | Music20     | |
   *  | |-------------| |
   *  |      ...        |
   *  |-----------------|
  */

  const albums: List<any> = state.get('albums', List());
  const songs: List<any> = state.get('songs', List());
  let count = 0;
  console.log("Albums:", albums.size);
  console.log("songs:",songs.size);
  return (
    
    <Section title="Albums">
      {albums.map(album => (
        <div
          key={album.get('id')}
          className="f6 pointer underline flex items-center no-underline i dim"
          onClick={() =>{
            dispatch(new DispatchAction('PLAY_SONG', { id: album.get('id') }))
          }
        }
        >
          <Music32 className="mr1" />
          <br></br>
          Album title:{"\n"}{album.get('albumTitle')}
          <br></br>song title:{"\n"}{songs.get(count).get('songTitle')}
          <p hidden>{count++}</p>
          <br></br>
          {`\nArtist: ${album.get('artist')} `}
          <br></br>
        </div>
      ))}
      <div>
      <button
            onClick={() => {
              dispatch(new DispatchAction('STOP_SONG'))}}>
            <Stop20 />
          </button>
          </div>stop
    </Section>
  );
}


/** ------------------------------------------------------------------------ **
 * Auxilliary components
 ** ------------------------------------------------------------------------ */

/** ------------------------------------- **
 * Radio Button
 ** ------------------------------------- */

 type RadioButtonProps = {
  to: any,
  text: string,
  active: boolean,
  onClick: () => void
};

function RadioButton({ to, text, active, onClick }: RadioButtonProps): JSX.Element {
  return (
    <Link to={to} className="no-underline">
      <div
        className={classNames('f6 flex items-center black', { fw7: active })}
        onClick={onClick}
      >
        {active ? (
          <RadioButtonChecked20 className="mr1" />
        ) : (
          <RadioButton20 className="mr1" />
        )}
        <div className="dim">{text}</div>
      </div>
    </Link>
  );
}


/** ------------------------------------- **
 * Section
 ** ------------------------------------- */

const Section: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="flex flex-column h-25 bb b--light-gray pa3">
      <div className="fw7 mb2">{title} </div>
      <div className="flex-auto overflow-scroll">{children}</div>
    </div>
  );
};
