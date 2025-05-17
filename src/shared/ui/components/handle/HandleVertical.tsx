import { HandleProps } from './handle-props';

export const HandleVertical: React.FC<HandleProps> = ({
  onClick,
  style,
  disabled,
}) => {
  return (
    <div className="w-1 h-8 rounded-full transition-colors duration-200 bg-default hover:bg-default-400  relative">
      <button
        className="w-3 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={onClick}
        disabled={disabled}
        style={style}
      ></button>
    </div>
  );
};
