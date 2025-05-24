import { ChildrenProp } from "@/shared/types";

export const PageContent: React.FC<ChildrenProp> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};
