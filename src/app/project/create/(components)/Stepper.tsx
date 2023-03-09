import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Information Project',
    'Configure roles',
    'Upload files',
  ];
  
  export default function HorizontalStepper({ step } : any) {
    return (
      <Box sx={{ width: '100%', padding : "0 20rem", marginBottom: '2rem'}}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step sx={{ fontSize :'4rem'}} key={label}>
              <StepLabel sx={{ fontSize :'4rem'}}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }