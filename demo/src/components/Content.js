function Content() {
  let title = String.raw`

    const myArray = [ 0, 3, 4, 8, 11];

    function callbackFxn(itemInArray) {
          return itemInArray + 5
      };

    myArray.map(callbackFxn);


    function foo(items) {
        var i;
        for (i = 0; i &lt; items.length; i++) {
            alert("Ace Rocks " + items[i]);
        }
    }
    `;

  return (
    <div class="h-screen bg-slate-100">
      <div class="h-28 bg-blue-200 flex justify-center items-center">
        <p class="font-mouse text-4xl">Debugging Station </p>
      </div>
      <div
        className="parent"
        class="pt-20 grid grid-cols-[500px,500px] grid-rows-[500px, 200px] justify-center items-center gap-10"
      >
        <div className="coding station" class="h-[30rem] w-auto bg-slate-300">
          <pre> {title} </pre>
        </div>
        <button class="col-start-1 border-black border-solid border-2 rounded-md ">
          Let's see if you have errors!
        </button>
        <div className="feedback + error station"></div>
      </div>
    </div>
  );
}

export default Content;
