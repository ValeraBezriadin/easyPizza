import Image from "next/image";
import css from "./style.module.css";

interface AdminFileProps {
  formdata: {
    groupName: string;
    groupPhoto: FileList | null;
    groupDescription: string;
  };
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  imageUrl: string;
}
const AdminFile: React.FC<AdminFileProps> = ({
  formdata,
  setImageUrl,
  imageUrl,
}) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUrl(URL.createObjectURL(file));
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
