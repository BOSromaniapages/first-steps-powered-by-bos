import styles from './mainPage.module.css'

const MainPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>

            </header>
            <main>
                <div className={styles.intro}>
                    <h3>First steps</h3>
                    <b>First steps</b> este un proiect ce are ca scop indumarea studentilor catre primul lor job , invatand cum sa creeze un CV ,
                </div>
                <div className={styles.obiective}>
                    <img src='src\assets\lupa-eventum-1.png'></img>
                    <h3>Obietivele Proiectului </h3>
                    Frist steps are obiectivul de a ajuta studentii sa:
                    <ul>
                        <li>Isi creeze un CV bine pus la punct</li>
                        <li>Participe la o simulare de interviu intr-un mediu prietenos</li>
                        <li>Ia legatura cu posibili angajatori</li>
                    </ul>
                </div>
                <div className={styles.afisDiv}>
                    <h2>Frist Steps</h2>
                    <img src="src\assets\omulet-eventum-dreapta.png" alt="" className={styles.omulet} />
                    <img src='src\assets\WhatsApp Image 2025-10-27 at 16.26.49_c7252a21.jpg' className={styles.afis} />
                    <div className={styles.afisText}>
                        <p>Prima ediție a evenimentului First Steps va avea loc pe 24 martie 2026 la Casa de Cultură a Studenților (sala 2).
                        </p>

                        <p>Reprezentanți ai companiilor BCR si AMBER, cu o vastă experiență în domeniul de HR, vor ghida workshop-urile de construire a CV-ului și simularea interviului de angajare, alături de alți angajați de valoare din cadrul altor departamente, ce vor oferi insight-uri despre oportunități de carieră. Printre numele prezente la eveniment se numără:

                        </p>
                        <ul>
                            <li>Andreea Voinea (Chief HR Officer la BCR, care ne va ajuta să trecem peste anxietatea interviurilor și să ne descurcăm în situații sub presiune)

                            </li>
                            <li> Ana Pohrib (HR Manager la AMBER, care ne va ajuta să creem un CV atractiv pentru angajatori si sa ne descoperim calitatile care ne diferentiaza de ceilalti)
                            </li>
                            <li>Ionuț Stanimir și Cătălin Ioniță (Director of Marketing & Communication și Corporate Communication Coordinator la BCR, care ne vor vorbi despre oportunități de carieră și cum să ne adaptăm la nevoile de pe piața muncii)</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainPage
