import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import AuthProviders from "./AuthProviders";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";
import { signOut } from "next-auth/react";

const Navbar = async () => {
  const session = getCurrentUser()

 
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={116}
            height={43}
            alt='logo'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {(await session)?.user ? (
          <>
           <ProfileMenu session={session}/>
            <Link href="/create-project">
              <button>Share Work</button>
            </Link>
          </>
        ) : (
          <AuthProviders />
          )} 
      </div>
    </nav>
  );
};

export default Navbar;