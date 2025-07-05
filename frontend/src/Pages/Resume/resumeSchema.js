// src/utils/resumeSchema.js
import * as Yup from 'yup';

export const resumeSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  education: Yup.array().of(
    Yup.object().shape({
      degree: Yup.string().required('Degree required'),
      institute: Yup.string().required('Institute required'),
      year: Yup.string().required('Year required'),
    })
  ),
  projects: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required('Title required'),
      description: Yup.string().required('Description required'),
    })
  ),
  skills: Yup.string().required('Skills required'),
});
