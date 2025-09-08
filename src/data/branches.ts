export const Colleges = [
  "Bangalore Institute of Technology",
  "Other"
] as const;
export interface StudentData {
  name: string;
  email: string;
  usn: string;
  photoURL: string | null;
  branch: string;
  year: number;
  tags: string[];
  about: string;
  linkedin: string | null;
  github: string | null;
  instagram: string | null;
  college: string;
  collegeEmail: string | null;
};
export type College = typeof Colleges[number];
