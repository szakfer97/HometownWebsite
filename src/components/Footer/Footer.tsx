export default function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p>
          This website is about Satu Mare city, located in Romania. All rights
          reserved.
        </p>
        <p>
          Satu Mare 2023 |{" "}
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          |{" "}
          <a
            href="mailto:szakacsi.ferencadam@student.uoradea.ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </p>
      </div>
    </footer>
  );
}
