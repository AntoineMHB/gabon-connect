import { SignupForm } from "@/components/signup-form";

function SignUpPage() {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#F8F6F6]">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
export default SignUpPage;
