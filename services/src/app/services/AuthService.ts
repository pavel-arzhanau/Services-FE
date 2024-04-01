import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "@/types";

export default class AuthService {
  static async login(phone: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', {
      phone,
      password
    })
  }

  static async registration(phone: string, password: string, name: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/registration', {
      phone,
      password,
      name
    })
  }

  static async logout(): Promise<void> {
    $api.post<AuthResponse>('/auth/logout')
  }
}