const Winner = (arr) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
      return lines[i];
    }
  }
  return false;
};

export default Winner;
