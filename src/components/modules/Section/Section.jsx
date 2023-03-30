import PropTypes from 'prop-types';
// import MediaQuery from 'components/shared/BreakePoint/BreakePoint';
import css from './section.module.scss';

function Section({ title, children, ...props }) {
  const { button, style } = props;
  return (
    // <MediaQuery>
    <section className={`${css.section} ${style}`}>
      <div className={css.header}>{button}</div>

      {children}
    </section>
    // </MediaQuery>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
