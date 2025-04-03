import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import {Button} from "components/components/ui/button";
import {Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
function MenuIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
  )
}
export default function Header() {
  return (
      <header className="bg-background sticky top-0 shadow-sm border-b z-10 border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">

          <nav className="flex items-center w-full justify-between">

            <ul className="flex mx-auto w-full items-center justify-start ml-6 sm:ml-24 space-x-2 mr-2">
              <motion.div
                  initial={{opacity: 0, x: -30}}
                  whileInView={{opacity: 1, x: 0}}
                  whileHover={{scale: 1.2}}
                  whileTap={{scale: 0.8}}
                  exit={{opacity: 0, x: -30}}
                  transition={{duration: 0.2, ease: "backInOut"}}
                  className={'flex items-center justify-center'}

              >
                <li>
                  <Link
                      href="/about"
                      className="text-sm hidden sm:flex uppercase  items-center font-light text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <div className="flex text-2xl hover:cursor-pointer text-secondary_text hover:scale-110 duration-75 ease-in items-center">
                    <Link href={'/'}><img src={"/logo123.svg"} alt="section-image"
                           className=" w-20 dark:bg-transparent  px-2.5 py-1 mx-2 bg-secondary_text dark:border-gray-400"/></Link>
                    {/*LOGO*/}
                    {/*RUN&EAT*/}
                  </div>
                </li>
                <li>
                  <Link
                      href="/contact"
                      className="text-sm hidden sm:flex uppercase font-light items-center justify-center text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Contacts
                  </Link>
                </li>
              </motion.div>
            </ul>

            <div className="mr-6">
              <ThemeSwitch/>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full  sm:hidden">
                  <MenuIcon className=" text-gray-500 dark:text-gray-400 !w-48 !h-8" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="md:hidden">
                <div className="flex flex-col items-end mt-20 justify-center gap-4 p-4">
                  <Link
                      href="#"
                      className="text-2xl font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                  >
                    About
                  </Link>
                  <Link
                      href="#"
                      className="text-2xl font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                  >
                    Contact
                  </Link>
                  <div className="flex gap-8 mt-6">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        exit={{opacity: 0, y: 30}}
                        transition={{duration: 0.2, ease: "backInOut"}}

                    >
                      <Link href={'#'}><AiOutlineInstagram className={'w-8 h-8'}/></Link>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        exit={{opacity: 0, y: 30}}
                        transition={{duration: 0.2, ease: "backInOut"}}

                    >
                     <Link href={'#'}><AiOutlineWhatsApp className={'w-8 h-8'}/></Link>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
  );
}
