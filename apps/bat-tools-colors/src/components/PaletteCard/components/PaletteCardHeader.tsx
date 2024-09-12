interface HeaderProps {
  children: React.ReactNode
}
const headerContainer =
  'flex flex-col-reverse md:flex-row md:items-center md:justify-end md:has-[input]:justify-between  gap-2 items-end'

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className={headerContainer}>{children}</header>
}

export default Header
