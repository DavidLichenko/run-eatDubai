import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

export default function Header() {
  return (
    <header className="bg-background shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">

        <nav className="flex items-center w-full justify-between">

          <ul className="flex mx-auto w-full items-center justify-start ml-24 space-x-2 mr-2">
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
                    href="/"
                    className="text-sm uppercase flex items-center font-semibold text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <div className="flex text-4xl items-center">
                  <Image src={"/logo.png"} alt="section-image" width={128} height={128}
                         className="h-16 w-16 rounded-full border-gray-800 bg-zinc-900 dark:bg-transparent p-1  dark:border-gray-400"/>
                  {/*LOGO*/}
                </div>
              </li>
              <li>
                <Link
                    href="/contact"
                    className="text-sm uppercase font-semibold flex items-center justify-center text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Contact
                </Link>
              </li>
        </motion.div>
          </ul>
        <ul className={'flex gap-4 mr-12'}>
          <motion.div
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              whileHover={{scale: 1.2}}
              whileTap={{scale: 0.8}}
              exit={{opacity: 0, x: 30}}
                  transition={{duration: 0.2, ease: "backInOut"}}

              >
                <li><Link href={'#'}><AiOutlineInstagram className={'w-8 h-8'}/></Link></li>
              </motion.div>
              <motion.div
                  initial={{opacity: 0, x: 30}}
                  whileInView={{opacity: 1, x: 0}}
                  whileHover={{scale: 1.2}}
                  whileTap={{scale: 0.8}}
                  exit={{opacity: 0, x: 30}}
                  transition={{duration: 0.2, ease: "backInOut"}}

              >
                <li><Link href={'#'}><AiOutlineWhatsApp className={'w-8 h-8'}/></Link></li>
              </motion.div>
              {/*<li><Link href={'#'}>asd</Link></li>*/}
            </ul>
            <ThemeSwitch/>
        </nav>
      </div>
    </header>
);
}
