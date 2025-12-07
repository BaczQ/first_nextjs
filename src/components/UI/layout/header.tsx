"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";

export const Logo = () => <Image src="/logo.png" alt={siteConfig.title} width={26} height={26} priority />;

export default function Header() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Navbar style={{ height: layoutConfig.headerHeight }} className="px-6">
      <NavbarBrand>
        <Link href="/" className="flex gap-1 items-center">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 h-full items-center" justify="center">
        {siteConfig.navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className={`px-3 py-1 ${
                  isActive ? "text-green-500 font-bold" : "text-default-500"
                } hover:text-green-300 hover:border hover:border-green-300 hover:rounded-md transition-colors duration-200`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end" className="h-full items-center">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="#" variant="flat" onPress={() => setIsLoginOpen(true)}>
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" onPress={() => setIsRegistrationOpen(true)}>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        
    </Navbar>
  );
}
