import { Button, Typography } from "@/node_modules/@mui/material/index";
import { Card, CardContent } from "@mui/material";

export default function Donation() {
    return (
        <Card sx={{ mt: 3 }}>
            <CardContent>
                <Typography sx={{ mb: 1 }} variant="h5">
                    Donat qilish
                </Typography>
                <Typography sx={{ mb: 1 }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </Typography>
                <Button size="large" sx={{ width: '100%' }} variant="contained">
                    Donat qilish
                </Button>
            </CardContent>
        </Card>
    )
}
