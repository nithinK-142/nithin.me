import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='bg-pink-700 flex items-center justify-center sm:justify-between'>
      <Socials />
      
      <p className="text-sm underline underline-offset-2 hidden sm:block">
        <a href="mailto:nithin.sagar.359@gmail.com">nithin.sagar.359@gmail.com</a>
      </p>
    </footer>
  )
}

export default Footer