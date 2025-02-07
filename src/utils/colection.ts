
// import { IProduct } from './productsItem';
export interface IColection {
  groupDescription: string;
  groupName: string;
  groupPhoto: string; 
  // products: IProduct[];
  products: {name:string,price:number}

}
interface DocumentIdWithPhoto {
  id: string;
  photo: string;
}
export interface IColections {
  
  collections: IColection[] | [] | undefined;
  fetchLoading: boolean;
  documentIds:DocumentIdWithPhoto[];
  fetchGroups: () => Promise<void>;
  fetchDocumentsId: () => Promise<void>;
  deleteGroup: (groupId: string) => Promise<void>;
  itemOfGroup: (id: string) => Promise<IColection | null>;
}
