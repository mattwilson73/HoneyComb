import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import GameLayout from '../comb/examples/drag-and-drop/src/GameLayout';
import TilesLayout from '../comb/examples/drag-and-drop/src/TilesLayout';
import TeacherLayout from '../comb/examples/drag-and-drop/src/TeacherLayout';
import '../comb/examples/drag-and-drop/src/App.css';

class honeycomb extends Component {
  render() {
    return (
      <div className="honeycomb">
        <h2>Honeycomb Prototype</h2>
        <p>Drag Students from the right grid to the left grid.</p>
        <div>
          <button>
            Chatbox
          </button>
        </div>
        <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
          <GameLayout />
          <TeacherLayout />
          <TilesLayout />
        </HexGrid>
      </div>
    );
  }
}

export default honeycomb;
