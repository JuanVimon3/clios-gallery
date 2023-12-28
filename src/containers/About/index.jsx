import styles from './styles.module.css';

const About = () => (
  <div className={styles.container}>
    <img
      className={styles.profileImage}
      src="https://media.licdn.com/dms/image/D4E35AQE8hlP7swrzYQ/profile-framedphoto-shrink_200_200/0/1698155404165?e=1704380400&v=beta&t=NwcYQJY7NR9Om0FkE0SyZlCwQVkqPXEsAqDOuFn2FkY"
      alt="profile"
    />
    <h1 className={styles.title}> !Hello! </h1>
    <h2 className={styles.text}>
      Dedicated and enthusiastic Developer Trainee with a passion for technology and a strong foundation in web
      development. I am eager to contribute my skills to a project and learn continuously in a dynamic software
      development environment. As a historian with a degree from the University of Antioquia, I bring a unique
      perspective and a strong foundation in research and critical thinking to the world of technology. <br /> My recent
      completion of the `Training Program in Programming Skills with Emphasis on Web Applications` has equipped me with
      essential web development skills, including HTML, CSS, JavaScript, React, and more. I am a highly motivated
      individual with a genuine fascination for the ever-evolving world of technology. <br /> I really want to continue
      learning and growing in this field, and I am excited to leverage my existing skills and knowledge while constantly
      expanding my horizons as a Software Developer.
    </h2>
  </div>
);

export default About;
