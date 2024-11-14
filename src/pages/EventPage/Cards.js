import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Grid } from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: '800px',
  maxHeight: '800px',
  minWidth: '90%',
  minHeight: '400px',
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  overflowY: "auto"
};

export default function Cards({ title, eventDetail, image }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ minWidth: 280, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: '10px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={eventDetail.imgSrc || "https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?w=826&t=st=1706539217~exp=1706539817~hmac=d9bd89be83fdac5a0863fc583434c11c5eeb43de7a41d2956bf4069a5b3f304c"}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            background: 'linear-gradient(45deg, #1c74a2, #ff4081)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}
        >
          {eventDetail.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen} size="small" style={{ color: '#1c74a2' }}>
          See Details
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="details">
                <h4 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
                  {eventDetail.title}
                </h4>
                <Grid container spacing={2} sx={{ justifyContent: 'center', }}>
  <Grid item xs={12} sm={6} md={3} lg={3}>
    <Card sx={{ backgroundColor: '#fef7fb', borderRadius: '10px', textAlign: 'center', boxShadow: "0 8px 14px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Typography variant="h6">Winner Prize</Typography>
        <Typography variant="h5" fontWeight="bold">PKR {eventDetail.winner}</Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={3} lg={3}>
    <Card sx={{ backgroundColor: '#fef7fb', borderRadius: '10px', textAlign: 'center', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Typography variant="h6">Runner Up</Typography>
        <Typography variant="h5" fontWeight="bold">PKR {eventDetail.firstRunner}</Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={3} lg={3}>
    <Card sx={{ backgroundColor: '#fef7fb', borderRadius: '10px', textAlign: 'center', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Typography variant="h6">Registration</Typography>
        <Typography variant="h5" fontWeight="bold">PKR {eventDetail.registrationReg}</Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={3} lg={3}>
    <Card sx={{ backgroundColor: '#fef7fb', borderRadius: '10px', textAlign: 'center', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Typography variant="h6">Early Bird</Typography>
        <Typography variant="h5" fontWeight="bold">PKR {eventDetail.earlyBird}</Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>

              </div>
              <div style={{ marginTop: '1.5rem', padding: '1rem', borderTop: '1px solid #ddd' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1c74a2' }}>Rules:</Typography>
                <ul style={{ paddingLeft: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                  {eventDetail.rules && eventDetail.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            </Typography>
            <div className="d-flex justify-content-center gap-4">
              <a className="generic-btn-1 p-2 px-3 text-white mt-4" href='https://qrfy.io/GGUEZAt3QE'>Register Now</a>
              <a className="generic-btn-1 p-2 px-3 text-white mt-4" href='https://drive.google.com/drive/folders/1HJ0NTCl-pVcs22Vgy7vAr08E2Mr80wOh?usp=drive_link' download={'airtech_rulebook'}>Download Rule Book</a>
            </div>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}
