import Image from "next/image";

function Home() {
  return (
    <div class="container flex flex-col items-center">
      <div class="rounded-md">
        <Image
          src="/img/square.png"
          alt="img"
          width="400"
          height="400"
          class="rounded-xl"
        />
      </div>

      <div class="w-4/12 space-y-10 text-blue-900">
        <p class="my-10 font-medium text-5xl">Hi, I'm Pierre</p>

        <div class="space-y-4">
          <p class="w-28 font-medium text-lg underline underline-offset-2 decoration-2 hover:decoration-yellow-300">
            Who am i
          </p>
          <div class="space-y-3 pl-5">
            <p class="indent-5">
              Ex occaecat deserunt enim Lorem ex voluptate excepteur
              reprehenderit eiusmod aliquip ea commodo est consectetur. Est
              veniam aliquip amet velit aliquip reprehenderit veniam aute. Elit
              consequat laboris aliquip cupidatat sint non.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <p class="w-28 font-medium text-lg underline underline-offset-2 decoration-2 hover:decoration-yellow-300">
            My timeline
          </p>

          <div class="space-y-3">
            <div class="flex flex-row space-x-5">
              <p class="text-blue-800 hover:text-yellow-300 font-medium indent-5 cursor-default">
                1997
              </p>
              <p>Born.</p>
            </div>
            <div class="flex flex-row space-x-5">
              <p class="text-blue-800 hover:text-yellow-300 font-medium indent-5 cursor-default">
                2015
              </p>
              <p>Graduated high school and attended university.</p>
            </div>
            <div class="flex flex-row space-x-5">
              <p class="text-blue-800 hover:text-yellow-300 font-medium indent-5 cursor-default">
                2018
              </p>
              <p>
                Worked as a front-end engineer intern at a tech consultant
                company.
              </p>
            </div>
            <div class="flex flex-row space-x-5">
              <p class="text-blue-800 hover:text-yellow-300 font-medium indent-5 cursor-default">
                2019
              </p>
              <p>
                Graduated from BINUS University with a bachelor degree in
                computer science.
              </p>
            </div>
            <div class="flex flex-row space-x-5">
              <p class="text-blue-900 hover:text-yellow-300 font-medium indent-5 cursor-default">
                2020
              </p>
              <p>
                Currently working as IT/Application support at a mining company.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <p class="w-28 font-medium text-lg underline underline-offset-2 decoration-2 hover:decoration-yellow-300">
            What i love
          </p>
          <div class="space-y-3 pl-5">
            <p class="indent-5">
              Music and music production has always been my passion since i was
              a kid but got <b>&quot;forced&quot;</b> to take computer science
              for uni and well, now i actually enjoy making apps and websites
              like these.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <p class="w-30 font-medium text-lg underline underline-offset-2 decoration-2 hover:decoration-yellow-300">
            Catch me up on
          </p>
          <div class="space-y-3">
            <div class="flex flex-row space-x-5">
              <div class="text-blue-800 hover:text-yellow-300 font-medium indent-5 cursor-default">
                
              </div>
              <p>Instagram</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
