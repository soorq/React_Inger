import styled from "styled-components";

export const TrackWrapper = styled.div`
  background-color: #010606;
  height: .2em;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
`

export const TrackProgress = styled.div`
  height: 100%;
  transition: background 0.1s ease-in-out;
  background: #4BB5E6;
  width: 15%;
`