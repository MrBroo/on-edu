import { Card, CardContent, CardMedia, Box, Typography } from "@/node_modules/@mui/material/index";
import { countReset } from "console";

export default function LessonDescription(props) {
    const { course } = props;

    return (
        <Card>
            <CardMedia>
                <Box
                    sx={{
                        width: '100%',
                        height: '250px',
                        borderRadius: 0.5,
                        backgroundColor: 'gray',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography sx={{ color: '#fff' }}>
                        Video uchun joy
                    </Typography>
                </Box>
            </CardMedia>
            <CardContent>
                <Typography variant="h4">
                    {course.title}
                </Typography>
                <Typography variant="caption">
                    {course.mentor}
                </Typography>
            </CardContent>
        </Card>
    )
}