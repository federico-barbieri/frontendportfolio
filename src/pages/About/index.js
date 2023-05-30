import SecondaryTitle from '@/components/SecondaryTitle/SecondaryTitle'
import React from 'react'
import styles from "./About.module.css"
import Link from 'next/link';
import {FaGithub} from "react-icons/fa"
import {MdOutlineMail} from "react-icons/md"
import {GrLinkedinOption} from "react-icons/gr"

function About() {

  const email = 'federico.pedro.barbieri@gmail.com';

    const linkedin = "https://www.linkedin.com/in/fedebarbieri";

    const github = "https://github.com/federico-barbieri";

  return (
    <main className={styles.main}>

        <section className={styles.contactSection}>
        <SecondaryTitle
          title="ABOUT" />
          </section>


        <section className={styles.stackWithTextSection}>
          
          <p>
            I'm enrolled in Multimedia Design @ KEA and currently in my 3rd semester, focusing on Frontend Design. <br/> <br/>

            As part of my education, I'm on the lookout for  <span className={styles.internship}>a 10-week internship between August and October.</span> <br/> <br/>

            The main focus of my internship is to become <span className={styles.reallyGood}>really good</span> with technologies like React and Next JS or similar. <br/> <br/>

            Let's get in touch and start something memorable together.

          </p>
        </section>

    <section className={styles.contactSection}>
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
  )
}

export default About