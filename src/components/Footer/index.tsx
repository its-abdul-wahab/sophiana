const navigation = {
  main: [
    { name: "+ 1-212-345-6789", href: "#" },
    { name: "Email: team@Sophiana.com", href: "#" },
    { name: "LOS ANGELES   HONG KONG ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="bg-skin">
        <div className="max-w-[662px] px-4 mx-auto pt-12">
          <div className="flex items-center justify-between py-12 px-8 border-t border-primary">
            {navigation.main.map((item) => (
              <div key={item.name} className="">
                <a
                  href={item.href}
                  className="text-[10px] font-inter-light tracking-[2px]"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="py-3 bg-[#DDD9D4]">
        <p className="text-center text-base font-inter-regular tracking-[3.75px] text-[#7E7C7C] ">
          SOPHIANA 2024
        </p>
      </div>
    </>
  );
}
