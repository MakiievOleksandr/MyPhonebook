import { Skeleton, Box } from '@mui/material';

const Loader = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <Skeleton variant="rectangular" width={30} height={30} />
        <Skeleton variant="text" width={250} height={50} />
        <Skeleton variant="rectangular" width={30} height={30} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Skeleton variant="rounded" width={300} height={110} />
        <Skeleton variant="text" width={300} height={50} />
        <Skeleton variant="text" width={300} height={50} />
        <Skeleton variant="text" width={300} height={50} />
        <Skeleton variant="text" width={300} height={50} />
        <Skeleton variant="text" width={300} height={50} />
      </Box>
    </>
  );
};
export default Loader;
