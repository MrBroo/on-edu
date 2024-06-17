import { Container, Grid } from "@mui/material";
import { withLayout } from "@/src/common/hoc/withLayout";
import { FiLock } from "react-icons/fi";
import LessonGroup from "@modules/courses/components/LessonGroup";
import LessonDescription from "@/src/modules/courses/components/LessonDescription";
import Donation from "@/src/common/components/Donation";

function Course() {
  return (
    <Container>
        <Grid container spacing={3} mt={3}>
            <Grid item xs={8}>
                <LessonGroup modules={frontendCourse.modules} />
            </Grid>
            <Grid item xs={4}>
                <LessonDescription course={frontendCourse} />
                <Donation />
            </Grid>
        </Grid>
    </Container>
  );
}

const frontendCourse = {
  title: "Frontend",
  mentor: "Abduvali Rajabov",
  modules: [
    {
      title: "1. HTML & CSS",
      lessons: [
        {
          id: 1,
          icon: (
            <FiLock style={{ color: "white", width: "24px", height: "24px" }} />
          ),
          title: "Sematic elementlar",
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat dolore voluptate doloribus soluta aliquid laboriosam explicabo doloremque eaque, iure pariatur corporis. Modi quos quae voluptatum eaque assumenda, sed voluptatibus.'
        },
        {
          id: 2,
          icon: (
            <FiLock style={{ color: "white", width: "24px", height: "24px" }} />
          ),
          title: "Non sematic elementlar",
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat dolore voluptate doloribus soluta aliquid laboriosam explicabo doloremque eaque, iure pariatur corporis. Modi quos quae voluptatum eaque assumenda, sed voluptatibus.'

        },
      ],
    },
    {
      title: "2. JavaScript",
      lessons: [
        {
          id: 1,
          icon: (
            <FiLock style={{ color: "white", width: "24px", height: "24px" }} />
          ),
          title: "O`zgaruvchilar va funksiya",
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat dolore voluptate doloribus soluta aliquid laboriosam explicabo doloremque eaque, iure pariatur corporis. Modi quos quae voluptatum eaque assumenda, sed voluptatibus.'
        },
        {
          id: 2,
          icon: (
            <FiLock style={{ color: "white", width: "24px", height: "24px" }} />
          ),
          title: "Non sematic elementlar",
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat dolore voluptate doloribus soluta aliquid laboriosam explicabo doloremque eaque, iure pariatur corporis. Modi quos quae voluptatum eaque assumenda, sed voluptatibus.'
        },
      ],
    },
  ],
};
export default withLayout(Course, "course");
