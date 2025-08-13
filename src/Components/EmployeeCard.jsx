// src/Components/UserCard.jsx
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function UserCard({ user }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      sx={{ borderRadius: 2, "&::before": { display: "none" } }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar src={user.image} alt={user.name} sx={{ width: 48, height: 48 }} />
          <Typography variant="subtitle1">{user.name}</Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body2">
              <strong>Email:</strong> {user.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              <strong>Title:</strong> {user.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              <strong>Department:</strong> {user.department}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              <strong>Phone:</strong> {user.phone}
            </Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
