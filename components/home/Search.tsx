import React, { useState } from "react";
import { ArrowDownIcon } from '@heroicons/react/24/solid'; // Ou une autre icône de votre choix

// Ajouter un type pour représenter les données du formulaire
type SearchFormData = {
  from: string;
  to: string;
  departure: string;
  return: string;
  passengers: number;
};

type FieldBlock = {
  name: string; // Ajout de cette propriété pour la gestion d'état
  label: string;
  placeholder: string;
  type: "text" | "date" | "number";
  showIcon?: boolean;
  displayPlaceholder?: string;
};

const fields: FieldBlock[] = [
  { name: "from", label: "From", placeholder: "Search...", type: "text", showIcon: true },
  { name: "to", label: "To", placeholder: "Search...", type: "text", showIcon: true },
  { name: "departure", label: "Departure", placeholder: "DD/MM/YY", type: "date", displayPlaceholder: "DD/MM/YY" },
  { name: "return", label: "Return", placeholder: "DD/MM/YY", type: "date", displayPlaceholder: "DD/MM/YY" },
  { name: "passengers", label: "Passenger", placeholder: "Number...", type: "number", showIcon: true },
];

const Search: React.FC = () => {
  // Ajouter un état pour le formulaire
  const [formData, setFormData] = useState<SearchFormData>({
    from: "",
    to: "",
    departure: "",
    return: "",
    passengers: 1
  });

  // Gestionnaire de changement pour les inputs
  const handleChange = (name: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestionnaire de soumission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search form data:", formData);
    // Ici, vous pourriez appeler une API ou naviguer vers une page de résultats
  };

  // Le séparateur
  const separator = (
    <div className="w-0.5 h-32 opacity-20 bg-zinc-300 rounded-full" />
  );

  return (
    <div className="fixed bottom-0 left-1/2 flex-nowrap -translate-x-1/2 z-50 w-[calc(100vw-16px)]  mx-4 mb-8 flex items-center gap-2">
      <form onSubmit={handleSubmit} className="w-full h-30 px-8 py-2 text-xl rounded-[40px] flex justify-between items-center gap-4 bg-white/10">
        {fields.map((field, idx) => (
          <React.Fragment key={field.name}>
            <div className="w-44 flex flex-col justify-start items-start gap-4">
              <label className="self-stretch h-7 text-white font-normal font-['PP_Neue_Montreal'] mb-4">
                {field.label}
              </label>
              <div className="relative w-full">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof SearchFormData]}
                  onChange={(e) => handleChange(field.name, field.type === 'number' ? parseInt(e.target.value) : e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 bg-neutral-50/80 rounded-[20px] text-black font-thin outline-none"
                />
                {field.showIcon && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowDownIcon className="w-3 h-3 text-black" />
                  </div>
                )}
              </div>
            </div>
            {idx < fields.length - 1 && separator}
          </React.Fragment>
        ))}
      </form>
      <button className="w-40 h-30 px-8 py-2 text-xl rounded-[40px] flex justify-between items-center gap-4 bg-black/50">
        Search
        <ArrowDownIcon className="w-3 h-3 text-white" />
      </button>
    </div>
  );
};

export default Search;