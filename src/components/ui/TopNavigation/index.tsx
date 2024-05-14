import css from "./style.module.css";
import Image from "next/image";
import pinImg from "@/static/icons/pin.svg";
// import Dropdown from "../Dropdown";
// import DropdownItem from "../Dropdown/DropdownItem";
// import { userdropdownMenu } from "@/store/dropdownMenuStore";
import SelectedMenu from "@/components/ui/SelectedMenu";

const TopNavigation = () => {
  // const { dropdownMenuList } = userdropdownMenu();

  return (
    <div className={"container"}>
      <div className={css.nav__top}>
        <div className={css.nav__inner}>
          <div className={css.naw__dropdown}>
            <Image src={pinImg} alt={"pin"} width={24} height={24} />
            {/* <Dropdown
              content={
                <>
                  {dropdownMenuList.map((item, index) => (
                    <DropdownItem key={index}>{item}</DropdownItem>
                  ))}
                </>
              }
            /> */}
            <SelectedMenu />
          </div>
          <span className={css.nav__aprove}>Перевірити адресу</span>
          <span className={css.nav__time}>
            Середній час доставки*:{" "}
            <b className={css.nav__text_bold}>99:99:99</b>
          </span>
        </div>
        <div className={css.nav__top_right}>
          <span className={css.nav__time_open}>
            Ми працюємо: с 11:00 до 23:00
          </span>
          <button className={css.nav__sign}>Войти в аккаунт</button>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
