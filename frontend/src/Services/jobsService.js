import API from "./api";
import { dummyJobs } from "./sampleData";

// const dummyJobs = [
//   {
//     id: "JD202512",
//     title: "Software Engineer I",
//     company: "Google",
//     location: "Bengaluru, IND",
//     type: "Full Time",
//     postedDate: "30 July, 2025",
//     salary: "27 LPA",
//     image: "/Jobs/Google-logo1.png",
//     industry: "IT", // Google → Tech / IT
//   },
//   {
//     id: "JD202556",
//     title: "Frontend Developer",
//     company: "Microsoft",
//     location: "Hyderabad, IND",
//     type: "Full Time",
//     postedDate: "28 July, 2025",
//     salary: "24 LPA",
//     image: "/Jobs/Google-logo1.png",
//     industry: "IT", // Microsoft → Tech / IT
    
//   },
//   {
//     id: "JD202536",
//     title: "Data Scientist",
//     company: "Amazon",
//     location: "Chennai, IND",
//     type: "Contract",
//     postedDate: "29 July, 2025",
//     salary: "30 LPA",
//     image: "/Jobs/Amazon.png",
//     industry: "Retail", // Amazon → e-commerce / retail
//   },
//   {
//     id: "JD202598",
//     title: "AI Engineer",
//     company: "OpenAI",
//     location: "Remote",
//     type: "Full Time",
//     postedDate: "25 July, 2025",
//     salary: "50 LPA",
//     image: "/Jobs/Google-logo1.png",
//     industry: "Engineering", // AI → falls under advanced engineering/R&D
//   },
//   {
//     id: "JD202547",
//     title: "Backend Developer",
//     company: "Netflix",
//     location: "Mumbai, IND",
//     type: "Full Time",
//     postedDate: "27 July, 2025",
//     salary: "35 LPA",
//     image: "/Jobs/Google-logo1.png",
//     industry: "Media", // Netflix → entertainment/media
//   },
// ];

export const getAllJobs = async () => {
  // 🔁 Later, switch to this:
  // const response = await API.get("/v1/jobs/public?page=1&limit=20&sort=asc&sortedBy=createdAt&includeDescription=true&isTrending=true");
  // return response.data;

  // ✅ Now, return dummy
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyJobs), 500);
  });
};

export const getJobById = async (id) => {
  // 🔁 Later, switch to:
  // const response = await API.get(`/jobs/${id}`);
  // return response.data;

  // ✅ Now, return from dummy
  return new Promise((resolve) => {
    const job = dummyJobs.find((j) => j.id === id);
    setTimeout(() => resolve(job), 300);
  });
};