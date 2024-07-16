import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import css from "./style.module.css";
import useImage from "@/components/hooks/useImage";
import Image from "next/image";
import AdminFile from "./AdminFile";

interface FormData {
  groupName: string;
  groupPhoto: FileList | null;
  groupDescription: string;
}
const schema = z.object({
  groupName: z.string().min(1, "Name of group is requere"),
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

  const { upLoadImage, downloadUrl, uploading } = useImage();
  const [imageUrl, setImageUrl] = useState("");
  const onSubmit = (data: FormData) => {
    try {
      upLoadImage(data.groupPhoto).then((res) => {
        console.log("download", downloadUrl);
        if (res) {
          console.log("res add", res);
          console.log("download", downloadUrl);
        }
      });

      console.log(123123, { ...data, groupPhoto: downloadUrl });
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
        Создать группу
      </button>
    </form>
  );
};

export default AdminAddGroup;
