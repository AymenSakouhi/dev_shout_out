import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'

const Home = () => {
  return (
    <div>
      Home page
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
