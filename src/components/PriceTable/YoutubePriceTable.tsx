import React from 'react';
import { Table } from 'react-bootstrap';

import { ColumnSorter, useSelectedColumns } from './ColumnSorter';

const youtubeSorterColumns = [
  { name: 'gender', title: 'Пол' },
  { name: 'age', title: 'Возраст' },
  { name: 'geo', title: 'География' },
  { name: 'cpv', title: 'CPV' },
  { name: 'category', title: 'Категория' }
];

export const YoutubePriceTable: React.FC = () => {
  const [selectedColumns, setSelectedColumns, isColumnSelected] =
    useSelectedColumns(youtubeSorterColumns);
  return (
    <>
      <ColumnSorter
        items={youtubeSorterColumns}
        selected={selectedColumns}
        onChange={setSelectedColumns}
        controlId="youtube"
      />
      <Table striped bordered hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th rowSpan={2} className="align-middle">
              Канал
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
              Просмотры на видео**
            </th>

            <th colSpan={2}>Стоимость интеграции (включая налоги)</th>

            {isColumnSelected('gender') && <th colSpan={2}>Пол</th>}

            {isColumnSelected('age') && <th colSpan={4}>Возраст</th>}

            {isColumnSelected('cpv') && <th colSpan={2}>CPV</th>}

            {isColumnSelected('geo') && <th>Гео</th>}

            <th rowSpan={2} className="align-middle">
              Скриншоты
            </th>
          </tr>
          <tr>
            <th>1-й слот</th>
            <th>2-й слот</th>

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

            {isColumnSelected('cpv') && (
              <>
                <th>1-й слот</th>
                <th>2-й слот</th>
              </>
            )}

            {isColumnSelected('geo') && <th>РФ</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>А поговорить? - Ирина Шихман</td>

            {isColumnSelected('category') && <td>Интервью, док. фильмы</td>}

            <td>1,76 млн.</td>
            <td>1500000</td>
            <td>1200000 ₽</td>
            <td>900000 ₽</td>

            {isColumnSelected('gender') && (
              <>
                <td>32%</td>
                <td>64%</td>
              </>
            )}

            {isColumnSelected('age') && (
              <>
                <td>71%</td>
                <td>71%</td>
                <td>71%</td>
                <td>71%</td>
              </>
            )}

            {isColumnSelected('cpv') && (
              <>
                <td>0,80 ₽</td>
                <td>0,80 ₽</td>
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
