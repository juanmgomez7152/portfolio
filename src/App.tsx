import Plasma from "./components/Plasma";
import LogoLoop from "./components/LogoLoop";
import techLogos from "./assets/tech-stack";
import TextType from "./components/TextType";
import ProfileCard from "./components/ProfileCard";
import ElectricBorder from "./components/ElectricBorder";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/carousel";

function App() {
  return (
    <div
      aria-label="Entry Point"
      className="dark"
      style={{
        background: "black",
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <div
        aria-label="Background"
        style={{
          width: "100%",
          position: "relative",
          color: "white",
        }}
      >
        <div
          aria-label="Plasma Background Div"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Plasma
            color="#2F4F6F"
            speed={1}
            direction="forward"
            scale={1.3}
            opacity={1}
            mouseInteractive={true}
          />
        </div>
        {/* Section 1: Welcome Text */}
        <div
          aria-label="Welcome Text Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
          }}
        >
          <div
            style={{
              fontSize: "300%",
              fontWeight: "bold",
            }}
          >
            <TextType
              text={["Welcome to Juan's Portfolio"]}
              typingSpeed={75}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
            />
          </div>
        </div>
        {/* Section 2: Summary & Picture */}
        <div
          aria-label="Summary Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              maxWidth: "1200px",
              width: "100%",
              alignItems: "stretch",
            }}
          >
            {/* Summary Card */}
            <ElectricBorder
              chaos={0.1}
              style={{ flex: "1 1 500px", maxWidth: "600px" }}
            >
              <div>
                <div
                  style={{
                    fontSize: "200%",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginBottom: "20px",
                  }}
                >
                  Who am I?
                </div>
                <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
                  Hello my name is Juan Gomez Guzman and I am a Senior Software
                  Engineer currently solving complex problems at Visa Inc. using
                  GenAI
                </p>
              </div>
            </ElectricBorder>

            {/* ProfileCard */}
            <div style={{ flex: "0 0 auto" }}>
              <ProfileCard
                name="Juan M. Gomez Guzman"
                title="Sr.Software Engineer - Visa Inc."
                handle="hello_world"
                status="Reach Out!"
                contactText="Contact Me"
                avatarUrl="src/assets/profesional_picture.jpeg"
                iconUrl="src/assets/hash-svgrepo-com.svg"
                behindGlowColor="rgba(0, 229, 255, 0.2)"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </div>
        </div>
        {/* Section 3: Work Experience */}
        <div
          aria-label="Work Experience Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
            flexDirection: "column",
            padding: "20px",
          }}
        >
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
                    • Major codebase refactor on a crucial data pipeline that
                    tracks teams project progress which now runs 68.75% more
                    efficient, being able to manage 14,000 artifacts in 2.5
                    hours instead of 8 hours.
                    <br />
                    <br />
                    • Developed and maintained the Agile Tooling Framework,
                    which consisted of 2 applications, an ETL pipeline and a
                    full-stack application. This tooling framework has shown to
                    improve the way teams work enterprise-wide, improving
                    efficiency and accuracy. Applied Technologies: Angular 17,
                    Python, GenAI APIs.
                    <br />
                    <br />• Implemented CI/CD pipelines on the Visa cloud
                    platform to streamline and standardize deployment processes,
                    enabling adoption across multiple teams while also ensuring
                    applications meet some of the strictest cybersecurity
                    standards in the FinTech industry
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
                    • Major codebase refactor on a crucial data pipeline that
                    tracks teams project progress which now runs 68.75% more
                    efficient, being able to manage 14,000 artifacts in 2.5
                    hours instead of 8 hours.
                    <br />
                    <br />
                    • Developed and maintained the Agile Tooling Framework,
                    which consisted of 2 applications, an ETL pipeline and a
                    full-stack application. This tooling framework has shown to
                    improve the way teams work enterprise-wide, improving
                    efficiency and accuracy. Applied Technologies: Angular 17,
                    Python, GenAI APIs.
                    <br />
                    <br />• Implemented CI/CD pipelines on the Visa cloud
                    platform to streamline and standardize deployment processes,
                    enabling adoption across multiple teams while also ensuring
                    applications meet some of the strictest cybersecurity
                    standards in the FinTech industry
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
                    • Leading a project for a Texas Children’s Hospital M.D.,
                    with minimal guidance, on a proof of concept to measure ICP
                    (Increased Intracranial Pressure) with a new innovative
                    approach.
                    <br />
                    <br />• Tested prototypes at various pressures to ensure a
                    valid algorithm, upon discovering discrepancies,
                    collaborated with embedded engineers to calculate corrected
                    constants on a 5th order polynomial that affects the
                    algorithm for successful operation.
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
                    • Worked on the Retail API team and specialized on
                    microservices that supported other CITI dev teams to
                    request/retrieve information on customer accounts
                    <br />
                    <br />• Led my internship project; A full stack project to
                    create a dashboard UI that can receive an FID, which will be
                    passed to a microservice that will in turn query the FID
                    request from the database. Applied technologies such as:
                    MongoDB, Oracle SQL, HTML, Java, Java Spring Boot Framework.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Projects */}
        <div
          aria-label="Project Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "250%",
              textDecoration: "underline",
              marginBottom: "40px",
            }}
          >
            Projects
          </div>
          <Carousel className="w-full max-w-4xl" opts={{ loop: true }}>
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
                    Paramiguel.org
                  </h1>
                  <h2
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      marginBottom: "20px",
                    }}
                  >
                    <i>Personal (May 2024 - Present)</i>
                  </h2>
                  <p style={{ lineHeight: "1.6" }}>
                    • GenAI based language interpreter that tailors the
                    translation response not only based on the language of a
                    country but also using the word interpretation of the
                    language in chosen country (e.g. Different countries in
                    Latin America use different words for drinking straw).
                    Applied technologies such as: Angular 20, Python, React.
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
                    Senior Capstone Project
                  </h1>
                  <h2
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      marginBottom: "20px",
                    }}
                  >
                    <i>University of Houston (Jan 2023 - Dec 2023)</i>
                  </h2>
                  <p style={{ lineHeight: "1.6" }}>
                    • Led a multidisciplinary team of ECE & MECE seniors to
                    create a prototype to provide quality control and
                    standardization to a process in the natural gas meter
                    production, project sponsored by Dresser Utility Solution
                    with a $40,000 budget. • Implemented FreeRTOS on an Arduino
                    DUE to simultaneously handle tasks like actuator management
                    (load cell feedback sys.), safety button protocol (standard
                    in Industrial equip.), and ultrasonic distance sensors
                    (object interference detection).
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Last Section: Technical Skills */}
        <div
          aria-label="Project Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "250%",
              textDecoration: "underline",
              marginBottom: "40px",
            }}
          >
            Technical Skills
          </div>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="black"
            ariaLabel="Technical Skills"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
