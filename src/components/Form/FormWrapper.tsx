interface FormWrapperProps {
  submitFunction?: () => void;
  children: React.ReactNode;
}

export function FormWrapper({ submitFunction, children }: FormWrapperProps) {
  return (
    <div className="mb-8 md:mb-6">
      <form className="flex flex-col gap-4" onSubmit={submitFunction}>
        {children}
      </form>
    </div>
  );
}
