import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import GameLayout from '../comb/examples/drag-and-drop/src/GameLayout';
import TilesLayout from '../comb/examples/drag-and-drop/src/TilesLayout';
import '../comb/examples/drag-and-drop/src/App.css';

class honeycomb extends Component {
  render() {
    return (
      <div className="honeycomb">
        <h2>Honeycomb Prototype</h2>
        <p>Drag Students from the right grid to the left grid.</p>
        <p>You can also drag & drop them within the left board, but not back to the right side.</p>
        <p>
          <small>
            TilesLayout (on the right) does not handle `onDrop` and `onDragOver` and that's why it's not possible to drop anything on these tiles.
            GameLayout (on the left) handles all the events, so it's possible to start a drag as well as drop tiles.
            It also implements custom check to disallow drop on certain tiles, like the ones that are blocked or
            already have content in them.

            The Middle Square is Blocked unless Teacher
          </small>
        </p>
        <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
          <GameLayout />
          <TilesLayout />
        </HexGrid>
      </div>
    );
  }
}

export default honeycomb;
