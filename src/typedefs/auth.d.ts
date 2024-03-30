import { Database } from "@/types/supabase";

//  ---LOGIN_DATA_TYPES---------------------------------
export type LoginData = {
  email: string;
  password: string;
};

//  ---REGISTER_DATA_TYPES---------------------------------
export type RegisterData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

// ----------------------------------------------------------------------
// ACTIONS & RESPONSES
export type TAuthInit = {
  readonly user?: UserDataT;
};

export type TAuthLoginAction = {
  readonly email: string;
  readonly password: string;
};

export type TAuthRegisterAction = {
  readonly email: string;
  readonly password: string;
  readonly displayName: string;
};

// ---USER_DATA_TYPES---------------------------------
export type UserTableT = Database["public"]["Tables"]["users"];
export type UserT = Database["public"]["Tables"]["users"]["Row"];
export type UserDataT = UserT & {
  company: CompanyT;
};

// ---COMPANY_DATA_TYPES---------------------------------
export type CompanyT = Database["public"]["Tables"]["company"]["Row"];
