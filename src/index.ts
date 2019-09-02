import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -8]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
  'xXxxXzaaAalsDefFexX stTtfseHyjfjJjXx'
);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(-33);
linkedList.add(67);
linkedList.add(215);
linkedList.add(-199);
linkedList.add(401);
linkedList.sort();
linkedList.print();
