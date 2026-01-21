import Section from "../layout/Section";
export default function CommentsSection() {
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
        Dev Comments
      </div>
      <div
        style={{
          padding: "40px",
          textAlign: "left",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize:'150%'
          }}
        >
          <p>
            If you made it this far, I want to personally say THANK YOU for visiting this site.
          </p>
          <br/>
          <p>
            I built this website using react, supporting UI libraries (React Bits & shadcn), and hosted on Google Cloud Platform.
            This was built in approx. a few hours but it was fun making my first portfolio.
            If you wish to contact me to give me feedback please reach out to me through email, you can find my email at the bottom 
            of the menu where is says "Email" under "Socials".
          </p>
          <br/>
          <br/>
          <p>
            -Juan Gomez Guzman
          </p>
        </h2>
      </div>
    </Section>
  );
}
