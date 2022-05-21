import { Alert, Button, checkboxClasses } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, addcolor } from "./store/thaliSlice";

function Tickets() {
  const [flag, setflag] = useState(false);
  const seats = useSelector((state) => state.thalislice.items);
  const seats1 = useSelector((state) => state.thalislice.items1);
  const seats2 = useSelector((state) => state.thalislice.items2);
  const seats3 = useSelector((state) => state.thalislice.items3);
  const info = useSelector((state) => state.thalislice.color);

  const dispatch = useDispatch();
  const navi = useNavigate();

  setTimeout(() => {
    setflag(false);
  }, 3000);

  setTimeout(() => {
    dispatch(addcolor(false));
  },300000);

  const click = (value, i) => {
    dispatch(add(value));
    setflag(true);
    dispatch(addcolor(true));
  };

  const click1 = (value, i) => {
    dispatch(add(value));
    setflag(true);
    dispatch(addcolor(true));
  };

  const click2 = (value, i) => {
    dispatch(add(value));
    setflag(true);
    dispatch(addcolor(true));
  };

  const click3 = (value, i) => {
    dispatch(add(value));
    setflag(true);
    dispatch(addcolor(true));
  };

  const tickt = () => {
    navi("/check");
  };

  return (
    <>
      {info ? (
        <>
          <div
            style={{
              background: "#212121",
              width: "800px",
              height: "600px",
              textAlign: "center",
              marginLeft: "350px",
              marginTop: "-40px",
            }}
          >
            {flag ? (
              <Alert
                severity="success"
                variant="filled"
                sx={{ marginBottom: "10px" }}
              >
                Ticket is Booked — check it out!
              </Alert>
            ) : null}
            <Box sx={{ background: "#212121" }}>
              <h1 style={{ color: "white" }}>Book Your Seats</h1>
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#212121",
                }}
              >
                {seats.map((value, i) => {
                  return (
                    <>
                      {" "}
                      <div
                        style={{
                          justifySelf: "center",
                          fontSize: "25px",
                          width: "50px",
                          height: "50px",
                          border: "2px solid black",
                          background: "white",
                          cursor: "hand",
                        }}
                        onClick={() => {
                          click(value);
                        }}
                      >
                        {value.id} &nbsp; &nbsp;&nbsp;&nbsp;
                      </div>{" "}
                      &nbsp; &nbsp;
                    </>
                  );
                })}
              </Box>
              <br />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {seats1.map((value, i) => {
                  return (
                    <>
                      <div
                        style={{
                          justifySelf: "center",
                          fontSize: "25px",
                          width: "50px",
                          height: "50px",
                          border: "2px solid black",
                          background: "white",
                        }}
                        onClick={() => {
                          click1(value, i);
                        }}
                      >
                        {value.id} &nbsp; &nbsp;&nbsp;&nbsp;
                      </div>
                      &nbsp;&nbsp;
                    </>
                  );
                })}
              </Box>
              <br />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {seats2.map((value, i) => {
                  return (
                    <>
                      <div
                        style={{
                          justifySelf: "center",
                          fontSize: "25px",
                          width: "50px",
                          height: "50px",
                          border: "2px solid black",
                          background: "white",
                        }}
                        onClick={() => {
                          click2(value, i);
                        }}
                      >
                        {value.id} &nbsp; &nbsp;&nbsp;&nbsp;
                      </div>{" "}
                      &nbsp; &nbsp;
                    </>
                  );
                })}
              </Box>
              <br />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {seats3.map((value, i) => {
                  return (
                    <>
                      <div
                        style={{
                          justifySelf: "center",
                          fontSize: "25px",
                          width: "50px",
                          height: "50px",
                          border: "2px solid black",
                          background: "white",
                        }}
                        onClick={() => {
                          click3(value, i);
                        }}
                      >
                        {value.id} &nbsp; &nbsp;&nbsp;&nbsp;
                      </div>{" "}
                      &nbsp; &nbsp;
                    </>
                  );
                })}
              </Box>
              <br />
              <br />

              <Button variant="contained" onClick={tickt}>
                Go to Ticket
              </Button>
            </Box>
          </div>
        </>
      ) : (
        <h1>Sorry Time is over....Book Onceagain</h1>
      )}
    </>
  );
}

export default Tickets;
