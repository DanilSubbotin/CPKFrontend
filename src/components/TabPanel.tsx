import { motion } from "framer-motion";

interface Props {
  id: string;
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export default function TabPanel({ id, tabs, active, onChange }: Props) {
  return (
    <div className="flex items-center bg-white border border-text-gray/30 rounded-full w-fit isolate">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative px-8 py-4 text-sm outline-none ${
            active === tab ? "text-white" : "text-text-gray"
          }`}
        >
          {active === tab && (
            <motion.div
              layoutId={`${id}-active-pill`}
              className="absolute inset-0 bg-primary rounded-full -z-10"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
