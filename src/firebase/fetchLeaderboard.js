import firebase from 'firebase';
import 'firebase/firestore';

const fetchLeaderboard = async () => {
  const doc = await firebase.firestore().collection('leaderboard')
    .orderBy('time', 'asc')
    .get();

  return await doc;
}

export default fetchLeaderboard;