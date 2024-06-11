import { Container } from "@/node_modules/@mui/material/index";
import { withLayout } from "@/src/common/hoc/withLayout"
import { FiLock } from "react-icons/fi";
import LessonGroup from "@modules/courses/components/LessonGroup";

function Course() {
    return (
        <Container>
            <LessonGroup lessonGroup={lessonGroup} />
        </Container>
    )
}

const lessonGroup = {
    title: '1. HTML & CSS',
    lessons: [
        {
            id: 1,
            icon: <FiLock style={{ color: 'white', width: '24px', height: '24px' }} />,
            title: 'Sematic elementlar'
        },
        {
            id: 2,
            icon: <FiLock style={{ color: 'white', width: '24px', height: '24px' }} />,
            title: 'Non sematic elementlar'
        }
    ]
} 
export default withLayout(Course, 'main');