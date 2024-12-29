import { useState } from 'react'
import { 
  Navbar as NextUINavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Switch
} from "@nextui-org/react"
import { useNavigate, useLocation } from 'react-router-dom'
import { SunIcon } from './icons/SunIcon'
import { MoonIcon } from './icons/MoonIcon'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Add Product", path: "/add-product" },
  ]

  const handleThemeChange = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <NextUINavbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-sm"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Link 
            href="/" 
            className="font-bold text-inherit flex items-center gap-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="hidden sm:block">Product Catalog</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={Link} 
            color="primary" 
            href="/" 
            variant={location.pathname === '/' ? 'solid' : 'light'}
            className="mr-2"
          >
            Products
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={Link} 
            color="primary" 
            href="/add-product" 
            variant={location.pathname === '/add-product' ? 'solid' : 'light'}
          >
            Add Product
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Switch
            defaultSelected={isDark}
            size="sm"
            color="secondary"
            onChange={handleThemeChange}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <MoonIcon className={className} />
              ) : (
                <SunIcon className={className} />
              )
            }
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={`w-full ${
                location.pathname === item.path 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground-500'
              }`}
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  )
}