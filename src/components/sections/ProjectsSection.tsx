import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import Section from "../layout/Section";

export default function ProjectSection() {
  return (
    <Section>
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
                • GenAI based language interpreter that tailors the translation
                response not only based on the language of a country but also
                using the word interpretation of the language in chosen country
                (e.g. Different countries in Latin America use different words
                for drinking straw). Applied technologies such as: Angular 20,
                Python, React.
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
                • Led a multidisciplinary team of ECE & MECE seniors to create a
                prototype to provide quality control and standardization to a
                process in the natural gas meter production, project sponsored
                by Dresser Utility Solution with a $40,000 budget. 
                <br/>
                <br/>
                • Implemented
                FreeRTOS on an Arduino DUE to simultaneously handle tasks like
                actuator management (load cell feedback sys.), safety button
                protocol (standard in Industrial equip.), and ultrasonic
                distance sensors (object interference detection).
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
