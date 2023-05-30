import SecondaryTitle from '@/components/SecondaryTitle/SecondaryTitle'
import React from 'react'
import styles from "./Contact.module.css"
import Link from 'next/link';
import {FaGithub} from "react-icons/fa"
import {MdOutlineMail} from "react-icons/md"
import {GrLinkedinOption} from "react-icons/gr"

function Contact() {

  const email = 'federico.pedro.barbieri@gmail.com';

    const linkedin = "https://www.linkedin.com/in/fedebarbieri";

    const github = "https://github.com/federico-barbieri";

  return (
    <main className={styles.main}>
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

export default Contact