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
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex h-8 flex-row gap-4">
            <div className="relative aspect-square h-full">
              <Link href="https://www.instagram.com/hackthenest_">
                <Image src="/square-instagram.svg" alt="instagram" fill />
              </Link>
            </div>

            <div className="relative aspect-square h-full">
              <Link href="https://www.twitter.com/hackthenest">
                <Image src="/square-twitter.svg" alt="twitter" fill />
              </Link>
            </div>
            {/* TODO */}
            <div className="relative aspect-square h-full">
              <Link href="https://www.facebook.com/hackthenest">
                <Image src="/square-facebook.svg" alt="facebook" fill />
              </Link>
            </div>

            <div className="relative aspect-square h-full">
              <Link href="https://www.linkedin.com/company/hackthenest/">
                <Image src="/linkedin.svg" alt="linkedin" fill />
              </Link>
            </div>
          </div>

          <p className="">text</p>
          <p className="">text</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
