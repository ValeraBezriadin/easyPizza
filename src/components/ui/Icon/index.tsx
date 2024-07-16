import { type SVGProps } from "react";
import css from "./style.module.css";
import { type IconName } from "@/../types/name";

export { IconName };

export function Icon({
  name,
  width,
  height,

  active = true,
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  width?: number;
  height1?: number;
  active?: boolean;
}) {
  return (
    <svg
      className={active ? css.active : css.default}
      style={{
        display: "inline",
        alignSelf: "center",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <use
        className={css.icon}
        fill={"red"}
        xlinkHref={`/icons/sprite.svg#${name}`}
      />
    </svg>
  );
}
