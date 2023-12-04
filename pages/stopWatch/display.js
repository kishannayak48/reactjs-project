import React from "react";
import Stack from "react-bootstrap/Stack";
function Display(props) {
  const {flagData}=props;
  return (
    <Stack gap={3}>
      <div className="p-2">
        {/* <div>
          <ul>
            {flagData.map((click, index) => (
              <li key={index}>{click}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </Stack>
  );
}
export default Display;
