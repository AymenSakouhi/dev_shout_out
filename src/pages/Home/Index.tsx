import { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'

import { getAllData } from '@/utils/db.queries'

type Country = {
  name: string
}
const Home = () => {
  const [countries, setCountries] = useState<Country[] | null>([])

  useEffect(() => {
    getAllData('countries', setCountries)
  }, [])

  return (
    <div>
      Home page
      <ul>
        {countries &&
          countries?.map((country: Country) => (
            <li key={country.name}>{country.name}</li>
          ))}
      </ul>
      <div>Here is my button below</div>
      <Button>Click me</Button>
      <Alert className="m-4 w-auto">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Home
