import Image from "next/image";

function Works() {
  // to-delete : for dev use only
  let a = [];
  for (let i = 0; i < 10; i++) {
    a.push(i);
  }

  return (
    // <div class="flex flex-col items-center h-screen justify-between bg-gray-50">
    <div class="container flex flex-col items-center">
      <div className="w-4/12 my-5 space-y-5 text-blue-900">
        <h1 className="my-10 font-medium text-5xl">My Projects</h1>
        {a.map((p) => {
          return (
            <p>
              {p} Ex occaecat deserunt enim Lorem ex voluptate excepteur
              reprehenderit eiusmod aliquip ea commodo est consectetur. Est
              veniam aliquip amet velit aliquip reprehenderit veniam aute. Elit
              consequat laboris aliquip cupidatat sint non.
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
