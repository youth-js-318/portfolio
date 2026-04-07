import { useEffect, useState } from "react"
import axios from "axios"
import type { Education, Experience, Skill } from "../../types"

const About = () => {
    const [education, setEducation] = useState<Education[]>([])
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [skills, setSkills] = useState<Skill[]>([])

    useEffect(
        () => {
            axios.get<Education[]>('https://portfolio-backend-production-a732.up.railway.app/education')
                .then((json) => setEducation(json.data))
        },
        []
    )

    useEffect(
        () => {
            axios.get<Experience[]>('https://portfolio-backend-production-a732.up.railway.app/experiences')
                .then((json) => setExperiences(json.data))
        },
        []
    )

    useEffect(
        () => {
            axios.get<Skill[]>('https://portfolio-backend-production-a732.up.railway.app/skills')
                .then((json) => setSkills(json.data))
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

            <section>
                <h2>Educação</h2>
                <div>
                    {education.map((edu) => (
                        <div className="edu-card">
                            <h3>{edu.degree} - {edu.institution}</h3>
                            <div className="period">
                                <span>{edu.startDate}</span>
                                <span>{edu.endDate}</span>
                            </div>
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About