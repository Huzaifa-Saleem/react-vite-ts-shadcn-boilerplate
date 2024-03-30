export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      company: {
        Row: {
          company_owner: string | null;
          country: string | null;
          country_short_code: string | null;
          created_at: string;
          id: string;
          name: string | null;
          number_issued: string | null;
          onboarding: boolean | null;
          phone_number: string | null;
          phone_verified: boolean | null;
          subscription: Database["public"]["Enums"]["subscription"];
        };
        Insert: {
          company_owner?: string | null;
          country?: string | null;
          country_short_code?: string | null;
          created_at?: string;
          id?: string;
          name?: string | null;
          number_issued?: string | null;
          onboarding?: boolean | null;
          phone_number?: string | null;
          phone_verified?: boolean | null;
          subscription?: Database["public"]["Enums"]["subscription"];
        };
        Update: {
          company_owner?: string | null;
          country?: string | null;
          country_short_code?: string | null;
          created_at?: string;
          id?: string;
          name?: string | null;
          number_issued?: string | null;
          onboarding?: boolean | null;
          phone_number?: string | null;
          phone_verified?: boolean | null;
          subscription?: Database["public"]["Enums"]["subscription"];
        };
        Relationships: [
          {
            foreignKeyName: "public_company_company_owner_fkey";
            columns: ["company_owner"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          company_id: string | null;
          created_at: string;
          email: string | null;
          firstname: string | null;
          id: string;
          invitation_status: string | null;
          kinde_id: string | null;
          lastname: string | null;
          photoURL: string | null;
          updated_at: string;
        };
        Insert: {
          company_id?: string | null;
          created_at?: string;
          email?: string | null;
          firstname?: string | null;
          id?: string;
          invitation_status?: string | null;
          kinde_id?: string | null;
          lastname?: string | null;
          photoURL?: string | null;
          updated_at?: string;
        };
        Update: {
          company_id?: string | null;
          created_at?: string;
          email?: string | null;
          firstname?: string | null;
          id?: string;
          invitation_status?: string | null;
          kinde_id?: string | null;
          lastname?: string | null;
          photoURL?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_users_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "company";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      role: "USER" | "ADMIN";
      subscription: "FREE" | "BASIC" | "STANDARD" | "PREMIUM";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
