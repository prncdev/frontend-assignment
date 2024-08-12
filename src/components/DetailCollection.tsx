import { FC } from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { FormControl, FormLabel, Input } from "@mui/joy";
import { DatePicker } from "rsuite";

export const DetailCollection: FC = function () {
  return (
    <>
      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>1. Name*</FormLabel>
        <Input
          sx={{
            // '--Input-focusedThickness': '2px',
            '--Input-radius': '0.25rem',
            '--Input-placeholderColor': '#c3c3c3',
            '--Input-minHeight': '2.5rem',
            // '--variant-borderWidth': '2px',
            '--variant-outlinedBorder': '#888',
          }}
          placeholder="Enter your name e.g John Doe"
        />
        {/* <FormHelperText className="text-xs">
                <InfoOutlined className="text-sm" />
                Invalid Name
              </FormHelperText> */}
      </FormControl>

      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>2. Email*</FormLabel>
        <Input
          sx={{
            '--Input-radius': '0.25rem',
            '--Input-placeholderColor': '#c3c3c3',
            '--Input-minHeight': '2.5rem',
            '--variant-outlinedBorder': '#888',
          }}
          placeholder="Example - userid@gmail.com" />
        {/* <FormHelperText className="text-xs">
                <InfoOutlined className="text-sm" />
                Invalid Email address
              </FormHelperText> */}
      </FormControl>

      <FormControl>
        <FormLabel sx={{ color: '#595959' }}>3. Date of Birth</FormLabel>
        <DatePicker
          style={{ width: 200 }}
          oneTap
          placement="auto"
          format="dd/MM/yyyy"
          placeholder='DD/MM/YYYY'
          caretAs={() => <CalendarTodayIcon className="text-[#c3c3c3]" fontSize="small" />}
        />
      </FormControl>

      <FormControl>
        <FormLabel sx={{ color: '#595959' }}>4. Contact no</FormLabel>
        <Input
          sx={{
            '--Input-radius': '0.25rem',
            '--Input-placeholderColor': '#c3c3c3',
            '--Input-minHeight': '2.5rem',
            '--variant-outlinedBorder': '#888',
          }}
          placeholder="Enter your 10 digit contact no" />
      </FormControl>
    </>
  );
};