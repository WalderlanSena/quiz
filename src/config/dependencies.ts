import 'reflect-metadata'
import { container } from 'tsyringe'
import { AuthService } from '../app/Application/AuthService.ts'
// import SupabaseAuthRepository from '../app/Infrastructure/Supabase/SupabaseAuthRepository.ts'
import JsonHttpAuthRepository from '../app/Infrastructure/Http/JsonHttpAuthRepository.ts'
import InMemoryGameRepository from '../app/Infrastructure/InMemory/InMemoryGameRepository.ts'

export default function () {
  container.register('AuthService', { useClass: AuthService })
  container.register('AuthRepository', { useClass: JsonHttpAuthRepository })
  container.register('GameRepository', { useClass: InMemoryGameRepository })

  return container
}