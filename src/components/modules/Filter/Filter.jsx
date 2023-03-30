import PropTypes from 'prop-types';

import TextField from 'components/shared/components/TextField/TextField';

function Filter({ filter, onChangeFilter, setFF }) {
  const ff = setFF ? 'block' : 'none';

  return (
    <>
      <TextField
        sx={{
          display: `${ff}`,
          '& .MuiInputBase-input': {
            border: '0',
            padding: '10px',
          },
        }}
        placeholder="Find contacts by name"
        type="text"
        value={filter}
        name="filter"
        onChange={onChangeFilter}
        autoComplete="off"
      />
    </>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
