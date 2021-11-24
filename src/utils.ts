import XLSX from "xlsx";

export const readFile = (file, setData) => {
  let  data;
  const xlsxReader = new FileReader();
  xlsxReader.onload = (e) => {
    const fileData = new Uint8Array(e?.target?.result as any);
    const workbook = XLSX.read(fileData, {
      type: "array",
      cellDates: true,
      cellNF: false,
      cellText: true,
      dateNF: "dd/mm/yyyy"
    });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const convertOptions = {
      raw: true
    };
    data = XLSX.utils.sheet_to_json(worksheet, convertOptions);
    setData(data);
  };
  xlsxReader.readAsArrayBuffer(file);
};

const filterNoise = (originData) => {
  const data = [] as number[];

  // Integrate count
  const IntegrateCount = 5;

  originData.forEach((_, index) => {
    let filteredSignal = 0;

    new Array(IntegrateCount).fill("").forEach((_, id) => {
      if ((index + id) < originData.length) {
        filteredSignal += originData[index + id];
      }
    });

    data[index] = filteredSignal;
  });

  return data;
};

export const calculateBreathingRate = (originData) => {
  if (!originData) return 0;

  // Inflection point count
  const inflectionCount = 0;

  // Extract x, y, z acceleration from signal data
  const data = originData.map(({x, y, z}) => ({x, y, z}));

  // Extract measurement time from signal data - s
  const totalTime = data[data.length - 1].t - data[0].t;

  data.forEach(({x, y, z}, index) => {
    // Avoid last value
    if (index < data.length - 1) {
      // Next signal value
      const next = data[index + 1];

      // Size of current acceleration vector
      const sa = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

      // Size of next acceleration vector
      const sb = Math.sqrt(Math.pow(next.x, 2) + Math.pow(next.y, 2) + Math.pow(next.z, 2));

      // Distance of two point
      const dist = Math.sqrt(Math.pow((x - next.x), 2) + Math.pow((y - next.y), 2) + Math.pow((z - next.z), 2));

      // Angle of current and next acceleration vector
      const angle = Math.acos((Math.pow(sa, 2) + Math.pow(sb, 2) - Math.pow(dist, 2)) / (2 * sa * sb));

      console.log(angle)
    }
  });
};
