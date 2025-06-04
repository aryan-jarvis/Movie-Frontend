// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// export default function MovieCard() {
//   return (
//     <Card
//       sx={{}}
//       style={{
//         display: "flex",
//         borderColor: "#e0dfdf",
//         // backgroundColor: "#ffdfdf",
//         backgroundColor: "ffffff",
//       }}
//     >
//       {/* <Card> */}
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         // height="140"
//         image="../src/assets/images/harrypotter.png"
//         // style={{ width: "116px", height: "126px" }}
//         style={{ width: "11rem", height: "11.95rem" }}
//       />
//       <CardContent>
//         <p>Booked for:</p>
//         <Typography>Alice in Wonderland</Typography>
//         <Typography>Cinepolis: Pacific NSP2, Delhi</Typography>
//         {/* <Typography></Typography> */}
//         <p>2 hours ago</p>
//       </CardContent>
//       <CardActions style={{ marginLeft: "70rem" }}>
//         <Button
//           size="small"
//           style={{
//             backgroundColor: "#ff5295",
//             color: "white",
//             height: "4rem",
//             width: "10rem",
//           }}
//         >
//           View Ticket
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MovieCard() {
  return (
    <Card
      sx={{}}
      style={{
        display: "flex",
        borderColor: "#e0dfdf",
        backgroundColor: "ffffff",
        height: "8.68rem",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image="../src/assets/images/harrypotter.png"
        style={{ width: "8rem", height: "8.68rem" }}
      />
      <CardContent>
        <p style={{ fontSize: "0.8rem" }}>Booked for:</p>
        <Typography style={{ fontSize: "0.8rem" }}>
          Alice in Wonderland
        </Typography>
        <Typography style={{ fontSize: "0.8rem" }}>
          Cinepolis: Pacific NSP2, Delhi
        </Typography>
        <p style={{ fontSize: "0.8rem" }}>2 hours ago</p>
      </CardContent>
      <CardActions style={{ marginLeft: "75rem" }}>
        <Button
          size="small"
          style={{
            backgroundColor: "#ff5295",
            color: "white",
            height: "3rem",
            width: "8.5rem",
          }}
        >
          View Ticket
        </Button>
      </CardActions>
    </Card>
  );
}
