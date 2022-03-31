import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Avatar, Chip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./BountiesComponent.scss";
import ChainwhizLogo from "./ChainwhizLogo.png";

export default function LatestBountyCard({ bounty }) {
  const {
    id,
    questionTitle,
    bountyCurrency,
    bountyReward,
    githubIssueUrl,
    questionCategories,
    timeEnd,
  } = bounty;

  return (
    <div>
      <Card variant="outlined" sx={{ minWidth: 275 }} className="card">
        <CardContent>
          <Avatar
            src={ChainwhizLogo}
            style={{ height: "51px", width: "51px" }}
          />
          <Typography variant="h5" component="div">
            {questionTitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Chip
            className="chip"
            label={`Earn ${bountyReward} ${bountyCurrency}`}
          />
          <Chip
            className="chip"
            label={`${Math.round(timeEnd / 86400)} Days Left`}
          />
        </CardActions>
      </Card>
    </div>
  );
}
