import { supabase } from '@/utils/db.config'

export async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'https://127.0.0.1/testtesttest'
    }
  })
  if (error) {
    console.error('error', error)
    return error
  }
  if (data) {
    console.log('data', data)
    return data
  }
}
