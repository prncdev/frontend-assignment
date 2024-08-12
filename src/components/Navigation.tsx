import { createRef, FC, RefObject, useEffect, useRef, useState } from "react";
import { NavCard } from "./NavCard";
import { Link, useLocation } from 'react-router-dom';

export const navItems = [
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


export const Nav: FC<{currentSection: number}> = function ({ currentSection }) {
  const location = useLocation();
  const [isSelected, setIsSelected] = useState('/');
  
  const navRefs = useRef<RefObject<HTMLAnchorElement>[]>(navItems.map(() => createRef()));

  useEffect(() => {
    if (navRefs.current[currentSection]) {
      navRefs.current[currentSection].current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentSection]);

  useEffect(() => {
    setIsSelected(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-white px-10 py-6 h-[74vh] overflow-y-auto">
      <NavCard />
      <p className="text-[#595959] pt-7">
        Explore the following Templates:
      </p>

      <div className="py-4 inline-flex flex-col gap-7">
        {navItems.map(({ title, desc, link }, index: number) => (
          <Link to={link} key={title + index} ref={navRefs.current[index]}>
            <NavCard
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
