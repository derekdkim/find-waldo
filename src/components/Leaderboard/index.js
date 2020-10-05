import React, { useState, useEffect } from 'react';
import fetchLeaderboard from '../../firebase/fetchLeaderboard.js';
import formatTime from '../../misc/formatTime.js';
import Table from '../Table';
import './index.css';

function Leaderboard () {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const columns = [
    {
      Header: 'Rank',
      Cell: (row) => {
        return <div>{row.row.index + 1}</div>;
      }
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Time',
      accessor: 'time',
      Cell: (props) => {
      return <div>{formatTime(props.value)}</div>
      }
    }
  ]

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

  const handleClick = () => {
    window.location.reload();
    return false;
  }

  return(
    <div className='leaderboardContainer'>
      <div id='leaderboardHeader'>
        <h1>Leaderboard</h1>
      </div>
      <Table columns={columns} data={leaderboardData}/>
      <button onClick={handleClick} id='reload-btn'>
        Play Again
      </button>
    </div>
  );
}

export default Leaderboard;