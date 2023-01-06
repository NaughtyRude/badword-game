function Box(props) {
  let state = "text-black border-2 border-gray-300 dark:text-white";
  if (props.state === "C") state = "bg-emerald-500 text-white";
  if (props.state === "E") state = "bg-amber-500 text-white";
  if (props.state === "N") state = "bg-zinc-500 text-white dark:bg-gray-700";

  return (
    <div
      className={
        "w-8 h-8 sm:w-10 sm:h-10 grid place-items-center p-0 m-0 font-bold text-lg sm:text-2xl " + state
      }
    >
      {props.value}
    </div>
  );
}

function Help() {
  return (
    <>
      <p className="text-left text-sm sm:text-base py-5 font-regular opacity-75 mr-1">
        Guess the BADWORD in six tries.
        <hr />
        <p>Each guess must be a valid five-letter badword</p> 
        <p>Hit the enter button to submit.</p>
        <p>After each guess, the color of the tiles will change to show how
        close your guess was to the word.</p>
      </p>
      <hr />
      <h3 className="text-left font-bold py-5">Examples</h3>
      <div className="flex gap-1">
        <Box value="P" state="C" />
        <Box value="E" />
        <Box value="N" />
        <Box value="I" />
        <Box value="S" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letter <b>P</b> is in the word and in the correct spot.
      </p>
      <div className="flex gap-1">
        <Box value="B" />
        <Box value="O" state="E"/>
        <Box value="O" state="C" />
        <Box value="B" />
        <Box value="S" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The first <b>O</b> is in the word but is in the wrong spot
      </p>
      <div className="flex gap-1">
        <Box value="C" state="N"/>
        <Box value="U" state="N" />
        <Box value="N" state="N"/>
        <Box value="T" state="N"/>
        <Box value="S" state="N"/>
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letters are not in the word
      </p>
      <hr/>
      <p>This game is inspired by Wordle</p>
    </>
  );
}

export default Help;
