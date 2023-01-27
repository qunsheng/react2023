import React, {useState} from 'react';
import './App.css';

/**
 * 
 * Build Tower of Hanoi game
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 * https://www.youtube.com/watch?v=G8P6L1E-6Mw&t=192s
 * 
 * Steps:
 * 1) display 3 towers using tower height (heigh=1 means the tower has 1 disk)
 * 2) make 3 towers side by side using flex box
 * 3) display a line in background as tower for each tower
 * 4) when hover to tower line, the background of line should change to red
 * 5) display a blue box in background as disk for each tower height using flex box
 * 6) use relative/abosolute position to align disks and line
 * 7) refactor the code using disk number as id for each disk
 * 8) add onClick function for each tower, when tower get first clicked, it will select a tower, 
 * and when tower get clicked, it will remove the a disk from previous selected tower, 
 * and add a disk to newly clicked tower
 * 9) if last tower has all disks, show alert "You Win!"
 * 
 */
function App() {
  const [towers, setTowers] = useState([[1, 2, 3], [], []]); 
  const [selectedTowerIndex, setSelectedTowIndex] = useState(null);
  const ENDING_TOWER_INDEX = 2;

  function handleClick(clickedTowerIndex){
    if(selectedTowerIndex === null){
      setSelectedTowIndex(clickedTowerIndex);
    } else {
      // remove one disk from selected tower
      // add a disk to clicked tower
      const newTowers = [...towers];
      if( newTowers[selectedTowerIndex].length > 0){
        const newDisk = newTowers[selectedTowerIndex].shift();
        if(newDisk){
          newTowers[clickedTowerIndex].unshift(newDisk);
          setTowers(newTowers);
          setSelectedTowIndex(null);
          if(newTowers[ENDING_TOWER_INDEX].length === 3) {
            alert("You Win!");
          }
        }
      }
    }
  }
      
  return (
    <div className='App'>
      <h1>Tower of Hanoi</h1>
      <div className='towers'>
        {towers.map( (diskArray, towerIndex)=> {
          return <div className='tower' key={towerIndex} onClick={() => handleClick(towerIndex)}>
          <div className='line' ></div>
          <div className='disks'>
            {diskArray.map( (diskNumber) => {
              return <div className='disk' key = {diskNumber} style={{width: `${10 + diskNumber*10}px`}}></div>
            })}
          </div>
        </div>
        })}
      </div>
    </div>
  );
}

export default App;
