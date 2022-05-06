import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// QUESTIONS (DATA)
import { questions } from "./../composable/questions.js";
// STYLES
import "./../css/QuestionAccordion.scss";

function QuestionAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="accordion-container">
      {questions.map((q, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-content`}
          >
            <Typography>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {q.answer.map((answer, id) => (
              <Typography key={id}>{answer}</Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default QuestionAccordion;
