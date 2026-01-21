import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import Section from "../layout/Section";

export default function WorkExperienceSection() {
  return (
    <Section ariaLabel="Work Experience Section">
      <div
        style={{
          fontWeight: "bold",
          fontSize: "250%",
          textDecoration: "underline",
          marginBottom: "40px",
        }}
      >
        Work Experience
      </div>
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          <CarouselItem>
            <div
              style={{
                padding: "40px",
                textAlign: "left",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "150%",
                  marginBottom: "10px",
                }}
              >
                Senior Software Engineer - People Technology
              </h1>
              <h2
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  marginBottom: "20px",
                }}
              >
                <i>Visa Inc. (Jan 2026 - Present)</i>
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                • Major codebase refactor on a crucial data pipeline that tracks
                teams project progress which now runs 68.75% more efficient,
                being able to manage 14,000 artifacts in 2.5 hours instead of 8
                hours.
                <br />
                <br />
                • Developed and maintained the Agile Tooling Framework, which
                consisted of 2 applications, an ETL pipeline and a full-stack
                application. This tooling framework has shown to improve the way
                teams work enterprise-wide, improving efficiency and accuracy.
                Applied Technologies: Angular 17, Python, GenAI APIs.
                <br />
                <br />• Implemented CI/CD pipelines on the Visa cloud platform
                to streamline and standardize deployment processes, enabling
                adoption across multiple teams while also ensuring applications
                meet some of the strictest cybersecurity standards in the
                FinTech industry
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                padding: "40px",
                textAlign: "left",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "150%",
                  marginBottom: "10px",
                }}
              >
                Software Engineer - Agile Optimization Team
              </h1>
              <h2
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  marginBottom: "20px",
                }}
              >
                <i>Visa Inc. (Jan 2024 - Jan 2026)</i>
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                • Major codebase refactor on a crucial data pipeline that tracks
                teams project progress which now runs 68.75% more efficient,
                being able to manage 14,000 artifacts in 2.5 hours instead of 8
                hours.
                <br />
                <br />
                • Developed and maintained the Agile Tooling Framework, which
                consisted of 2 applications, an ETL pipeline and a full-stack
                application. This tooling framework has shown to improve the way
                teams work enterprise-wide, improving efficiency and accuracy.
                Applied Technologies: Angular 17, Python, GenAI APIs.
                <br />
                <br />• Implemented CI/CD pipelines on the Visa cloud platform
                to streamline and standardize deployment processes, enabling
                adoption across multiple teams while also ensuring applications
                meet some of the strictest cybersecurity standards in the
                FinTech industry
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                padding: "40px",
                textAlign: "left",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "150%",
                  marginBottom: "10px",
                }}
              >
                Embedding Engineering - Intern
              </h1>
              <h2
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  marginBottom: "20px",
                }}
              >
                <i>Cooper Consulting Service (Sept 2023 - Dec 2023)</i>
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                • Leading a project for a Texas Children’s Hospital M.D., with
                minimal guidance, on a proof of concept to measure ICP
                (Increased Intracranial Pressure) with a new innovative
                approach.
                <br />
                <br />• Tested prototypes at various pressures to ensure a valid
                algorithm, upon discovering discrepancies, collaborated with
                embedded engineers to calculate corrected constants on a 5th
                order polynomial that affects the algorithm for successful
                operation.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                padding: "40px",
                textAlign: "left",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "150%",
                  marginBottom: "10px",
                }}
              >
                Software Engineer - Intern
              </h1>
              <h2
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  marginBottom: "20px",
                }}
              >
                <i>Citibank (June 2023 - August 2023)</i>
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                • Worked on the Retail API team and specialized on microservices
                that supported other CITI dev teams to request/retrieve
                information on customer accounts
                <br />
                <br />• Led my internship project; A full stack project to
                create a dashboard UI that can receive an FID, which will be
                passed to a microservice that will in turn query the FID request
                from the database. Applied technologies such as: MongoDB, Oracle
                SQL, HTML, Java, Java Spring Boot Framework.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
