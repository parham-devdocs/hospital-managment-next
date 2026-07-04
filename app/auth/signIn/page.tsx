import SignIn from "../../features/auth/signIn";

const Page = () => {
  return (
    <div className=' w-full h-full flex items-center justify-center  p-4'>
        <div className='w-full max-w-md'>
        

          <SignIn />
      </div>
    </div>
  );
}

export default Page;