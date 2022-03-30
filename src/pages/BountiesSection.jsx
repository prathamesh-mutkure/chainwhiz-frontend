import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextHeading from "../components/misc/TextHeading";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Articles.scss";
import { getAllBounties } from "../api/bounties_api";
import LatestBountyCard from "../components/bounties/LatestBountyCard";
import { Container } from "@mui/material";

export default function BountiesSection() {
  const [bounties, setBounties] = useState([]);

  const fetchBounties = async () => {
    const bounties = await getAllBounties();
    setBounties(bounties);
  };

  useEffect(() => {
    fetchBounties();
  }, []);

  console.table("BOUNTIES: ", bounties);

  return (
    <Container>
      <TextHeading text="Latest Bounties" />

      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        {bounties.map((bounty) => {
          return (
            <Grid item xs={6}>
              <LatestBountyCard key={bounty.id} bounty={bounty} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
