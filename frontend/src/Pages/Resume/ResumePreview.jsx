export const ResumePreview = ({ formData }) => {
  const { fullName, email, phone, education, skills } = formData;

  return (
    <div className="space-y-4 text-left font-sans">
      <div>
        <h1 className="text-2xl font-bold">{fullName || "Your Name"}</h1>
        <p className="text-sm text-gray-600">{email} • {phone}</p>
      </div>

      <div>
        <h2 className="font-semibold border-b pb-1 mb-1">Education</h2>
        {education?.map((edu, i) => (
          <div key={i}>
            <p className="font-medium">{edu.degree}</p>
            <p className="text-sm">{edu.institute}, {edu.year}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-semibold border-b pb-1 mb-1">Skills</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills?.split(",").map((skill, i) => (
            <li key={i} className="bg-gray-200 rounded-full px-3 py-1">
              {skill.trim()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

