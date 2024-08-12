import { FC } from "react";

import { Route, Routes } from 'react-router-dom';
import { DetailCollection } from "./DetailCollection";
import { DocumentCollection } from "./DocumentCollection";
import { InterviewAvailability } from "./InterviewAvailability ";
import { StatementOfPurpose } from "./StatementOfPurpose";


export const FormSection: FC = function () {
  return (
    <form
      style={{
        height: 'calc(100vh - 122.5px)',
        width: '70%',
        backgroundColor: '#f5f5f5',
        overflowY: 'auto',
      }}
    >
      <div className="w-[80%] mx-auto py-5">
        <div className="py-2 mb-2">
          <h2 className="text-xl leading-6">Preview</h2>
          <p className="text-base leading-5">
            You will be able to customize the fields in the later stage
          </p>
        </div>

        <header className="py-5 px-8 bg-[#1A8FE626] rounded-t-lg border-x-0 border-y-0 border-b border-solid border-[#1a8ee63e]">
          <div>
            <h2 className="text-xl leading-6">Name of the Enquiry Form</h2>
            <p className="text-xs text-[#888] leading-[14.6px]">One line description of the form</p>
            <p className="text-xs text-[#888] leading-[14.6px] pt-5">
              Provide the following information to process your application
            </p>
          </div>
        </header>

        <section className="bg-white w-full py-12 pb-32 rounded-b-lg">
          <div className="flex flex-col gap-5 w-4/5 mx-auto">
            <Routes>
              <Route path="/" element={<DetailCollection />} />
              <Route path="/document" element={<DocumentCollection />} />
              <Route path="/statement" element={<StatementOfPurpose />} />
              <Route path="/interview" element={<InterviewAvailability />} />
            </Routes>
          </div>
        </section>
      </div>
    </form>
  );
};
