import { CSSProperties } from "react";

export const stylesheet = <T>(styles: T): Record<keyof T, CSSProperties> =>
    styles;