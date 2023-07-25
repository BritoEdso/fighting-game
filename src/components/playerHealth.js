export const PlayerHealth = () => {
  return (
    <div
      style="
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      border-top: 4px solid white;
      border-left: 4px solid white;
      border-bottom: 4px solid white;
    "
    >
      <div style="background-color: red; height: 30px; width: 100%"></div>
      <div
        id="playerHealth"
        style="
        position: absolute;
        background: #818cf8;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
      "
      ></div>
    </div>
  );
};
