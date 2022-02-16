import Image from "next/image";

function About() {
  // to-delete : for dev use only
  let a = [];
  for (let i = 0; i < 10; i++) {
    a.push(i);
  }

  return (
    // <div class="flex flex-col items-center h-screen justify-between bg-gray-50">
    <div class="container flex flex-col items-center">
      {/* <div class="w-3/12">
        <Image
          src="/img/trol.gif"
          alt="le_troll"
          width="400"
          height="400"
          class="rounded-xl"
        />
      </div> */}

      <div class="w-4/12 my-5 space-y-10 text-blue-900">
        <h1 class="my-10 font-medium text-5xl">About Me</h1>
        {a.map((p) => {
          return (
            <div class="space-y">
              <h3 class="font-semibold text-lg">{p + " parag"}</h3>

              <p>
                Ex occaecat deserunt enim Lorem ex voluptate excepteur
                reprehenderit eiusmod aliquip ea commodo est consectetur. Est
                veniam aliquip amet velit aliquip reprehenderit veniam aute.
                Elit consequat laboris aliquip cupidatat sint non.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
