"use client";
import { usePageContext } from "@/shared/model";
import { ChildrenProp, ClassNameProp } from "@/shared/types";
import clsx from "clsx";

export interface PageMainProps extends ChildrenProp, ClassNameProp {
  fullWidth?: boolean;
  noHeader?: boolean;
}

export const PageMain: React.FC<PageMainProps> = ({
  children,
  fullWidth = false,
  className,
}) => {
  const { headerSize } = usePageContext();

  const headerHeight = headerSize === "md" ? "80px" : "120px";

  return (
    <main
      className={clsx("w-full")}
      style={{ height: `calc(100% - ${headerHeight})` }}
    >
      <div
        className={clsx(
          "h-full",
          fullWidth ? "w-full" : "container mx-auto px-6"
        )}
      >
        {children}
      </div>
    </main>
  );
};
