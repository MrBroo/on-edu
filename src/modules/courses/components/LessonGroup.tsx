import { Box, Card, CardContent, ListItem, ListItemButton, Typography } from "@mui/material";

export default function LessonGroup(props) {
    const { lessonGroup } = props;

    return (
        <Card>
            <CardContent>
                <Box sx={{ backgroundColor: '#f0f5f9', padding: 2.5, borderRadius: 1 }}>
                    <Typography variant="h6">
                        {lessonGroup.title}
                    </Typography>
                </Box>
                <Box>
                    {lessonGroup.lessons.map((lesson) => (
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'black', 
                                    borderRadius: 1, 
                                    width: '40px',
                                    height: '40px', 
                                    mr: 2
                                }}
                            >
                                {lesson.icon}
                            </Box>
                            <Typography variant="subtitle1">
                                {lesson.title}
                            </Typography>
                        </ListItemButton>
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}

