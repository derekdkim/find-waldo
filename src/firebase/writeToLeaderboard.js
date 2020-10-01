import firebase from 'firebase';
import 'firebase/firestore';

const writeToLeaderboard = async (name, time) => {
  await firebase.firestore().collection('leaderboard').add({
    name: name,
    time: time
  });
}

export default writeToLeaderboard;