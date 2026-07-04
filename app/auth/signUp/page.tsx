import SignUp from "../../features/auth/signup";

const Page = () => {
  return (
    <div className=' w-full h-full flex items-center justify-center  p-4'>
        <div className='w-full max-w-md'>
          {/* Minimalist Header */}
        

          <SignUp />
      </div>
    </div>
  );
}

export default Page;