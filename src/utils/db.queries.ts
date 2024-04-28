import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { supabase } from '@/utils/db.config'

export const getAllData = async (
  table: string,
  setStateFunc: React.Dispatch<React.SetStateAction<any[] | null>>
) => {
  const { data }: PostgrestSingleResponse<unknown[]> = await supabase
    .from(table)
    .select('*')
  console.log('data', data)
  setStateFunc(data)
}
