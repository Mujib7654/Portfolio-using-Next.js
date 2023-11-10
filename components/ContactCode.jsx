import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: '',
  //   href: '#',
  // },
  {
    social: 'email',
    link: 'mujibullahinami26@gmail.com',
    href: 'mailto:mujibullahinami26@gmail.com',
  },
  {
    social: 'github',
    link: 'Mujib7654',
    href: 'https://github.com/Mujib7654',
  },
  {
    social: 'linkedin',
    link: 'mujibullah-inami',
    href: 'https://www.linkedin.com/in/mujibullah-inami-534508279/',
  },
  {
    social: 'twitter',
    link: 'Mu_jib_29',
    href: 'https://twitter.com/Mu_jib_29',
  },
  {
    social: 'instagram',
    link: 'muj_ib_29',
    href: 'https://www.instagram.com/muj_ib_29/',
  },
  {
    social: 'telegram',
    link: 'Mujib_2002',
    href: 'https://t.me/Mujib_2002',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
