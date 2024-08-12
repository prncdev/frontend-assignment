import { FC } from "react";
import AttachmentIcon from '@mui/icons-material/Attachment';

const documentList = [
  '10th Marksheet*',
  '12th Marksheet*',
  'Graduation Marksheet*',
  'Post Graduation Marksheet',
  'Resume/CV*',
  'Recommendation Letter',
  'Salary Slips*',
  'Others',
]

export const DocumentCollection: FC = function () {
  return (
    <>
      {documentList.map((title, index: number) => {
        const formattedId = title.split(' ').join('-');
        return (
          <div className="w-fit" key={formattedId}>
            <p className="text-base leading-[18.75px] mb-1.5">{`${index + 1}. ${title}`}</p>
            <label
              htmlFor={formattedId}
              className="w-40 inline-flex items-center rounded h-10 border border-solid border-[#888] cursor-pointer px-3"
            >
              <input type="file" name={formattedId} id={formattedId} className="hidden" />
              <AttachmentIcon fontSize="small" className="text-[#c3c3c3] mr-2" />
              <span className="text-[#c3c3c3] text-sm leading-[16.41px]">Attach file upto 5kb</span>
            </label>
          </div>
        );
      })}
    </>
  );
};