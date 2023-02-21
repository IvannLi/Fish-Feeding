import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fishes from '../data/fishes.json'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import fish from '../public/gold-fish.png'

export default function Home() {
    const r = useRouter();
    const [select, setSelect] = useState(false);
    const [filter, setFilter] = useState('');
    const [toggle, setToggle] = useState(true)

    function handleSelect(){
        if(select === false){
            setSelect(true);
        }   else {
            setSelect(false);
        } 
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setToggle(prevToggle => !prevToggle);
        }, 500);
        return () => clearInterval(interval);
      }, []);
  
    return (
        <div>
            <Head>
                <title>Some Fish</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/fish-favicon.png" />
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                    <Image 
                        className={`headerImage${toggle ? "rotate" : ''}`} 
                        src={fish} 
                        onClick={() => r.push("/")}
                    />
                </div>

                <div className={styles.filter} id='filterCont'>
                                <ul>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`}
                                        onClick={() => {setFilter('Cichlidae'); handleSelect();}}>
                                        Cichlids
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`}
                                        onClick={() => {setFilter('Schilbeidae'); handleSelect();}}>
                                        Schilbeidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`}
                                        onClick={() => {setFilter('Rhamphichthyidae'); handleSelect();}}>
                                        Rhamphichthyidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`}
                                        onClick={() => {setFilter('Channidae'); handleSelect();}}>
                                        Channidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`}
                                        onClick={() => {setFilter('Belontiidae'); handleSelect();}}>
                                        Belontiidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`}
                                        onClick={() => {setFilter('Callichthyidae'); handleSelect();}}>
                                        Callichthyidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Poeciliidae'); handleSelect();}}>
                                        Poeciliidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Aplocheilidae'); handleSelect();}}>
                                        Killifishes
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Osteoglossidae'); handleSelect();}}>
                                        Arowanas
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Toxotidae'); handleSelect();}}>
                                        Toxotidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Scatophagidae'); handleSelect();}}>
                                        Scatophagidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Badidae'); handleSelect();}}>
                                        Badidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Cyprinidae'); handleSelect();}}>
                                        Cyprinidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Gymnotidae'); handleSelect();}}>
                                        Gymnotidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Cobitidae'); handleSelect();}}>
                                        Cobitidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Polypteridae'); handleSelect();}}>
                                        Polypteridae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Hypopomidae'); handleSelect();}}>
                                        Hypopomidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Pimelodidae'); handleSelect();}}>
                                        Catfishes
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Characidae'); handleSelect();}}>
                                        Characidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Hemiramphidae'); handleSelect();}}>
                                        Hemiramphidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Cyprinds'); handleSelect();}}>
                                        Cyprinds
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Notopteridae'); handleSelect();}}>
                                        Notopteridae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Serrasalmidae'); handleSelect();}}>
                                        Serrasalmidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Malapteruridae'); handleSelect();}}>
                                        Malapteruridae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Ambassidae'); handleSelect();}}>
                                        Ambassidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Coiidae'); handleSelect();}}>
                                        Coiidae
                                    </li>
                                    <li 
                                        className={`filterItem${select ? "select" : ''}`} 
                                        onClick={() => {setFilter('Alestidae'); handleSelect();}}>
                                        Alestidae
                                    </li>
                                </ul>
                            </div>

                <div className={styles.cardCont}>
                {
                    fishes.map((fish, index) => {
                        return(
                            <><>
                                {fish.Family == filter ?
                                    <div key={index}>
                                        <div className={styles.card}>
                                            <h1>{fish['Fish Name']}</h1>
                                            <h4>{fish.Family}</h4>
                                            <div>
                                                <h2>Diet</h2>
                                                <p>{fish.Feeding}</p>
                                                <h3>Life Span: {fish['Life Span']}</h3>
                                            </div>
                                        </div>
                                    </div> 
                                    : <></>}
                            </></>
                        )
                    })
                }
                </div>
            </main>
        </div>
    )
}
