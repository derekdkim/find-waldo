import React, { useState, useEffect } from 'react';
import fetchLeaderboard from '../../firebase/fetchLeaderboard.js';
import formatTime from '../../misc/formatTime.js';
import './index.css';

function Leaderboard () {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // async function required to access fetched Promise object
    const renderData = async () => {
      const data = await fetchLeaderboard();
  
      let dataArr = [];
      data.forEach((entry) => {
        dataArr.push(entry.data());
      });
  
      // Limit the number of contents rendered to top 20
      const finalDataArr = dataArr.length > 20 ? dataArr.slice(0, 20) : dataArr;
      console.log(finalDataArr);

      setLeaderboardData(finalDataArr);
    }

    renderData();
  }, []);

  return(
    <div className='leaderboardContainer'>
      {
        <ul className='leaderboardList'>
          {
            leaderboardData.map((entry, index) => {
              return <li className='leaderboardEntry' key={index}>
                      {`${formatTime(entry.time)}   ${entry.name}`}
                    </li>
            })
          }
      </ul>
      }
    </div>
  );
}

export default Leaderboard;