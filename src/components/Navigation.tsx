import { FC, useEffect, useState } from "react";
import { NavCard } from "./NavCard";
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    title: 'Details Collection',
    desc: 'Collect information from Candidates on their education, work experience, contact no, etc',
    link: '/',
  },
  {
    title: 'Document Collection',
    desc: 'Save time and efforts: Explore this template to find a set of questions required for document collection',
    link: '/document'
  },
  {
    title: 'Statement of Purpose',
    desc: 'Start creating a new form with the wide options of fields available',
    link: '/statement'
  },
  {
    title: 'Interview Availability',
    desc: 'Start creating a new form with the wide options of fields available',
    link: '/interview'
  }
]


export const Nav: FC = function () {
  const location = useLocation();
  const [isSelected, setIsSelected] = useState('/');

  useEffect(() => {
    setIsSelected(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-white px-10 py-6 h-[75.5vh] overflow-y-auto">
      <NavCard />
      <p className="text-[#595959] pt-7">
        Explore the following Templates:
      </p>

      <div className="py-4 inline-flex flex-col gap-7">
        {navItems.map(({ title, desc, link }, index: number) => (
          <Link to={link}>
            <NavCard
              key={title + index}
              title={title}
              desc={desc}
              boxColor={isSelected === link ?  "#1a8fe64d" : ''}
              className={`bg-[#F5F8FA] border border-solid ${isSelected === link ? '!border-[#1a8fe64d] shadow-md': ''}`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};
