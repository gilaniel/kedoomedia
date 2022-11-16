import React from 'react';
import { Table } from 'react-bootstrap';

import { ColumnSorter, useSelectedColumns } from './ColumnSorter';

const instagramSorterColumns = [
  { name: 'gender', title: 'Пол' },
  { name: 'age', title: 'Возраст' },
  { name: 'geo', title: 'География' },
  { name: 'category', title: 'Категория' }
];

export const InstagramPriceTable: React.FC = () => {
  const [selectedColumns, setSelectedColumns, isColumnSelected] =
    useSelectedColumns(instagramSorterColumns);
  return (
    <>
      <ColumnSorter
        items={instagramSorterColumns}
        selected={selectedColumns}
        onChange={setSelectedColumns}
        controlId="instagram"
      />
      <Table striped bordered hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th rowSpan={2} className="align-middle">
              Персона
            </th>

            {isColumnSelected('category') && (
              <th rowSpan={2} className="align-middle">
                Категория
              </th>
            )}

            <th rowSpan={2} className="align-middle">
              Подписчиков
            </th>
            <th rowSpan={2} className="align-middle">
              Engagement Rate (ER)
            </th>

            <th colSpan={2}>Сторис (до 30 сек)</th>
            <th colSpan={2}>Фотопост</th>
            <th colSpan={2}>Видеопост (до 60 сек)</th>

            {isColumnSelected('gender') && <th colSpan={2}>Пол</th>}

            {isColumnSelected('age') && <th colSpan={4}>Возраст</th>}

            {isColumnSelected('geo') && <th>Гео</th>}

            <th rowSpan={2} className="align-middle">
              Скриншоты
            </th>
          </tr>
          <tr>
            <th>Охват</th>
            <th>Стоимость</th>
            <th>Охват</th>
            <th>Стоимость</th>
            <th>Охват</th>
            <th>Стоимость</th>

            {isColumnSelected('gender') && (
              <>
                <th>Муж</th>
                <th>Жен</th>
              </>
            )}

            {isColumnSelected('age') && (
              <>
                <th>0-17</th>
                <th>18-24</th>
                <th>25-44</th>
                <th>45+</th>
              </>
            )}

            {isColumnSelected('geo') && <th>РФ</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ирина Шихман</td>

            {isColumnSelected('category') && <td>Журналист, интервьюер</td>}

            <td>285 тыс.</td>
            <td>8,48%</td>
            <td>1200000</td>
            <td>900000 ₽</td>
            <td>1200000</td>
            <td>900000 ₽</td>
            <td>1900000</td>
            <td>1300000 ₽</td>

            {isColumnSelected('gender') && (
              <>
                <td>32%</td>
                <td>64%</td>
              </>
            )}

            {isColumnSelected('age') && (
              <>
                <td>32%</td>
                <td>71%</td>
                <td>32%</td>
                <td>71%</td>
              </>
            )}

            {isColumnSelected('geo') && <td>64%</td>}

            <td>Скачать</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
