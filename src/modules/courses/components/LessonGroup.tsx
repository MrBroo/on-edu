'use client';
import { useNavigation } from "@/src/lib/hooks/useNavigation";
import { 
    Box,
    Card,
    CardContent,
    ListItem,
    ListItemButton,
    Typography,
} from "@mui/material";

export default function LessonGroup(props) {
    const { modules } = props;
    const router = useNavigation();
    console.log('router', router);

    return modules.map((module) => (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <Box sx={{ backgroundColor: '#f0f5f9', padding: 2.5, borderRadius: 1 }}>
                    <Typography variant="h6">
                        {module.title}
                    </Typography>
                </Box>
                <Box>
                    {module.lessons.map((lesson) => (
                        <ListItemButton onClick={() => router.router.push('/courses/frontend/1')} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
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
    ))
}

