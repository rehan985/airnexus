import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material/";

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

export default function Cards({ title, Event, image, EventDetails }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ minWidth: 280 }}>
      <CardMedia sx={{ height: 140 }} image="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?w=826&t=st=1706539217~exp=1706539817~hmac=d9bd89be83fdac5a0863fc583434c11c5eeb43de7a41d2956bf4069a5b3f304c" title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" className="text-purple">
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: "black" }}>
          <h4>Events:</h4>
          {Event.map((event) => {
            return (
              <>
                <div style={{ fontWeight: "600" }}>{event}</div>
              </>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen} size="small" style={{ color: '#1c74a2' }} >
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
                <div className="Events">
                  <Typography variant="body2" style={{ color: "black" }}>
                    <h4>Details:</h4>
                    <h5
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: '1rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <span>Winner</span> <span style={{ marginLeft: '14px' }}> RunnerUp</span>{" "}
                      <span>Registration</span> <span>Early Bird</span>
                    </h5>

                    {EventDetails.map((event) => {
                      return (
                        <>
                          <div style={{ fontSize: "1rem" }}>
                            <p style={{ fontSize: "14px", fontWeight: 'bold', marginBottom: '20px' }}>
                              {event.title}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                              <span>{event.winner}</span>{" "}
                              <span>{event.firstRunner}</span>{" "}
                              <span>{event.registrationReg}</span>
                              <span>{event.earlyBird}</span>

                            </div>
                            <br />



                          </div>
                        </>
                      );
                    })}
                    {/* <h5>Advisors:</h5>
                    <div >{advisors.map((advisors) => {
                      return (<>
                        <h6 className="mt-3">
                          {advisors === "" ? "None" : advisors}
                        </h6>

                      </>)
                    })}</div> */}
                  </Typography>
                  <div className="d-flex justify-content-center gap-4">
                    <a className="generic-btn-1 p-2 px-3 text-white  mt-4" href='https://qrfy.io/GGUEZAt3QE'>Register Now</a>
                    <a className="generic-btn-1 p-2 px-3 text-white mt-4" href='https://drive.google.com/drive/folders/1HJ0NTCl-pVcs22Vgy7vAr08E2Mr80wOh?usp=drive_link' download={'airtech_rulebook'}>Download Rule Book</a>
                  </div>

                </div>

              </div>
            </Typography>

          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}
