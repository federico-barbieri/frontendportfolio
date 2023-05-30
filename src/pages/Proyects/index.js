import Head from 'next/head'
import styles from "./Proyects.module.css"
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
import ProyectCard from '@/components/ProyectCard/ProyectCard'
import {SiSupabase} from "react-icons/si"
import {SiVite} from "react-icons/si"
import {TbBrandThreejs} from "react-icons/tb"
import {SiOpenai} from "react-icons/si"

function Projects() {

    const email = 'federico.pedro.barbieri@gmail.com';

    const linkedin = "https://www.linkedin.com/in/fedebarbieri";

    const github = "https://github.com/federico-barbieri";
  return (
    <>
    <Head>
      <title>Federico Barbieri</title>
      <meta name="description" content="Federico Barbieri's portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://use.typekit.net/vyk7ivp.css"></link>
    </Head>
    <main className={`${styles.main}`}>

      <section className={`${styles.heroSection}`}>

        <SecondaryTitle title="PROJECTS"/>
        
        
      </section>

      <section className={styles.projectsSection}>

      <ProyectCard
      image={"/projectImgs/bgr1.jpg"}
      title="EDC"
      tech1={<FaReact/>}
      tech2={<SiNextdotjs/>}
      tech3={<SiSupabase/>}
      description="Do you have a property and want to test the waters? As a customer of EDC, 
      you have access to a brand new feature: Potential Buyers. PB allows you to fill in your estate details
      and filter through a list of potential buyers that could be interested in your property."
      github="https://github.com/federico-barbieri/charlie-tango-case"
      website="https://charlie-tango-case-taupe.vercel.app/"
      linkToExtensiveProject="../Edc"
      />

      {/*

    <ProyectCard
      image={"/projectImgs/shrek.jpg"}
      title="SwampFest"
      tech1={<FaReact/>}
      tech2={<SiNextdotjs/>}
      tech3={<SiSupabase/>}
      description="Final project made at KEA as part of the 3rd semester in Frontend Design. 
      Ideation and creation of a fake festival inspired by the Shrek movies. Made in colaboration
      with Sabrina Sørensen."
      github="https://github.com/federico-barbieri/charlie-tango-case"
      website="https://charlie-tango-case-taupe.vercel.app/"
      linkToExtensiveProject="../Edc"
      />

      */}

    <ProyectCard
        id="#magic"
      image={"/projectImgs/fire.png"}
      title="Magic Hackers"
      tech1={<SiOpenai/>}
      tech2={<DiCss3/>}
      tech3={<SiJavascript/>}
      description="Have you ever wondered what it would be like to be the principal of Hogwarts?
      Now you can. Check the student list, filter through names, turn students into inquisitors and more.
      Oh, and it even comes with its own version of Solitaire. 
      Pro tip: press 5 and see what happens. "
      github="https://github.com/federico-barbieri/hogwarts"
      website="https://federico-barbieri.github.io/hogwarts/"
      linkToExtensiveProject="../Edc"
      />

    <ProyectCard
      image={"/projectImgs/moon.png"}
      title="Jimmy Sakurai"
      tech1={<SiOpenai/>}
      tech2={<DiCss3/>}
      tech3={<SiJavascript/>}
      description="Do you know what going too far means? Jimmy Sakurai doesn't. For the past 30 years,
      he has imitated Led Zeppelin's guitar player, Jimmy Page, to the last drop. Literally. This is 
      his story."
      github="https://github.com/federico-barbieri/sakurai2023"
      website="https://newjimmy.netlify.app/"
      linkToExtensiveProject="../Edc"
      />

    <ProyectCard
      image={"/projectImgs/plastic.png"}
      title="Copenhagen Cartel"
      tech1={<SiVite/>}
      tech2={<TbBrandThreejs/>}
      tech3={<SiJavascript/>}
      description="Dive deep into a 3D immersive experience and explore the plastic problematics that affect the oceans. The more you scroll, the deeper you go.
      The question is, as a consumer, how deep are you willing to get involved?"
      github="https://github.com/federico-barbieri/cph-cartel-scroll"
      website="https://cphcartel.netlify.app/"
      linkToExtensiveProject="../Edc"
      />
        
        
      </section>

     

    

      <section className={`${styles.contactWithTextSection}`}>
        
        <p>
        I'm on the lookout for  <span className={styles.internship}>a 10-week internship between August and October.</span> <br/> <br/>

        The main focus of my internship is to become <span className={styles.reallyGood}>really good</span> with technologies 
        like React and Next JS or similar. <br/> <br/>

        Let's get in touch and start something memorable together.
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

export default Projects