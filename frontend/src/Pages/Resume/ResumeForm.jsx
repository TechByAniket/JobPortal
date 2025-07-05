import { useFieldArray } from "react-hook-form";

export const ResumeForm = ({ register, control }) => {
  const { fields, append } = useFieldArray({
    control,
    name: "education"
  });

  return (
    <form className="space-y-4">
      <input
        {...register("fullName")}
        type="text"
        placeholder="Full Name"
        className="input w-full"
      />

      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="input w-full"
      />

      <input
        {...register("phone")}
        type="text"
        placeholder="Phone"
        className="input w-full"
      />

      <h3 className="font-medium">Education</h3>
      {fields.map((field, index) => (
        <div key={field.id} className="grid grid-cols-3 gap-2">
          <input
            {...register(`education.${index}.degree`)}
            placeholder="Degree"
            className="input"
          />
          <input
            {...register(`education.${index}.institute`)}
            placeholder="Institute"
            className="input"
          />
          <input
            {...register(`education.${index}.year`)}
            placeholder="Year"
            className="input"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ degree: "", institute: "", year: "" })}
        className="btn bg-blue-600 text-white rounded px-3 py-1"
      >
        + Add Education
      </button>

      <h3 className="font-medium">Skills</h3>
      <input
        {...register("skills")}
        type="text"
        placeholder="Comma separated (e.g., React, JS)"
        className="input w-full"
      />
    </form>
  );
};
