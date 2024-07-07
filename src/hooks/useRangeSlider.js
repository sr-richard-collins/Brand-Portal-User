import { useState } from 'react';
export default function useRangeSlider() {
  const [selectedVals, setSelectedVals] = useState({
    '1': {
      textValue: 20,
      percent: 20
    },
    '2': {
      textValue: 20,
      percent: 20
    }
  });
  const [selectedRanges, setSelectedRanges] = useState({
    '1': '20-45',
    '2': '20-45'
  });
  const [selectedRanges2, setSelectedRanges2] = useState({
    '1': '500  4000',
    '2': '500  4000'
  });
  const onSlide = (index, value, percent) => {
    const selectedValues = {
      ...selectedVals
    };
    selectedValues[index] = {
      textValue: Number(value[0].toFixed(2)),
      percent: Number(percent[0].toFixed(2))
    };
    setSelectedVals(selectedValues);
  };
  const onSlide2 = (index, value) => {
    const selectedRange = {
      ...selectedRanges
    };
    selectedRange[index] = value[0] + '  ' + value[1];
    setSelectedRanges(selectedRange);
  };
  const onSlide3 = (index, value) => {
    const selectedRange2 = {
      ...selectedRanges2
    };
    selectedRange2[index] = value[0] + '       ' + value[1];
    setSelectedRanges2(selectedRange2);
  };
  return {
    selectedVals,
    selectedRanges,
    onSlide,
    onSlide2,
    onSlide3,
    selectedRanges2
  };
}