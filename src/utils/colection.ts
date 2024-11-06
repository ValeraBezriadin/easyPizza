import { StaticImageData } from 'next/image';
import { IProduct } from './productsItem';
interface IColection {
  groupDescription:string,
  groupName:string,
  groupPhoto:StaticImageData,
  products:IProduct[],

}
interface IColections {
  collections: IColection[] | [] | undefined,
  fetchLoading:boolean,
  fetchGroups:()=>void,
}
export default IColections