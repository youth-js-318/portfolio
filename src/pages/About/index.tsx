import { useEffect, useState } from "react"
import axios from "axios"
import type { Education } from "../../types"

const About = () => {
    const [education, setEducation] = useState<Education[]>([])

    useEffect(
        () => {
            axios.get<Education[]>('https://portfolio-backend-production-a732.up.railway.app/education')
                .then((json) => setEducation(json.data))
        },
        []
    )

    return (
        <>
            <section>
                <h1>Sobre mim</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ut? Quae odio laboriosam voluptates debitis animi, aut alias praesentium, vitae quas ut sit id minus autem fugiat saepe obcaecati consequatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ut? Quae odio laboriosam voluptates debitis animi, aut alias praesentium, vitae quas ut sit id minus autem fugiat saepe obcaecati consequatur.</p>
            </section>


        </>
    )
}

export default About