import { Box } from "@mui/material";
import '../App.css';
import Credential from "./Credential";
import jp from "../files/JPMorgan Forage Certificate.pdf"
import wf from '../files/WellsFargo Forage Certificate.pdf'
import wm from '../files/Walmart Forage Certificate.pdf'
import cmb from '../files/CommBank Forage Certificate.pdf'
import q from '../files/Quantium Forage Certificate.pdf'
import google from '../files/Google IT Support.pdf'

function CredentialSection(){
    const jp_list = 
    <ul>
        <li>Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic and embedded Kafka test framework</li>
        <li>Implemented transaction validation and persistence logic with Spring Data JPA and an H2 SQL database, including entity modeling and balance updates across relational User records</li>
        <li>Connected the service to an external REST Incentive API using RestTemplate, processing incentive responses and incorporating them into transactional workflows</li>
        <li>Developed a REST endpoint for querying user balances, returning JSON responses through a Spring controller while maintaining clean architectural boundaries</li>
        <li>Verified system behavior using Maven test suites and debugger-driven inspection, ensuring reliability across message ingestion, database operations, and external API interactions</li>
    </ul>

    const wf_list = 
    <ul>
        <li>Understood relevant requirements for building a system to manage financial portfolios</li>
        <li>Figured out what data the system needed to keep track of</li>
        <li>Drafted a visual representation of the data as an entity relationship diagram (ERD)</li>
        <li>Used the IntelliJ developer application to implement the ERD and published it to GitHub</li>
    </ul>

    const wm_list =
    <ul>
        <li>Completed the Advanced Software Engineering Job Simulation where I solved difficult technical projects for a variety of teams at Walmart</li>
        <li>Developed a novel version of a heap data structure in Java for Walmart’s shipping department, showcasing strong problem-solving and algorithmic skills</li>
        <li>Designed a UML class diagram for a data processor, considering different operating modes and database connections</li>
        <li>Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart’s pet department</li>
    </ul>

    const cmb_list =
    <ul>
        <li>Completed a job simulation focused on backend and frontend development for Commonwealth Bank's Software Engineering team</li>
        <li>Extended the backend using C# to enable icons, gaining proficiency in .NET, MongoDB, Postman, and Git</li>
        <li>Modified an existing React/Redux frontend to enable icons, expanding expertise in React, Redux, TypeScript, NPM, and Git</li>
        <li>Strengthened coding skills and learned unit testing with C#, xUnit, and .NET, ensuring comprehensive code coverage and support for icons</li>
        <li>Improved Git and Github skills, emphasizing effective communication through the submission of changes for team review</li>
    </ul>

    const q_list =
    <ul>
        <li>Developed an interactive Dash application that enabled the client to assess the impact of price changes on sales and profitability</li>
        <li>Implemented a test suite to verify the Dash application is working and a bash script to automatically run the test suite</li>
        <li>Developed an intuitive user interface to make the application enjoyable and engaging for the client to interact with</li>
    </ul>

    const google_list =
    <ul>
        <li>Took five hands-on courses that focused on foundational IT skills, including troubleshooting and customer service, networking, operating systems, system administration, and security</li>
    </ul>

    return(
        <Box className='credential-list'>
                <Credential title="JP Morgan SWE Job Simulation" subtitle="Forage" skills={jp_list} link={jp}/>
                <Credential title="Wells Fargo SWE Job Simulation" subtitle="Forage" skills={wf_list} link={wf}/>
                <Credential title="Walmart Advanced SWE Job Simulation" subtitle="Forage" skills={wm_list}  link={wm}/>
                <Credential title="CommBank SWE Job Simulation" subtitle="Forage" skills={cmb_list} link={cmb}/>
                <Credential title="Quantium SWE Job Simulation" subtitle="Forage" skills={q_list} link={q}/>
                <Credential title="Google IT Support Professional Certificate" subtitle="Coursera" skills={google_list} link={google}/>
        </Box>
    )
}
export default CredentialSection