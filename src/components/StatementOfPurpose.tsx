import { FormControl, FormHelperText, FormLabel, Textarea } from "@mui/joy";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

const statements = [
  "Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?*",

  "Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?*",

  'What are the three things that are most important to you in a job?*'
];


interface StatementFormProps {
  statementLabel: string;
  value: string;
  name: string;
  wordLimit: number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface Statement {
  value: string;
  limit: number;
}

interface StatementState {
  [key: string]: Statement;
}


const StatementForm: FC<StatementFormProps> = function ({
  statementLabel, value, name, wordLimit, onChange
}) {

  return (
    <FormControl>
      <FormLabel
        sx={{
          color: '#595959',
          fontSize: '1rem',
          lineHeight: '18.75px'
        }}
      >
        {statementLabel}
      </FormLabel>
      <Textarea
        minRows={2}
        sx={{
          '--Input-radius': '0.25rem',
          '--Input-placeholderColor': '#c3c3c3',
          '--Input-minHeight': '2.5rem',
          '--variant-outlinedBorder': '#888',
          '& textarea::placeholder': {
            paddingBlockStart: '0.75rem',
          },
        }}
        value={value}
        name={name}
        onChange={onChange}
        placeholder="Enter a description for the long answer"
      />

      <FormHelperText sx={{
        color: '#8a8a8a',
        fontSize: '10px',
        lineHeight: '11.72px',
        justifyContent: 'flex-end'
      }}>
        {wordLimit} word limit
      </FormHelperText>
    </FormControl>
  )
}

export const StatementOfPurpose: FC = function () {
  const [statement, setStatement] = useState<StatementState>({
    form1: { value: '', limit: 300 },
    form2: { value: '', limit: 300 },
    form3: { value: '', limit: 300 },
  });

  const handleInput: ChangeEventHandler<HTMLTextAreaElement> = function (event) {
    const { name, value } = event.target;
    setStatement((prevState) => {
      const newLimit = 300 - value.length;
      return {...prevState, [name]: { value, limit: newLimit }};
    });
  }

  return (
    <>
      {statements.map((statementLabel, index: number) => {
        const formName = `form${index + 1}`;
        return (
          <StatementForm
            key={index}
            value={statement[formName].value}
            onChange={handleInput}
            statementLabel={`${index+1}. ${statementLabel}`}
            name={formName}
            wordLimit={statement[formName].limit}
          />
        );
      })}
    </>
  );
};