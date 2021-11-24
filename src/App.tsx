import React, {useEffect, useState} from "react";

import CenterLayout from "./components/CenterLayout";
import Text from "./components/Text";
import Box from "./components/Box";

import {readFile, calculateBreathingRate} from "./utils";
import * as colors from "./colors";

const App = () => {
  // CSV file
  const [file, setFile] = useState<File | undefined>();

  // Accelerometer signal data
  const [data, setData] = useState();

  // Breathing rate
  const [rate, setRate] = useState(0);

  useEffect(() => {
    if (file !== undefined) {
      readFile(file, setData);
    }
  }, [file]);

  useEffect(() => {
    calculateBreathingRate(data);
  }, [data]);

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <CenterLayout>
      <Text size={30} color={colors.red}>Breathing Rate Calculator</Text>
      <Box border={`1px solid ${colors.blue}`} pv={30} ph={30} mt={30}>
        <Box>
          <Text size={20}>Please choose accelerometer's signal data file!</Text>
        </Box>
        <Box mt={20} flex justifyContent="center">
          <input
            type="file"
            onChange={handleChangeFile}
          />
        </Box>
      </Box>
      <Box mt={20}>
        <Text color={colors.yellow} size={26}>Rate: </Text>
        <Text color={colors.red} size={26}>{rate} / min</Text>
      </Box>
    </CenterLayout>
  );
};

export default App;
