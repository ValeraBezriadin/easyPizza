import { IColection } from './../utils/colection';
import { IColections } from './../utils/colection';
import { db } from '@/assets/firebaseApi';
import { collection, getDocs } from 'firebase/firestore';
import { create } from 'zustand';

const fetchGroups = create<IColections>((set) => ({
  collections: [],
  fetchLoading: true,

  fetchGroups: async () => {
    set({ fetchLoading: true });
    try {
      const querySnapshot = await getDocs(collection(db, 'categories'));
      
    
      const collections: IColection[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          groupName: data.groupName,
          groupPhoto: data.groupPhoto,
          groupDescription: data.groupDescription,
          products: data.products || [], 
        };
      });
      
      console.log('Fetched collections:', collections);
      
      set({ collections, fetchLoading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      set({ fetchLoading: false });
    }
  },
}));

export default fetchGroups;
