import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto py-12 lg:py-16">
      <div className="flex flex-row justify-between">
        {/* the div directly below is necessary https://stackoverflow.com/questions/33636796/chrome-safari-not-filling-100-height-of-flex-parent */}
        <div className="flex">
          <div className="relative aspect-square h-full">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="flex h-8 flex-row gap-6">
            <div className="relative aspect-square h-full">
              <a
                href="https://www.instagram.com/hackthenest_"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/instagram.svg" alt="instagram" fill />
              </a>
            </div>

            {/* TODO: check */}
            <div className="relative aspect-square h-full">
              <a
                href="https://www.facebook.com/rhhshackthenest"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/facebook.svg" alt="facebook" fill />
              </a>
            </div>

            <div className="relative aspect-square h-full">
              <a
                href="https://www.twitter.com/hackthenest"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/twitter.svg" alt="twitter" fill />
              </a>
            </div>

            <div className="relative aspect-square h-full">
              <a
                href="https://www.linkedin.com/company/hackthenest/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/linkedin.svg" alt="linkedin" fill />
              </a>
            </div>

            <div className="relative aspect-square h-full">
              <a
                href="https://www.github.com/alexbluo/hack-the-nest-2023/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/github.svg" alt="github" fill />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-right font-medium">
            {/* <p>hello@hackthenest.org</p> */}
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
              rel="noreferrer"
            >
              MLH Code of Conduct
            </a>
            <p>© Hack the Nest 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
