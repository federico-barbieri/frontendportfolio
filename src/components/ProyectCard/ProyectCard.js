import React from 'react'
import styles from "./ProyectCard.module.css"
import {FaGithub} from "react-icons/fa"
import Link from 'next/link'
import {HiOutlineExternalLink} from "react-icons/hi"



function ProyectCard({id, image, title, tech1, tech2, tech3, description, github, website, linkToExtensiveProject}) {
  return (
    <>
    <article className={styles.entireCard}>
        <div className={styles.imageContainer}>
            <img src={image} className={styles.projectImage} />
        </div>
        <div className={styles.textSide}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <div className={styles.techUsedDiv}>
               <span className={styles.techLanguage}>{tech1}</span>
               <span className={styles.techLanguage}>{tech2}</span>
               <span className={styles.techLanguage}>{tech3}</span>
                </div>
            <p className={styles.projectDescription}>{description}</p>
            
            <div className={styles.projectLinks}>
                <Link href={github} target='_blank'>
                    <FaGithub className={styles.githubIcon}/>
                </Link>

                <Link href={website} target='_blank'>
                    <span className={styles.websiteLink}><em><HiOutlineExternalLink/> {title}</em></span>
                </Link>
            </div>

            {/*

            <div className={styles.buttonDiv}>

                    <Link href={linkToExtensiveProject}>
            
                         <button className={styles.projectBtn}>See project</button>

                     </Link>

            </div>

            */}
            
        </div>
    </article>
    </>
  )
}

export default ProyectCard