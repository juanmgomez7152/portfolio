import Section from "../layout/Section";
import TextType from "../TextType";

export default function IntroSection(){
    return (
        <Section ariaLabel="Welcome Text Section">
          <div
            style={{
              fontSize: "300%",
              fontWeight: "bold"
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
        </Section>
    )
}