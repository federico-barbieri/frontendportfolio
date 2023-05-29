import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainTitle from '@/components/MainTitle/MainTitle'
import SecondaryTitle from '@/components/SecondaryTitle/SecondaryTitle'
import {FaReact} from "react-icons/fa"
import {SiNextdotjs} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiTailwindcss} from "react-icons/si"
import {BsFillBootstrapFill} from "react-icons/bs"
import {BsWordpress} from "react-icons/bs"
import {SiElementor} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {FaGithub} from "react-icons/fa"
import {BsGit} from "react-icons/bs"
import {MdOutlineMail} from "react-icons/md"
import {GrLinkedinOption} from "react-icons/gr"
import Link from 'next/link'
import {GiGuitar} from "react-icons/gi"
import {BiFootball} from "react-icons/bi"
import {BsMagic} from "react-icons/bs"
import {BsFillVinylFill} from "react-icons/bs"
import {BsFillBuildingFill} from "react-icons/bs"
import {GiDonkey} from "react-icons/gi"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const email = 'federico.pedro.barbieri@gmail.com';

    const linkedin = "https://www.linkedin.com/in/fedebarbieri";

    const github = "https://github.com/federico-barbieri";




  return (
    <>
      <Head>
        <title>Federico Barbieri</title>
        <meta name="description" content="Federico Barbieri's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/vyk7ivp.css"></link>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <section className={`${styles.heroSection}`}>
          <MainTitle/>
        </section>

        <section className={`${styles.aboutWithTextSection}`}>
          
          <p>As an advertising creative with 10 years of experience, I have a thing for silly wordplay. <br/><br/>

            I also happen to have a thing for challenges, which is why I embarked on a new quest called
            Frontend Development. <br/><br/>

            Every new technology I encounter starts as this scary, unknown <span className={styles.maze}>maze</span>. <br/><br/>
            
            But with effort and consistency, they inevitably become <span className={styles.amazing}>amazing</span>.
          </p>
        </section>

       

      

        <section className={`${styles.stackSection}`}>
          <SecondaryTitle
          title="STACK" />
            <div className={styles.stackIcons}>
              <AiFillHtml5 className={styles.stackIcon} />
              <DiCss3 className={styles.stackIcon} />
              <SiJavascript className={styles.stackIcon} />
              <FaReact className={styles.stackIcon} />
              <SiNextdotjs className={styles.stackIcon} />
              <SiTailwindcss className={styles.stackIcon} />
              <BsFillBootstrapFill className={styles.stackIcon} />
              <BsWordpress className={styles.stackIcon} />
              <SiElementor className={styles.stackIcon} />
              <FaGithub className={styles.stackIcon} />
              <BsGit className={styles.stackIcon} />
            </div>
        </section>

        <section className={`${styles.stackWithTextSection}`}>
          
          <p>
            I'm enrolled in Multimedia Design @ KEA and currently in my 3rd semester, focusing on Frontend Design. <br/> <br/>

            As part of my education, I'm on the lookout for  <span className={styles.internship}>a 10-week internship between August and October.</span> <br/> <br/>

            The main focus of my internship is to become <span className={styles.reallyGood}>really good</span> with technologies like React and Next JS or similar. 
          </p>
        </section>

        <section className={`${styles.projectsSection}`}>
            <SecondaryTitle
            title="PROJECTS" />

            <div className={styles.projectIcons}>


                  <BsFillBuildingFill className={styles.projectIcon} />
                  <GiDonkey className={styles.projectIcon} />
                  <BsMagic className={styles.projectIcon}/>
                  <GiGuitar className={styles.projectIcon}/>
                  <BiFootball className={styles.projectIcon}/>
                  <BsFillVinylFill className={styles.projectIcon}/>
            
            </div>

        </section>


        <section className={`${styles.contactWithTextSection}`}>
          
          <p>
            Let's get in touch and start something memorable together.<br/> <br/>
          </p>
        </section>


        <section className={`${styles.contactSection}`}>
        <SecondaryTitle
          title="CONTACT" />

            <div className={styles.contactIconsDiv}>

                <Link href={`mailto:${email}`} target='_blank'>
                  <MdOutlineMail className={styles.contactIcon}/>
                </Link>

                <Link href={linkedin} target='_blank'>
                 <GrLinkedinOption className={styles.contactIcon}/>
                </Link>

                <Link href={github} target='_blank'>
                  <FaGithub className={styles.contactIcon} />
                </Link>
            </div>

          
        </section>
      </main>
    </>
  )
}
