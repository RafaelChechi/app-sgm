export interface TokenClaims {
  sub: string;
  exp: number;
  user: {
    role: Role;
    company: Company;
  };
  roles: string;
  fullName: string;
}

export interface Company {
  id: string;
}

export interface Role {
  display_name?: string;
  id?: number;
  name?: string;
}
