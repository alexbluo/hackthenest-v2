import Image from "next/image";
import Link from "next/link";
// TODO: made with
const Footer = () => {
  return (
    <footer className="container mx-auto py-12 px-8 xl:py-24 xl:px-32">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4 ">
          <div className="relative flex h-32 w-32">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </div>

          <div className="flex h-8 w-8 flex-row gap-4">
            <div className="relative aspect-square h-full">
              <Link href="https://media.discordapp.net/attachments/776475361810448398/779130601088483338/Screen_Shot_2020-11-07_at_1.33.36_AM.png">
                <Image src="/evan.jpg" alt="evan" fill />
              </Link>
            </div>

            <div className="relative aspect-square h-full">
              <Link href="https://media.discordapp.net/attachments/776475361810448398/779130601088483338/Screen_Shot_2020-11-07_at_1.33.36_AM.png">
                <Image src="/evan.jpg" alt="evan" fill />
              </Link>
            </div>

            <div className="relative aspect-square h-full">
              <Link href="https://media.discordapp.net/attachments/776475361810448398/779130601088483338/Screen_Shot_2020-11-07_at_1.33.36_AM.png">
                <Image src="/evan.jpg" alt="evan" fill />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p>text</p>
          <p>text</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
