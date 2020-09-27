import firebase from 'firebase';
import 'firebase/firestore';

const fetchData = async (key) => {
  const doc = await firebase.firestore().collection('charPos').doc(key)
    .get();

  return await doc.data();
}

export default fetchData;