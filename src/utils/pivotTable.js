export function pivotTable(table = [{ Section: '', Body: '' }]) {
  const newObject = {};

  table.forEach((row) => {
    return (newObject[row['Section']] = row['Body']);
  });
  return newObject;
}
