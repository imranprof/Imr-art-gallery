'use client'
import Image from "next/image";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '@/app/firebase/config'
import { signOut } from "firebase/auth";
import LogoutButton from './components/LogoutButton';
import SignInButton from './components/SignInButton';
import { useRouter } from "next/navigation";
import SignInModal from './components/SignInModal'
import AnimatedComponent from './components/AnimatedComponent'


const handleLogout = () => {
  signOut(auth);
  sessionStorage.removeItem('user')
  // Add logout logic here (e.g., clearing authentication tokens, redirecting)
};


export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const isLoggedIn = sessionStorage.getItem('user')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignIn = () => {
    router.push('/sign-in')
  }

  console.log({user});

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "gray"}}>
      <h3 >Imr art gallery home</h3>
      {user || isLoggedIn ? (
        <>
          <LogoutButton onLogout={handleLogout} />
        </>
      ) : (
        <>
        <SignInButton onClick={handleSignIn} />
        </>
      )}
      <button onClick={()=>{setIsModalOpen(true)}}>Sign in modal</button>
    </div>
    <h1>Gsap animation here</h1>
    <AnimatedComponent />
    <div style={{display: "flex", justifyContent: "center"}}>

    <Image
        src="/images/giovannalodes.jpg"  // Path to your image in the public folder
        alt="Model"
        width={600}  // Desired width of the image
        height={350} // Desired height of the image
        className="rounded-lg shadow-lg"
      />
          <Image
        src="/images/art.jpg"  // Path to your image in the public folder
        alt="ai"
        width={600}  // Desired width of the image
        height={350} // Desired height of the image
        className="rounded-lg shadow-lg"
      />
    </div>
    <SignInModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>

  );
}