import React from "react";
import styled from "styled-components";

interface ChipOptions {
  value: string;
  selected: boolean;
  onSelected: () => void;
}

const ChipContainer = styled.button<{ selected: boolean }>`
    padding: 4px 8px;
    border-radius: 15px;
    margin: 3px;
    transition: 0.15s;
    cursor: pointer;
    border: 1px solid #313131;
    color: white;
    background: transparent;
    font-family: Inter;
    &:hover, &.selected {
        border: 1px solid #ddb071;
        color: black;
        background: #ddb071;
    }
`;

export default function Chip({ value, selected, onSelected }: ChipOptions) {
  return (
    <ChipContainer onClick={onSelected} className={selected && "selected"}>
      {value}
    </ChipContainer>
  );
}
