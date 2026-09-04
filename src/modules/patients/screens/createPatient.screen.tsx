import Header from "@/src/shared/components/header";
import { RiHealthBookLine } from "@remixicon/react";
import CreatePatientForm from "../components/forms";
const CreatePatientScreen = () => {
  return (
       <div className=' space-y-6 w-full'>
            <Header title='Create Patient' icon={<RiHealthBookLine />}  />

            <CreatePatientForm/>
                  </div>
      

  );
};

export default CreatePatientScreen
