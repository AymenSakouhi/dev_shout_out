import { createClient } from '@supabase/supabase-js'
import 'config/dotenv'
// import dotenv
const dotenv = require('dotenv')
dotenv.config()
export const supabase = createClient(
  `${process.env.SB_URL}`,
  `${process.env.SB_ANON_KEY}`
)

// export const supabase = createClient(
//   'https://frxglkrucmkngounafca.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyeGdsa3J1Y21rbmdvdW5hZmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMTE0NzksImV4cCI6MjAyOTg4NzQ3OX0.MO7aVDQDpUz3tERtjfQC2OSxXL1bzUzAGBUbj3X9PRg'
// )
