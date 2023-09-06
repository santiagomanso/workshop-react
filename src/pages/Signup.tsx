import { Button } from '../components/button'
import { Input } from '../components/input'

const Signup = () => {
  return (
    <main className='flex justify-center items-center h-screen w-screen bg-gradient-to-br from-slate-300 to-slate-800'>
      <section className='flex flex-col gap-10 w-1/4'>
        <h1 className='text-4xl font-extrabold tracking-wider text-center'>
          Signup
        </h1>
        <form className='flex flex-col gap-5'>
          <div>
            <label htmlFor='email'>Email</label>
            <Input
              name='email'
              placeholder='Enter your email'
              className='focus:outline-none active:outline-none'
            />
          </div>

          <div>
            <label htmlFor='email'>password</label>
            <Input name='password' placeholder='type in your password' />
          </div>

          <div>
            <label htmlFor='email'>repeat password</label>
            <Input name='password' placeholder='repeat your password' />
          </div>
          <Button size={'lg'} variant={'success'}>
            SIGN UP NOW!
          </Button>
        </form>
      </section>
    </main>
  )
}

export default Signup
