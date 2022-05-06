import React, { useState } from "react";
// MATERIAL UI -> ACCORDION COMPONENT
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
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {questions.map((q, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expand-icon" />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-content`}
            className="acc-header"
          >
            <Typography className="q-title">{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="acc-content">
            {q.answer.map((answer, id) => (
              <Typography key={id} className="q-answer">
                {answer}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default QuestionAccordion;
