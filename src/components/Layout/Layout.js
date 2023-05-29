import React from 'react'
import styles from "./Layout.module.css"
import Link from 'next/link'

function Layout({children}) {
  return (
    <>
    <nav className={styles.nav}>

            <Link href="/">
            <span><span className={styles.federico}>FEDERICO</span> BARBIERI</span>
            </Link>
        
            <ul className={styles.ul}>

            <Link href="/Proyects">
              <li>PROJECTS</li>
            </Link>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
    <main>{children}</main>
    </>
  )
}

export default Layout