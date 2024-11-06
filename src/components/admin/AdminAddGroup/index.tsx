import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import css from "./style.module.css";
import useImage from "@/components/hooks/useImage";

import AdminFile from "./AdminFile";
import { setDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "@/assets/firebaseApi";
import useFetchGroups from "@/store/useFetchGroups";
interface FormData {
  groupName: string;
  groupPhoto: FileList | null;
  groupDescription: string;
}
const schema = z.object({
  groupName: z
    .string()
    .min(1, "Name of group is requere")
    .transform((name) => name.toLowerCase()),
  groupPhoto: z
    .custom<FileList>()
    .transform((file) => file.length > 0 && file.item(0))
    .refine((file) => !file || (!!file && file.size <= 10 * 1024 * 1024), {
      message: "The profile picture must be a maximum of 10MB.",
    })
    .refine((file) => !file || (!!file && file.type?.startsWith("image")), {
      message: "Only images are allowed to be sent.",
    }),
  groupDescription: z.string().min(1, "Description of group is requere"),
});

const AdminAddGroup: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { upLoadImage } = useImage();
  const [imageUrl, setImageUrl] = useState("");
  const { fetchGroups } = useFetchGroups();
  const db = getFirestore(app);
  const onSubmit = async (data: FormData) => {
    try {
      const file = data.groupPhoto;
      if (file) {
        const url = await upLoadImage(file);
        const docRef = doc(db, "categories", data.groupName);
        await setDoc(docRef, {
          ...data,
          groupPhoto: url,
          products: [
            { name: "apple", price: 33 },
            { name: "banana", price: 43 },
          ],
        });
        console.log("Document written with ID: ", docRef.id);
      }
      fetchGroups();
    } catch (error) {
      alert(error);
    }
    reset();
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.form__container}>
        <label htmlFor="groupName">Group name</label>
        <input
          className={css.form__input}
          type="text"
          autoComplete="off"
          id="groupName"
          {...register("groupName")}
        />
        {errors.groupName && (
          <p className={css.error}>{errors.groupName.message}</p>
        )}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="groupPhoto">Photo</label>
        <AdminFile
          formdata={register}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
        />
        {errors.groupPhoto && (
          <p className={css.error}>{errors.groupPhoto.message}</p>
        )}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="groupDescription">Description</label>
        <textarea
          id="groupDescription"
          {...register("groupDescription")}
          className={css.form__textarea}
        ></textarea>
        {errors.groupDescription && (
          <p className={css.error}>{errors.groupDescription.message}</p>
        )}
      </div>

      <button type="submit" className={css.form__submit}>
        Create Group
      </button>
    </form>
  );
};

export default AdminAddGroup;
