import { inject, injectable } from 'tsyringe'
import type AuthRepository from '../Domain/Auth/AuthRepository.ts'
import { Session } from '../../view/contracts.ts'

@injectable()
export class AuthService {
  constructor (@inject('AuthRepository') private authRepository: AuthRepository) {}

  async signIn (email: string, password?: string): Promise<Session> {
    if (password) {
      return this.authRepository.signIn(email, password)
    }
    return this.authRepository.signInWithOtp(email)
  }

  async signOut (): Promise<boolean> {
    return this.authRepository.signOut()
  }

  async restore (): Promise<Session> {
    return this.authRepository.restore()
  }
}
