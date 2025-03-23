interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  extraClasses?: string;
}

const Button = ({ children, extraClasses = "", ...props }: ButtonProps) => {
  return (
    <button
      className={
        "flex gap-2 items-center bg-secondary text-primary px-4 py-2 hover:bg-tertiary w-fit cursor-pointer border rounded-lg " +
        extraClasses
      }
      {...props}
    >
      {children}
    </button>
  );
};

export const IconButton = ({
  children,
  extraClasses = "",

  ...props
}: ButtonProps) => {
  return (
    <Button extraClasses={"!p-2 !w-10 !h-10 " + extraClasses} {...props}>
      {children}
    </Button>
  );
};

export default Button;
