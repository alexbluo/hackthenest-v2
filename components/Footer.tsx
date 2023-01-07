import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto py-12 px-8 xl:py-16 xl:px-32">
      <div className="flex flex-row justify-between">
        {/* the div directly below is necessary https://stackoverflow.com/questions/33636796/chrome-safari-not-filling-100-height-of-flex-parent */}
        <div className="flex">
          <div className="relative aspect-square h-full">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="flex h-8 flex-row gap-4">
            <div className="relative aspect-square h-full">
              <a href="https://www.instagram.com/hackthenest_">
                <Image src="/square-instagram.svg" alt="instagram" fill />
              </a>
            </div>

            {/* TODO: check */}
            <div className="relative aspect-square h-full">
              <a href="https://www.facebook.com/hackthenest">
                <Image src="/square-facebook.svg" alt="facebook" fill />
              </a>
            </div>

            <div className="relative aspect-square h-full">
              <a href="https://www.twitter.com/hackthenest">
                <Image src="/square-twitter.svg" alt="twitter" fill />
              </a>
            </div>

            <div className="relative aspect-square h-full">
              <a href="https://www.linkedin.com/company/hackthenest/">
                <Image src="/linkedin.svg" alt="linkedin" fill />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-right">
            <p>hello@hackthenest.org</p>
            <p>© Hack the Nest 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
