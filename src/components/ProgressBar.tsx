import { FC } from 'react';

import { Check } from '@mui/icons-material';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import Stepper from '@mui/joy/Stepper';

export const ProgressBar: FC = function () {
  return (
    <Stepper
      size='sm'
      sx={{
        width: 1200,
        minWidth: 550,
        lineHeight: '18.75px',
        fontWeight: 400
      }}
    >
      <Step
        indicator={
          <StepIndicator variant="solid" sx={{ background: '#1a8fe6', border: `solid 1px #d8d8d8` }}>
            <Check className='text-base' />
          </StepIndicator>
        }
      >
        Form Section
      </Step>
      <Step indicator={<StepIndicator variant="outlined" sx={{ border: `solid 1px #d8d8d8` }} />}>
        Set up
      </Step>
      <Step indicator={<StepIndicator variant="outlined" sx={{ border: `solid 1px #d8d8d8` }} />}>
        Form Creation
      </Step>
      <Step indicator={<StepIndicator variant="outlined" sx={{ border: `solid 1px #d8d8d8` }} />}>
        Review
      </Step>
    </Stepper>
  );
};