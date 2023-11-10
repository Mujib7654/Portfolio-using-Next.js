const AboutPage = () => {
  return (
    <>
      <h3>I am Mujibullah Inami, a dedicated final-year B.Tech student in Computer Science at the University of Engineering and Management, Kolkata. 
      With a strong passion for technology, I have evolved into a proficient full-stack developer. My journey has encompassed cutting-edge skills in React.js, CSS, and JavaScript for frontend brilliance, coupled with Node.js, Express, and MongoDB to orchestrate dynamic APIs for data management. 
      Eager to embark on innovative tech ventures, I'm poised to contribute to the digital realm with creativity and precision.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
