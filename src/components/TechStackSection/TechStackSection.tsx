const tech = [
  ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", "cyan"],
  ["C", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", "blue"],
  ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "yellow"],
  ["TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", "orange"],
  ["Pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", "indigo"],
  ["NumPy", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", "blue"],
  ["Scikit-learn", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", "orange"],
  ["Jupyter", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", "orange"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", "red"],
  ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", "violet"],
  ["Linux", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", "gold"],
  ["Google Colab", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg", "orange"],
  ["OpenSSL", "https://cdn.simpleicons.org/openssl", "green"],
  ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", "sky"],
];

export default function TechStackSection() {
  const row = [...tech, ...tech];
  return (
    <section className="w-full overflow-hidden py-8 tech-marquee-wrap" aria-label="Technical stack">
      <div className="tech-heading">
        {/* <span className="tech-heading-star">✦</span>
        <b>Technical Arsenal</b>
        <small>C++, Python, ML & systems</small> */}
      </div>
      <div className="tech-marquee">
        {row.map(([name, icon, tone], i) => (
          <div className={`tech-logo-card tech-${tone}`} key={`${name}-${i}`}>
            <span className="tech-logo-glow" />
            <img src={icon} alt={name} loading="lazy" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
