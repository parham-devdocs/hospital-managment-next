import { Show, SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <Show when="signed-out">
        <SignInButton />
      </Show>
    </header>
  );
};

export default SignIn;
