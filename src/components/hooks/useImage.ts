import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useImage = ()=>{
  const [uploading,setUploading] = useState(false)
  const [downloadUrl,setDownloadUrl] = useState("")
 
  const upLoadImage  = async (file)=>{
    const storage = getStorage()
    const uniqueFileName = `${file.name.split('.')[0]}_${uuidv4()}.${file.name.split('.').pop()}`;
    const storageRef = ref(storage, `image/groups/${uniqueFileName}`);
    
    setUploading(true)
    try {
    const snaphot = await uploadBytes(storageRef,file)
    
    const url = await getDownloadURL(snaphot.ref).then((res)=>{
      if(res){
        
        setDownloadUrl(res)
        
      }
    })
  
    } catch (error) {
      alert(error)
    }
    finally{
      setUploading(false)
    }
    
  }
  return {upLoadImage,downloadUrl,uploading}
  
}
export default useImage