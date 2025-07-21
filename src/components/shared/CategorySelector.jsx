// src/components/CategorySelector.jsx
import { useState } from 'react';
import farmingCategories from '../../data/farmingCategories.json';

function CategorySelector({ value, onChange }) {
  const [selected, setSelected] = useState(value || '');

  const handleChange = (e) => {
    const subcat = e.target.value;
    setSelected(subcat);
    onChange(subcat);
  };

  // Sort main categories by `order`
  const sortedCategories = Object.entries(farmingCategories)
    .sort(([, a], [, b]) => a.order - b.order);

  return (
    <div>
      <label className="block text-sm font-medium text-black mb-1">
        Category
      </label>
      <select
        value={selected}
        onChange={handleChange}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
      >
        <option value="">Select Subcategory</option>

        {sortedCategories.map(([catKey, cat]) => (
          <optgroup
            key={catKey}
            label={cat.label}
            className="font-semibold text-black"
          >
            {Object.entries(cat.subcategories).map(([subKey, subLabel]) => (
              <option
                key={subKey}
                value={subKey}
                className="font-medium text-gray-500"
              >
                {subLabel}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
