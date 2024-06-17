import { Typography } from "@/node_modules/@mui/material/index";
import { withLayout } from "@/src/common/hoc/withLayout";
import { Container, Box } from "@mui/material";

 function Lesson() {

  return (
    <Container sx={{ mt: 6 }}>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundColor: "#ccc",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Video uchun joy
      </Box>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {lesson.title}
      </Typography>
      <Typography variant="caption">
        {lesson.description}
      </Typography>
    </Container>
  );
}

const lesson = {
    id: 1,
    title: "Sematic elementlar",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat dolore voluptate doloribus soluta aliquid laboriosam explicabo doloremque eaque, iure pariatur corporis. Modi quos quae voluptatum eaque assumenda, sed voluptatibus.'
}
 
export default withLayout(Lesson, 'lesson')