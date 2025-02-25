
export interface Profile {
  id: string;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  date_of_birth: string | null;
  gender: string | null;
  blood_type: string | null;
  medical_conditions: string[] | null;
  allergies: string[] | null;
  updated_at: string;
  avatar_url?: string | null;
}

export interface ProfileFormValues {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  blood_type: string;
  medical_conditions: string;
  allergies: string;
}
