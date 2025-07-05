import { useForm } from "react-hook-form";
import {ResumeForm} from "./ResumeForm";
import {ResumePreview} from "./ResumePreview";

export const BuildResume = () => {
  const { register, control, watch } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      education: [{ degree: "", institute: "", year: "" }],
      skills: ""
    }
  });

  const formData = watch();

  return (
    <section className="container my-padding flex flex-col justify-center items-center gap-3 text-center">
      <h1 className="font-medium">
        Craft Your Resume. From <span className="text-blue-600">Zero to Hired</span>
      </h1>
      <p className="my-subheading">
        Fill in your details, choose your sections, and let your resume take shape — customized for your career path.
      </p>

      <div className="flex flex-col md:flex-row w-full mt-6 gap-6 text-left">
        {/* Left: Form */}
        <div className="w-full md:w-1/2">
          <ResumeForm register={register} control={control} />
        </div>

        {/* Right: Preview */}
        <div className="w-full md:w-1/2 bg-white shadow rounded-xl p-4 border">
          <ResumePreview formData={formData} />
        </div>
      </div>
    </section>
  );
};


