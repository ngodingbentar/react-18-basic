import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className='text-3xl'>Opsss !!!</h1>
      <p className='text-2xl font-bold mt-4'>{ error.statusText || error.message }</p>
    </div>
  )
}

export default ErrorPage