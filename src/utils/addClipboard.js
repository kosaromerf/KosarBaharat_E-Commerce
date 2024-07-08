const addClipboard = (info) => {
  navigator.clipboard.writeText(info);
};

export default addClipboard;
