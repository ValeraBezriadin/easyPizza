import Image from "next/image";
import css from "./style.module.css";
import { UseFormRegister } from "react-hook-form";

interface IAdminFileProps {
  formdata: UseFormRegister<FormData>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  imageUrl: string;
}
const AdminFile: React.FC<IAdminFileProps> = ({
  formdata,
  setImageUrl,
  imageUrl,
}) => {
  console.log("sigma", formdata);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };
  const clearFile = () => {
    setImageUrl("");
  };
  return (
    <>
      {imageUrl ? (
        <div className={css.file__img}>
          <Image src={imageUrl} width={100} height={100} alt="Group Photo" />
          <button
            type="button"
            onClick={clearFile}
            className={css.file__delete}
          >
            Delete Photo
          </button>
        </div>
      ) : (
        <input
          className={css.form__input}
          type="file"
          id="groupPhoto"
          {...formdata("groupPhoto", {
            onChange: handleFileChange,
          })}
        />
      )}
    </>
  );
};

export default AdminFile;
