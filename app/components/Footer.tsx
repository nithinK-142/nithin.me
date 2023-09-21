import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center md:justify-between pt-2'>
      <Socials />
      
      <p className="text-sm underline underline-offset-2 hidden md:block">
        <a href="mailto:nithin.sagar.359@gmail.com">nithin.sagar.359@gmail.com</a>
      </p>
    </footer>
  )
}

export default Footer