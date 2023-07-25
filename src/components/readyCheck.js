export const ReadyCheck = () => {
  return (
    <div style="position: relative; display: inline-block">
    <div id="readyBar" class="anim">
      <div id="readyPlayerOne">Ready?</div>
      <div id="readyEnemyOne">Ready?</div>
      <button style="display: none;" id="startGame" onclick="">
        START
      </button>
      <div id="notReady">Players Not Ready</div>
    </div>
    </div>
  );
};
