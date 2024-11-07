
// import { IProduct } from './productsItem';
export interface IColection {
  groupDescription: string;
  groupName: string;
  groupPhoto: string; 
  // products: IProduct[];
  products: {name:string,price:number}

}
export interface IColections {
  collections: IColection[] | [] | undefined;
  fetchLoading: boolean;
  fetchGroups: () => void;
}
