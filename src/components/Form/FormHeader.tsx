interface FormHeaderType {
  headerTitle: string;
  subTitle: string;
}

export function FormHeader({ headerTitle, subTitle }: FormHeaderType) {
  return (
    <>
      <div className="max-w-[38ch] text-center mx-auto xs:text-left">
        <h1 className="text-h4 font-semibold text-primary-700 mb-2">
          {headerTitle}
        </h1>
        <p className="text-xs font-light">{subTitle}</p>
      </div>
    </>
  );
}
