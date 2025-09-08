export const Colleges = [
  "Bangalore Institute of Technology",
  "Other"
] as const;
export interface StudentData {
  name: string;
  email: string;
  photoURL: string | null;
  collegeEmail: string | null;
  college: College | string;
};
export type College = typeof Colleges[number];
