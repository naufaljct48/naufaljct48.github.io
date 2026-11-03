import { techIcon } from "../data/icons";

const TechChip = ({ label }: { label: string }) => {
  const icon = techIcon(label);
  return (
    <li className="chip gap-1.5">
      {icon && <img src={icon.src} alt="" height={16} className={`h-4 w-auto max-w-[2rem] object-contain ${icon.tone}`} />}
      {label}
    </li>
  );
};

export default TechChip;
