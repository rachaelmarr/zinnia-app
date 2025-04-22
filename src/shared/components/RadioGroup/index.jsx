// /components/RadioGroup/index.jsx
import React from 'react';
export default function RadioGroup({ label, name, value, onChange, children }) {
    return (
      <fieldset className="flex flex-col gap-2 w-full">
        {label && (
          <legend className="text-sm font-medium font-[Literata] text-slate-600 leading-tight tracking-tight mb-1">
            {label}
          </legend>
        )}
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange,
          })
        )}
      </fieldset>
    );
  }
  