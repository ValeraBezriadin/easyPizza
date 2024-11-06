
import { db } from '@/assets/firebaseApi';
import IColections from '@/utils/colection';
import { collection, getDocs } from 'firebase/firestore';
import { create } from 'zustand'





const fetchGroups = create<IColections>((set) => ({
  collections: [],
  fetchLoading: true,

  fetchGroups: async () => {
    set({ fetchLoading: true }); 
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
     
      
      const collections = querySnapshot.docs.map((doc) => doc.data());
      console.log("interface",collections);
      
      set({ collections, loadingFetch: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ fetchLoading: false }); 
    }
  },
}));

export default fetchGroups