import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const gridTemplateLargeScreens = `
" a b c "
" a b c "
" a b c "
" a b f "
" d e f "
" d e f "
" d h i "
" g h i "
" g h j "
" g h j "
`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)");
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat)3, minmax(60px, 1fr)",
        gridTemplateAreas: gridTemplateLargeScreens,
      }}
    >
      <Box bgcolor="#fff">a</Box>
      <Box bgcolor="#fff">b</Box>
      <Box bgcolor="#fff">c</Box>
      <Box bgcolor="#fff">d</Box>
      <Box bgcolor="#fff">e</Box>
      <Box bgcolor="#fff">f</Box>
      <Box bgcolor="#fff">g</Box>
      <Box bgcolor="#fff">h</Box>
      <Box bgcolor="#fff">i</Box>
      <Box bgcolor="#fff">j</Box>
    </Box>
  );
};

export default Dashboard;
