import ButtonWithIcon from "@components/Button/ButtonWithIcon";
import PrimaryButton from "@components/Button/PrimaryButton";
import { FormHeader } from "@components/Form/FormHeader";
import { FormWrapper } from "@components/Form/FormWrapper";
import AuthHeader from "@components/Header/Header";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layout/AuthLayout";

const Auth = () => {
  return (
    <div>
      <AuthHeader />
      <AuthLayout>
        <div className="max-w-xl w-full flex flex-col gap-8 sm:gap-6">
          <FormHeader
            headerTitle="Log in or Sign up"
            subTitle={`Join millions of others in sharing your successful moves on HelpMeOut`}
          />

          <div className="flex flex-col gap-6">
            <ButtonWithIcon
              type="button"
              buttonText="Continue with Google"
              className="btn-secondary w-full"
              iconUrl="assets/svg/google.svg"
            />
            <ButtonWithIcon
              type="button"
              buttonText="Continue with Facebook"
              className="btn-secondary w-full"
              iconUrl="assets/svg/facebook.svg"
            />
          </div>

          <div className="flex justify-between items-center px-4">
            <span className="w-2/5 h-[1px] bg-gray-400"></span>
            <p className="text-xs text-center font-medium text-gray-400">or</p>
            <span className="w-2/5 h-[1px] bg-gray-400"></span>
          </div>

          <FormWrapper>
            <Input
              label="Email"
              inputType="email"
              name="email"
              className="w-full outline-none border border-primary-100 caret-primary px-4 focus:border-primary"
              labelClassName="mb-2"
              placeholder="Enter your email address"
            />
            <Input
              label="Password"
              inputType="password"
              name="email"
              className="w-full outline-none border border-primary-100 caret-primary px-4 focus:border-primary"
              labelClassName="mb-2"
              placeholder="Enter your password"
            />
            <PrimaryButton
              type="submit"
              title="Sign up"
              buttonText="Sign up"
              className="mt-4"
            />
          </FormWrapper>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Auth;
