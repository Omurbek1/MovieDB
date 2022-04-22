import { react } from 'react'


export default function AboutPage() {

    return (<><div className="d-flex justify-content-center row pb-5 pt-5" id="About">
        <div className="container filter">

            <div className="d-flex justify-content-between w-85">
                <h1>Dear Sir/Madam,</h1>
                <span className="mt-2"><i class="fas fa-envelope-open-text"></i></span>
            </div>
            <p> My name is Mario Gonzalez, Im a software developer who has interest in to learn and improve the web.</p>
            <p>I have knowledge of: HTML, CSS (Bootstrap, MUI), JS(Redux, Context API), React, Next, GitHub, React Native, Node.js, express, PostgreSQL, sequelize.
                I have experience in developing applications in the field of IT, thanks to which I can contribute to the successful promotion of your company.
                I propose for consideration my candidacy as a developer of Front End and FullStack. I would be glad to meet you online. <br />
                <br />
                You can contact me at the address indicated or by phone:<br /><br />

                Telegram: https://t.me/Omurbek_Mamytbekov<br />

                WhatsApp: +996 776 88 22 71<br />

                Mail: omurbekmamytbekov545@gmail.com<br />

                Thank you for your time and attention.<br />

            </p>
            <p>Movie Master app consume data from <a className="btn btn-link" href="https://developers.themoviedb.org/3" target="blank">MovieDb API</a>.</p>
            <ul style={{ listStyle: "none", }}>
                <li className="mb-3">My Linkedin: <a href="https://www.linkedin.com/in/omurbek-mamytbekov-b170421a8/" target="blank" className="btn btn-outline-primary" > <i class="fab fa-linkedin-in"></i> Mario's Github  </a></li>
                <li className="mb-3">My Github profile: <a href="https://github.com/Omurbek1" target="blank" className="btn btn-outline-info" > <i class="fab fa-github"></i> Mario's Github  </a></li>
                <li className="mb-3">Proyect Repository: <a href="https://github.com/Omurbek1/MovieDB" target="blank" className="btn btn-outline-info" > <i class="fab fa-github"></i> Github Repository </a></li>
            </ul>
            <h5>-Omurbek Mamytbekov</h5>
        </div >

    </div></>)
}