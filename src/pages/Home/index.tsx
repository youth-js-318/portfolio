import { useEffect, useState } from "react"

type Education = {
    degree: string;
}

const Home = () => {
    const [education, setEducation] = useState<Education[]>([])

    // https://portfolio-backend-production-a732.up.railway.app/education
    // setEducation(novoValor)

    useEffect(
        () => {
            fetch('https://portfolio-backend-production-a732.up.railway.app/education')
                .then((response) => response.json())
                .then((json) => setEducation(json))
        },
        []
    )

    return (
        <>
            <h1>Lucas Pamplona</h1>
            <ul>
                {education.map((edu) => (
                    <li>{edu.degree}</li>
                ))}
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi, at doloremque, eveniet expedita cupiditate quaerat dolorem nihil fugiat totam assumenda iste accusamus nam. Eos voluptas cupiditate tempore perferendis autem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum magni possimus porro at aliquam eligendi, pariatur perspiciatis accusamus animi vitae, fugiat officia ad amet! Recusandae ipsam harum earum tempora?</p>    
        </>
    )
}

export default Home