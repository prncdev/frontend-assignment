import { FC } from 'react';
type Props = {
  title?: string;
  desc?: string;
  className?: any;
  boxColor?: string;
  link?: string;
}

export const NavCard: FC<Props> = function ({
  title = 'New Form',
  desc = 'Start creating a new form with the wide options of fields available',
  boxColor,
  className
}) {
  return (
    <div className={`flex gap-4 bg-white py-6 px-6 rounded-lg border border-solid border-[#888] cursor-pointer ${className}`}
    >
      <div
        style={{ width: '70px', height: '70px', backgroundColor: boxColor?.length ? boxColor : '#d8d8d8' }}
        className={`rounded inline-block`}
      />
      <div className='w-[216px]'>
        <p className='font-semibold'>
          {title}
        </p>
        <p className='text-xs text-[#343434E5] leading-[14px] py-1.5 text-wrap'>
          {desc}
        </p>
      </div>
    </div>
  );
};