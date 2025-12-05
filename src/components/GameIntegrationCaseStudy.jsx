import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import diagram1 from "../diagrams/integration-flow.svg";
import diagram2 from "../diagrams/ad-flow.svg";
import diagram3 from "../diagrams/ad-timer.svg";

export default function CaseStudyAzerion() {
  return (
    <Box
      sx={{
        mt: 8,
        mb: 12,
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: "850px", width: "100%" }}>

        {/* Title */}
        <Typography variant="h4" sx={{ mb: 2 }}>
          HTML5 Game Integration and Monetization Pipeline
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, lineHeight: 1.7 }}
        >
          Almost four years of contribution to a large-scale HTML5 gaming platform:
          integrating in-house and partners games, implementing monetization logic, 
          building internal libraries, and maintaining hundreds of live titles across multiple locales.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* SECTION 1 — Overview */}
        <Typography variant="h5" sx={{ fontWeight: 300, mb: 2 }}>
          1. Integration Overview
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, lineHeight: 1.7 }}
          color="text.secondary"
        >
          Each game integration required adapting the title to the platform’s environment:
          loading screens, SDK initialization, ad logic, localization, and event tracking.
          I worked on both the platform: side logic (libraries, timers, UI components)
          and game-specific adjustments to ensure smooth release pipelines.
        </Typography>

        {/* Diagram 1 */}
        <Box
          component="img"
          src={diagram1}
          alt="Integration Flow Diagram"
          sx={{
            width: "100%",
            maxWidth: "750px",
            display: "block",
            mx: "auto",
            mb: 6,
          }}
        />

        <Divider sx={{ my: 4 }} />

        {/* SECTION 2 — Ad Flow */}
        <Typography variant="h5" sx={{ fontWeight: 300, mb: 2 }}>
          2. How Ads Work Inside the Game
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, lineHeight: 1.7 }}
          color="text.secondary"
        >
          Monetization required integrating interstitial and rewarded ads that trigger
          at consistent, platform-approved points, such as first load, level transitions,
          booster rewinds, and timed intervals. I implemented the logic handling
          these paths, ensuring stable behavior across engines and partner builds.
        </Typography>

        {/* Diagram 2 */}
        <Box
          component="img"
          src={diagram2}
          alt="Ad Flow Diagram"
          sx={{
            width: "100%",
            maxWidth: "750px",
            display: "block",
            mx: "auto",
            mb: 6,
          }}
        />

        <Divider sx={{ my: 4 }} />

        {/* SECTION 3 — Ad Timer */}
        <Typography variant="h5" sx={{ fontWeight: 300, mb: 2 }}>
          3. Ad Timer Logic
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, lineHeight: 1.7 }}
          color="text.secondary"
        >
          One of my main contributions was implementing the ad-timer logic:
          a neutral library used by multiple teams. It ensures interstitial ads appear
          at controlled intervals (e.g., every 2–3 minutes) without blocking gameplay.
          Once an ad is shown, the timer resets. This significantly improved consistency
          and reduced partner-side issues.
        </Typography>

        {/* Diagram 3 */}
        <Box
          component="img"
          src={diagram3}
          alt="Ad Timer Diagram"
          sx={{
            width: "100%",
            maxWidth: "750px",
            display: "block",
            mx: "auto",
            mb: 6,
          }}
        />

        <Divider sx={{ my: 4 }} />

        {/* SECTION 4 — Localization */}
        <Typography variant="h5" sx={{ fontWeight: 300, mb: 2 }}>
          4. Localization & Market Adaptation
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, lineHeight: 1.7 }}
          color="text.secondary"
        >
          Our team handled localization for dozens of markets. This included adapting UI strings,
          right-to-left layouts, region-specific compliance requirements, and preparing builds in
          collaboration with the translation department. Each localized game required a separate QA
          cycle to ensure all monetization, UI, and gameplay elements held up across languages.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* SECTION 5 — Long-term Maintenance */}
        <Typography variant="h5" sx={{ fontWeight: 300, mb: 2 }}>
          5. Long-Term Maintenance
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, lineHeight: 1.7 }}
          color="text.secondary"
        >
          After launch, we maintained live titles by fixing engine incompatibilities, adjusting ad logic,
          updating libraries, removing deprecated APIs, improving stability, and ensuring compliance with
          evolving privacy and tracking regulations.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* END */}
        <Typography
          variant="body1"
          sx={{ mt: 4, fontWeight: 300 }}
          color="text.secondary"
        >
          This case study presents a condensed view of approximately four years of working
          across hundreds of HTML5 titles, multiple engines, and a constantly evolving platform.
        </Typography>

      </Box>
    </Box>
  );
}
