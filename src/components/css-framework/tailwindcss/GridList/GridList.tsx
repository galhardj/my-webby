import { GRID_LIST } from "@/src/constants/grid-list";

const Button = ({ label }: { label: string }) => {
  return (
    <button className="flex items-center justify-between gap-2 rounded-md border px-6 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
      >
        <path
          d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H12.5V10.5H2V14ZM14.5 14H18V5H14.5V14ZM2 8.5H12.5V5H2V8.5Z"
          fill="black"
        />
      </svg>
      <span>{label}</span>
    </button>
  );
};

const GridItem = ({
  name,
  role,
  imgLink,
}: {
  name: string;
  role: string;
  imgLink: string;
  key: number;
}) => {
  return (
    <li className="flex flex-col justify-between gap-3 rounded-md border-2 p-6">
      <div className="flex justify-between gap-4">
        <div className="">
          <p className="font-bold">{name}</p>
          <p className="font-thin">{role}</p>
        </div>
        <img src={imgLink} alt={name} className="h-12 w-12 rounded-full" />
      </div>
      <div className="flex justify-between">
        <Button label="Email" />
        <Button label="Call" />
      </div>
    </li>
  );
};

const GridList = () => {
  return (
    <section className="flex">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {GRID_LIST.map((contact, index) => (
          <GridItem
            name={contact.name}
            role={contact.role}
            imgLink={contact.image}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default GridList;
