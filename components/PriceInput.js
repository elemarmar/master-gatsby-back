import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h4>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h4>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(ev) => onChange(createPatchFrom(ev.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
