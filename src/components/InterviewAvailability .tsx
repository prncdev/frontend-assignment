import { FC } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, FormControl, FormLabel, Input, Option, Select, selectClasses } from "@mui/joy";
import { DatePicker } from "rsuite";

export const InterviewAvailability: FC = function () {
  const city = [
    { label: 'Saket - New Delhi', country: 'India' },
    { label: 'Ghaziabad - UP', country: 'India' },
    { label: 'Gurugram - Haryana', country: 'India' },
    { label: 'Delhi - New York', country: 'USA' },
  ];

  return (
    <>
      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>1. Email*</FormLabel>
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

      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>2. Location*</FormLabel>
        <Autocomplete
          options={city}
          startDecorator={<SearchIcon fontSize="small" className="text-[#c3c3c3]" />}
          sx={{
            '--Input-radius': '0.25rem',
            '--Input-placeholderColor': '#c3c3c3',
            '--Input-minHeight': '2.5rem',
            '--variant-outlinedBorder': '#888',
          }}
          placeholder="Search or enter your location"
        />
        {/* <FormHelperText className="text-xs">
                <InfoOutlined className="text-sm" />
                Invalid Email address
              </FormHelperText> */}
      </FormControl>

      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>3. Interview Date*</FormLabel>
        <DatePicker
          style={{ width: 200 }}
          oneTap
          placement="auto"
          format="dd/MM/yyyy"
          placeholder='DD/MM/YYYY'
          caretAs={() => <CalendarTodayIcon className="text-[#c3c3c3]" fontSize="small" />}
        />
        {/* <FormHelperText className="text-xs">
                <InfoOutlined className="text-sm" />
                Contact no should be 10 digits long
              </FormHelperText> */}
      </FormControl>

      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>4. Interview Time*</FormLabel>
        <DatePicker
          style={{ width: 200 }}
          oneTap
          placement="auto"
          format="HH:mm"
          placeholder='12:00'
          caretAs={() => <AccessTimeIcon className="text-[#c3c3c3]" fontSize="small" />}
        />
        {/* <FormHelperText className="text-xs">
                <InfoOutlined className="text-sm" />
                Contact no should be 10 digits long
              </FormHelperText> */}
      </FormControl>

      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>5. Time Zone*</FormLabel>
        <Select
          placeholder="Search or Select a time zone from below"
          indicator={<KeyboardArrowDown />}
          sx={{
            '--Select-radius': '0.25rem',
            '--Select-placeholderColor': '#c3c3c3',
            '--Select-minHeight': '2.5rem',
            '--Select-indicatorColor': '#c3c3c3',
            '--variant-outlinedBorder': '#888',
            [`& .${selectClasses.indicator}`]: {
              transition: '0.2s',
              [`&.${selectClasses.expanded}`]: {
                transform: 'rotate(-180deg)',
              },
            },
          }}
          slotProps={{
            button: {
              sx: {
                color: '#c3c3c3'
              }
            },
            indicator: {
              sx: {
                color: '#8a8a8a'
              }
            }
          }}
        >
          <Option value="india-ist">India IST</Option>
          <Option value="usa-eastern">USA Eastern</Option>
          <Option value="singapore-sst">Singapore SST</Option>
          <Option value="japan-jst">Japan</Option>
        </Select>
      </FormControl>

      <FormControl
      // error
      >
        <FormLabel sx={{ color: '#595959' }}>6. Interview Medium*</FormLabel>
        <Select
          placeholder="Search or Select medium of Interview from below"
          indicator={<KeyboardArrowDown />}
          sx={{
            '--Select-radius': '0.25rem',
            '--Select-minHeight': '2.5rem',
            '--variant-outlinedBorder': '#888',
            [`& .${selectClasses.indicator}`]: {
              transition: '0.2s',
              [`&.${selectClasses.expanded}`]: {
                transform: 'rotate(-180deg)',
              },
            },
          }}
          slotProps={{
            button: {
              sx: {
                color: '#c3c3c3'
              }
            },
            indicator: {
              sx: {
                color: '#8a8a8a'
              }
            }
          }}
        >
          <Option value="in-person">In Person</Option>
          <Option value="online">Online</Option>
        </Select>
      </FormControl>
    </>
  );
};