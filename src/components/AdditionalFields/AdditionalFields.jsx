import css from './additional-fields.module.css';

const AdditionalFields = ({ handleChange, email, note }) => {
  return (
    <>
      <label className={css.label}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        <input
          type="note"
          name="note"
          placeholder="Note"
          value={note}
          onChange={handleChange}
          className={css.input}
        />
      </label>
    </>
  );
};

export default AdditionalFields;
