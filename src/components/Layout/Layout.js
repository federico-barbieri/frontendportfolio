import React from 'react'
import styles from "./Layout.module.css"
import Link from 'next/link'

function Layout({children}) {
  return (
    <>
    <nav className={styles.nav}>

            <Link href="/">
            <span className={styles.fullName}><span className={styles.federico}>FEDERICO</span> BARBIERI</span>
            </Link>
        
            <ul className={styles.ul}>

            <Link href="/Proyects" className={styles.ulLink}>
              <li>PROJECTS</li>
            </Link>

            <Link href="/Contact" className={styles.ulLink}>
            <li>CONTACT</li>
            </Link>
        </ul>
    </nav>
    <main>{children}</main>
    </>
  )
}

export default Layout