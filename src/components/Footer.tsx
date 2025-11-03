const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Webby. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
