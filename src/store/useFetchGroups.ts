import { IColection } from './../utils/colection';
import { IColections } from './../utils/colection';
import { db } from '@/assets/firebaseApi';
import { collection, getDocs,deleteDoc, doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand';

const fetchGroups = create<IColections>((set) => ({
  collections: [],
  fetchLoading: true,
  documentIds: [],
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
  fetchDocumentsId: async () => {
    set({ fetchLoading: true });
    try {
      const querySnapshot = await getDocs(collection(db, 'categories'));
  
      // Extracting id and groupPhoto
      const documentIds: { id: string; photo: string }[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          photo: data.groupPhoto || '', // Default to an empty string if groupPhoto is undefined
        };
      });
  
      console.log('Fetched document IDs and photos:', documentIds);
  
      set({ documentIds, fetchLoading: false });
    } catch (error) {
      console.error('Error fetching document IDs:', error);
      set({ fetchLoading: false });
    }
  },
  
  deleteGroup: async (groupId: string) => {
    try {
      await deleteDoc(doc(db, 'categories', groupId));
      console.log(`Group with ID ${groupId} deleted successfully`);

      
      set((state) => ({
        collections: state.collections?.filter((group) => group.groupName !== groupId),
        documentIds: state.documentIds.filter((id) => id !== groupId),
      }));
    } catch (error) {
      console.error('Error deleting group:', error);
    }
  },
  itemOfGroup: async (id: string) => {
    try {
      const docRef = doc(db, 'categories', id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        console.log('Fetched item:', data);
        return {
          groupName: data.groupName,
          groupPhoto: data.groupPhoto,
          groupDescription: data.groupDescription,
          products: data.products || [],
        };
      } else {
        console.warn(`No document found with ID: ${id}`);
        return null;
      }
    } catch (error) {
      console.error('Error fetching item by ID:', error);
      return null;
    }
  },
}));

export default fetchGroups;
