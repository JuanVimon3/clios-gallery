import styles from './styles.module.css';

const About = () => (
  <div className={styles.container}>
    <img className={styles.profileImage} src="/Profile_image.jpeg" alt="profile" />
    <h1 className={styles.title}> !Hello! </h1>
    <h2 className={styles.text}>
      My name is Juan, and Im a dedicated and enthusiastic Developer Trainee with a passion for technology and a strong
      foundation in web development. I am eager to contribute my skills to a project and learn continuously in a dynamic
      software development environment. As a historian with a degree from the University of Antioquia, I bring a unique
      perspective and a strong foundation in research and critical thinking to the world of technology. <br /> My recent
      completion of the `Training Program in Programming Skills with Emphasis on Web Applications` has equipped me with
      essential web development skills, including HTML, CSS, JavaScript, React, and more. I am a highly motivated
      individual with a genuine fascination for the ever-evolving world of technology. <br /> I really want to continue
      learning and growing in this field, and I am excited to leverage my existing skills and knowledge while constantly
      expanding my horizons as a Software Developer. <br /> <br /> Note: This is a personal and self-training project in
      web development that uses a free API from the Art Institute of Chicago available at:{' '}
      <a href="https://api.artic.edu/docs/">https://api.artic.edu/docs/</a>.
    </h2>
  </div>
);

export default About;
