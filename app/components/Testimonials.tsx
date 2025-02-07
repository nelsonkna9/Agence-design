import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Company A',
    quote: 'Schrift a transformé notre vision en une identité visuelle incroyable.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CMO, Company B',
    quote: 'Leur approche créative et précise a dépassé nos attentes.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Founder, Company C',
    quote: 'Un partenariat exceptionnel avec des résultats impressionnants.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>WHAT THEY SAY</h2>
      <div className={styles.cards}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.role}</p>
            <blockquote>{testimonial.quote}</blockquote>
          </div>
        ))}
      </div>
      <button className={styles.seeMoreButton}>See More</button>
    </section>
  );
}