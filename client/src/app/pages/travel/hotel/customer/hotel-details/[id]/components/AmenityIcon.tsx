import {
  Home,
  Ruler,
  TreePalm,
  Wind,
  Bath,
  Tv,
  Coffee,
  Mountain,
} from "lucide-react";

interface IconMap {
  Home: any;
  Ruler: any;
  Tree: any;
  Wind: any;
  Bath: any;
  Tv: any;
  Coffee: any;
  Mountain: any;
}

const iconMap = {
  Home: Home,
  Ruler: Ruler,
  Tree: TreePalm,
  Wind: Wind,
  Bath: Bath,
  Tv: Tv,
  Coffee: Coffee,
  Mountain: Mountain,
};

interface Iprops {
  icon: string;
  label: string;
  className?: string;
}

const AmenityIcon = ({ data }: { data: Iprops }) => {
  const { icon, label } = data;
  const style = data.className || "text-gray-600";
  const IconComponent = iconMap[icon as keyof IconMap] || null;

  return (
    <div className="flex items-center gap-1 text-xs">
      {IconComponent && <IconComponent size={16} className={`${style}`} />}
      <span>{label}</span>
    </div>
  );
};

export default AmenityIcon;
