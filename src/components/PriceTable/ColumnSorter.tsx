import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

export type SorterColumn = {
  name: string;
  title: string;
};

type ColumnSorterProps = {
  items: SorterColumn[];
  selected: string[];
  onChange: (value: string[]) => void;
  controlId: string;
};

export const ColumnSorter: React.FC<ColumnSorterProps> = ({
  items,
  selected,
  onChange,
  controlId
}) => {
  const onSelect = (column: string, checked: boolean) => {
    const newSelected = [...selected];

    if (!checked) {
      const index = newSelected.indexOf(column);
      newSelected.splice(index, 1);
    } else {
      newSelected.push(column);
    }

    onChange(newSelected);
  };
  return (
    <div className="mb-1">
      {items.map((item) => (
        <Form.Check
          key={item.name}
          inline
          type="checkbox"
          name={item.name}
          label={item.title}
          checked={selected.includes(item.name)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSelect(item.name, e.currentTarget.checked)
          }
          id={`${controlId}-${item.name}-checkbox`}
        />
      ))}
    </div>
  );
};

export const useSelectedColumns = <T extends SorterColumn, V extends T['name']>(
  initialColumns: T[]
): [V[], Dispatch<SetStateAction<V[]>>, (name: V) => boolean] => {
  const [columns, setColumns] = useState<V[]>(initialColumns.map(({ name }) => name as V));
  const isColumnSelected = (name: V) => columns.includes(name);
  return [columns, setColumns, isColumnSelected];
};
