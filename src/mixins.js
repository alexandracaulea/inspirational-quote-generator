const screenReaderTextStyle = () => `
  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  border: 0;
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  `;

export default screenReaderTextStyle;
