import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MovieCard() {
  return (
    <Card sx={{}} style={{ display: "flex", border: "solid black" }}>
      {/* <Card> */}
      <CardMedia
        component="img"
        alt="green iguana"
        // height="140"
        image="../src/assets/images/harrypotter.png"
        style={{ width: "116px", height: "126px" }}
      />
      <CardContent>
        <Typography>Alice in Wonderland</Typography>
        <Typography>Cinepolis: Pacific NSP2, Delhi</Typography>
        {/* <Typography></Typography> */}
        <p>2 hours ago</p>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ backgroundColor: "red", color: "white" }}>
          View Ticket
        </Button>
      </CardActions>
    </Card>
  );
}
