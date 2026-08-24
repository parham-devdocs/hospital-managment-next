import Header from "@/src/shared/components/header";
import Form from "../components/forms/index";
import { User } from "lucide-react";
const CreateDoctorScreen = () => {
  return (
       <div className=' space-y-6 w-full'>
            <Header title='Create Doctor' icon={<User />}  />

            <Form/>
                  </div>
      

  );
};

export default CreateDoctorScreen;
